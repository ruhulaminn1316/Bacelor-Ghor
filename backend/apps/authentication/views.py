import secrets
from datetime import timedelta

import requests
from django.conf import settings
from django.contrib.auth import authenticate
from django.contrib.auth.password_validation import validate_password
from django.core.mail import send_mail
from django.utils import timezone
from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from .models import CustomUser, LoginSession, SecurityToken, UserActivityLog
from .serializers import (
    AccountDeactivationSerializer,
    ChangePasswordSerializer,
    EmailVerificationRequestSerializer,
    ForgotPasswordSerializer,
    GoogleLoginSerializer,
    LoginSessionSerializer,
    OTPVerificationSerializer,
    ResetPasswordSerializer,
    TokenCodeSerializer,
    UserActivityLogSerializer,
    UserLoginSerializer,
    UserRegisterSerializer,
    UserSerializer,
)


def _client_ip(request):
    forwarded = request.META.get('HTTP_X_FORWARDED_FOR')
    if forwarded:
        return forwarded.split(',')[0].strip()
    return request.META.get('REMOTE_ADDR')


def _create_activity(user, action, request=None, details='', metadata=None):
    return UserActivityLog.objects.create(
        user=user,
        action=action,
        details=details,
        metadata=metadata or {},
        ip_address=_client_ip(request) if request else None,
        user_agent=request.META.get('HTTP_USER_AGENT', '') if request else '',
    )


def _create_security_token(user, purpose, ttl_minutes=15, metadata=None):
    token_value = f'{secrets.randbelow(1_000_000):06d}' if purpose == 'otp_login' else secrets.token_urlsafe(32)
    expires_at = timezone.now() + timedelta(minutes=ttl_minutes)
    token = SecurityToken.objects.create(
        user=user,
        purpose=purpose,
        token=token_value,
        metadata=metadata or {},
        expires_at=expires_at,
    )

    if purpose == 'email_verification':
        user.email_verification_token = token_value
        user.email_verification_expires_at = expires_at
        user.save(update_fields=['email_verification_token', 'email_verification_expires_at'])
    elif purpose == 'password_reset':
        user.password_reset_token = token_value
        user.password_reset_expires_at = expires_at
        user.save(update_fields=['password_reset_token', 'password_reset_expires_at'])

    return token


def _send_security_email(user, subject, message):
    send_mail(
        subject,
        message,
        settings.EMAIL_HOST_USER or 'no-reply@bachelor-ghor.local',
        [user.email],
        fail_silently=True,
    )


def _issue_tokens(user, request, device_name=''):
    refresh = RefreshToken.for_user(user)
    user.last_login = timezone.now()
    user.save(update_fields=['last_login'])
    LoginSession.objects.create(
        user=user,
        session_key=str(refresh['jti']),
        device_name=device_name or request.META.get('HTTP_USER_AGENT', 'Unknown device')[:120],
        user_agent=request.META.get('HTTP_USER_AGENT', ''),
        ip_address=_client_ip(request),
    )
    _create_activity(user, 'login', request, 'User logged in successfully.')
    return refresh


class AuthenticationViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.is_staff or getattr(user, 'role', '') == 'admin':
            return CustomUser.objects.all().order_by('-created_at')
        return CustomUser.objects.filter(id=user.id)

    def get_permissions(self):
        if self.action in {
            'register',
            'login',
            'forgot_password',
            'reset_password',
            'verify_email',
            'resend_verification_email',
            'google_login',
            'verify_otp',
        }:
            return [AllowAny()]
        return super().get_permissions()

    @action(detail=False, methods=['post'])
    def register(self, request):
        serializer = UserRegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = _create_security_token(user, 'email_verification', ttl_minutes=60)
        _send_security_email(
            user,
            'Verify your email',
            f'Use this verification token to activate your account: {token.token}',
        )
        _create_activity(user, 'register', request, 'User registered and verification email sent.')
        refresh = RefreshToken.for_user(user)
        return Response(
            {
                'user': UserSerializer(user).data,
                'access': str(refresh.access_token),
                'refresh': str(refresh),
                'email_verification_required': True,
                'message': 'User registered successfully.',
            },
            status=status.HTTP_201_CREATED,
        )

    @action(detail=False, methods=['post'])
    def login(self, request):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        identifier = serializer.validated_data['identifier']
        password = serializer.validated_data['password']
        device_name = serializer.validated_data.get('device_name', '')

        user = authenticate(request, username=identifier, password=password)
        if not user:
            return Response({'detail': 'Invalid credentials.'}, status=status.HTTP_401_UNAUTHORIZED)

        if user.is_deactivated:
            return Response({'detail': 'Account is deactivated.'}, status=status.HTTP_403_FORBIDDEN)

        if user.is_blocked:
            return Response({'detail': user.blocked_reason or 'Account is blocked.'}, status=status.HTTP_403_FORBIDDEN)

        if user.two_factor_enabled:
            token = _create_security_token(
                user,
                'otp_login',
                ttl_minutes=10,
                metadata={'device_name': device_name or '', 'identifier': identifier},
            )
            _send_security_email(
                user,
                'Your verification code',
                f'Your one-time code is {token.token}. It expires in 10 minutes.',
            )
            _create_activity(user, 'login_2fa_requested', request, '2FA login code sent.')
            return Response(
                {
                    'requires_otp': True,
                    'verification_id': token.id,
                    'message': 'Two-factor verification required.',
                },
                status=status.HTTP_200_OK,
            )

        refresh = _issue_tokens(user, request, device_name=device_name)
        return Response(
            {
                'user': UserSerializer(user).data,
                'access': str(refresh.access_token),
                'refresh': str(refresh),
            },
            status=status.HTTP_200_OK,
        )

    @action(detail=False, methods=['post'])
    def verify_otp(self, request):
        serializer = OTPVerificationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        verification_id = serializer.validated_data['verification_id']
        code = serializer.validated_data['code']

        try:
            token = SecurityToken.objects.select_related('user').get(
                id=verification_id,
                purpose='otp_login',
                token=code,
                is_used=False,
            )
        except SecurityToken.DoesNotExist:
            return Response({'detail': 'Invalid verification code.'}, status=status.HTTP_400_BAD_REQUEST)

        if token.expires_at < timezone.now():
            return Response({'detail': 'Verification code expired.'}, status=status.HTTP_400_BAD_REQUEST)

        token.mark_used()
        refresh = _issue_tokens(token.user, request, device_name=token.metadata.get('device_name', ''))
        _create_activity(token.user, 'verify_otp', request, 'OTP verification successful.')
        return Response(
            {
                'user': UserSerializer(token.user).data,
                'access': str(refresh.access_token),
                'refresh': str(refresh),
            },
            status=status.HTTP_200_OK,
        )

    @action(detail=False, methods=['post'])
    def logout(self, request):
        session_id = request.data.get('session_id')
        if session_id:
            LoginSession.objects.filter(id=session_id, user=request.user).update(is_active=False, logged_out_at=timezone.now())
        else:
            LoginSession.objects.filter(user=request.user, is_active=True).update(is_active=False, logged_out_at=timezone.now())
        _create_activity(request.user, 'logout', request, 'User logged out.')
        return Response({'message': 'Successfully logged out.'}, status=status.HTTP_200_OK)

    @action(detail=False, methods=['get'])
    def profile(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

    @action(detail=False, methods=['put', 'patch'])
    def update_profile(self, request):
        serializer = UserSerializer(request.user, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        _create_activity(request.user, 'update_profile', request, 'Profile updated.')
        return Response(serializer.data)

    @action(detail=False, methods=['post'])
    def change_password(self, request):
        serializer = ChangePasswordSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        if not request.user.check_password(serializer.validated_data['old_password']):
            return Response({'detail': 'Old password is incorrect.'}, status=status.HTTP_400_BAD_REQUEST)

        request.user.set_password(serializer.validated_data['new_password'])
        request.user.last_password_change_at = timezone.now()
        request.user.save(update_fields=['password', 'last_password_change_at'])
        _create_activity(request.user, 'change_password', request, 'Password changed.')
        return Response({'message': 'Password changed successfully.'}, status=status.HTTP_200_OK)

    @action(detail=False, methods=['post'])
    def request_email_verification(self, request):
        serializer = EmailVerificationRequestSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = CustomUser.objects.filter(email=serializer.validated_data['email']).first()
        if not user:
            return Response({'message': 'If the account exists, verification email has been sent.'}, status=status.HTTP_200_OK)

        token = _create_security_token(user, 'email_verification', ttl_minutes=60)
        _send_security_email(user, 'Verify your email', f'Your verification token is {token.token}')
        _create_activity(user, 'verify_email', request, 'Verification email requested.')
        return Response({'message': 'Verification email sent.'}, status=status.HTTP_200_OK)

    @action(detail=False, methods=['post'])
    def verify_email(self, request):
        serializer = TokenCodeSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        token_value = serializer.validated_data['token']

        try:
            token = SecurityToken.objects.select_related('user').get(
                purpose='email_verification',
                token=token_value,
                is_used=False,
            )
        except SecurityToken.DoesNotExist:
            return Response({'detail': 'Invalid verification token.'}, status=status.HTTP_400_BAD_REQUEST)

        if token.expires_at < timezone.now():
            return Response({'detail': 'Verification token expired.'}, status=status.HTTP_400_BAD_REQUEST)

        user = token.user
        user.is_email_verified = True
        user.email_verification_token = None
        user.email_verification_expires_at = None
        user.save(update_fields=['is_email_verified', 'email_verification_token', 'email_verification_expires_at'])
        token.mark_used()
        _create_activity(user, 'verify_email', request, 'Email verified.')
        return Response({'message': 'Email verified successfully.'}, status=status.HTTP_200_OK)

    @action(detail=False, methods=['post'])
    def resend_verification_email(self, request):
        serializer = EmailVerificationRequestSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = CustomUser.objects.filter(email=serializer.validated_data['email']).first()
        if not user:
            return Response({'message': 'If the account exists, verification email has been sent.'}, status=status.HTTP_200_OK)

        token = _create_security_token(user, 'email_verification', ttl_minutes=60)
        _send_security_email(user, 'Verify your email', f'Your verification token is {token.token}')
        return Response({'message': 'Verification email resent.'}, status=status.HTTP_200_OK)

    @action(detail=False, methods=['post'])
    def forgot_password(self, request):
        serializer = ForgotPasswordSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = CustomUser.objects.filter(email=serializer.validated_data['email']).first()
        if user:
            token = _create_security_token(user, 'password_reset', ttl_minutes=30)
            _send_security_email(user, 'Reset your password', f'Use this reset token: {token.token}')
            _create_activity(user, 'forgot_password', request, 'Password reset requested.')
        return Response({'message': 'If the account exists, password reset instructions have been sent.'}, status=status.HTTP_200_OK)

    @action(detail=False, methods=['post'])
    def reset_password(self, request):
        serializer = ResetPasswordSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        token_value = serializer.validated_data['token']

        try:
            token = SecurityToken.objects.select_related('user').get(
                purpose='password_reset',
                token=token_value,
                is_used=False,
            )
        except SecurityToken.DoesNotExist:
            return Response({'detail': 'Invalid reset token.'}, status=status.HTTP_400_BAD_REQUEST)

        if token.expires_at < timezone.now():
            return Response({'detail': 'Reset token expired.'}, status=status.HTTP_400_BAD_REQUEST)

        user = token.user
        user.set_password(serializer.validated_data['password'])
        user.password_reset_token = None
        user.password_reset_expires_at = None
        user.last_password_change_at = timezone.now()
        user.save(update_fields=['password', 'password_reset_token', 'password_reset_expires_at', 'last_password_change_at'])
        token.mark_used()
        _create_activity(user, 'reset_password', request, 'Password reset completed.')
        return Response({'message': 'Password reset successfully.'}, status=status.HTTP_200_OK)

    @action(detail=False, methods=['post'])
    def deactivate_account(self, request):
        serializer = AccountDeactivationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        request.user.is_deactivated = True
        request.user.is_active = False
        request.user.save(update_fields=['is_deactivated', 'is_active'])
        LoginSession.objects.filter(user=request.user, is_active=True).update(is_active=False, logged_out_at=timezone.now())
        _create_activity(request.user, 'deactivate_account', request, serializer.validated_data.get('reason', 'Account deactivated.'))
        return Response({'message': 'Account deactivated successfully.'}, status=status.HTTP_200_OK)

    @action(detail=False, methods=['get'])
    def sessions(self, request):
        sessions = request.user.login_sessions.all().order_by('-created_at')[:50]
        return Response(LoginSessionSerializer(sessions, many=True).data)

    @action(detail=False, methods=['post'])
    def logout_all(self, request):
        LoginSession.objects.filter(user=request.user, is_active=True).update(is_active=False, logged_out_at=timezone.now())
        _create_activity(request.user, 'logout', request, 'Logged out from all devices.')
        return Response({'message': 'All sessions logged out.'}, status=status.HTTP_200_OK)

    @action(detail=False, methods=['get'])
    def activity_logs(self, request):
        logs = request.user.activity_logs.all().order_by('-created_at')[:100]
        return Response(UserActivityLogSerializer(logs, many=True).data)

    @action(detail=True, methods=['post'])
    def block_user(self, request, pk=None):
        if not (request.user.is_staff or getattr(request.user, 'role', '') == 'admin'):
            return Response({'detail': 'Permission denied.'}, status=status.HTTP_403_FORBIDDEN)
        target = self.get_object()
        target.is_blocked = True
        target.is_active = False
        target.blocked_reason = request.data.get('reason', 'Blocked by admin.')
        target.save(update_fields=['is_blocked', 'is_active', 'blocked_reason'])
        _create_activity(request.user, 'block_user', request, f'Blocked {target.email}.')
        return Response({'message': 'User blocked.'}, status=status.HTTP_200_OK)

    @action(detail=True, methods=['post'])
    def unblock_user(self, request, pk=None):
        if not (request.user.is_staff or getattr(request.user, 'role', '') == 'admin'):
            return Response({'detail': 'Permission denied.'}, status=status.HTTP_403_FORBIDDEN)
        target = self.get_object()
        target.is_blocked = False
        target.is_active = True
        target.blocked_reason = ''
        target.save(update_fields=['is_blocked', 'is_active', 'blocked_reason'])
        _create_activity(request.user, 'unblock_user', request, f'Unblocked {target.email}.')
        return Response({'message': 'User unblocked.'}, status=status.HTTP_200_OK)

    @action(detail=False, methods=['post'])
    def google_login(self, request):
        serializer = GoogleLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        try:
            response = requests.get(
                'https://oauth2.googleapis.com/tokeninfo',
                params={'id_token': serializer.validated_data['id_token']},
                timeout=10,
            )
            if response.status_code != 200:
                return Response({'detail': 'Invalid Google token.'}, status=status.HTTP_400_BAD_REQUEST)
            payload = response.json()
        except requests.RequestException:
            return Response({'detail': 'Google verification failed.'}, status=status.HTTP_502_BAD_GATEWAY)

        email = payload.get('email')
        if not email:
            return Response({'detail': 'Google account email missing.'}, status=status.HTTP_400_BAD_REQUEST)

        user, created = CustomUser.objects.get_or_create(
            email=email,
            defaults={
                'username': email.split('@')[0],
                'first_name': payload.get('given_name', ''),
                'last_name': payload.get('family_name', ''),
                'is_email_verified': True,
            },
        )
        if created:
            user.set_unusable_password()
            user.save(update_fields=['password'])

        if user.is_blocked or user.is_deactivated:
            return Response({'detail': 'Account is not available.'}, status=status.HTTP_403_FORBIDDEN)

        refresh = _issue_tokens(user, request, device_name='Google Sign-In')
        _create_activity(user, 'google_login', request, 'Google login completed.')
        return Response(
            {
                'user': UserSerializer(user).data,
                'access': str(refresh.access_token),
                'refresh': str(refresh),
            },
            status=status.HTTP_200_OK,
        )