from rest_framework import serializers
from .models import CustomUser, LoginSession, UserActivityLog

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = (
            'id',
            'username',
            'email',
            'first_name',
            'last_name',
            'phone',
            'profile_picture',
            'role',
            'is_email_verified',
            'is_deactivated',
            'is_blocked',
            'blocked_reason',
            'two_factor_enabled',
            'two_factor_method',
            'last_password_change_at',
            'created_at',
            'updated_at',
        )
        read_only_fields = ('id',)

class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8)
    password_confirm = serializers.CharField(write_only=True, min_length=8)
    
    class Meta:
        model = CustomUser
        fields = ('username', 'email', 'password', 'password_confirm', 'first_name', 'last_name', 'phone')
    
    def validate(self, data):
        if data['password'] != data.pop('password_confirm'):
            raise serializers.ValidationError({'password': 'Passwords do not match.'})
        return data
    
    def create(self, validated_data):
        password = validated_data.pop('password')
        validated_data.pop('password_confirm', None)
        user = CustomUser(**validated_data)
        user.set_password(password)
        user.save()
        return user

class UserLoginSerializer(serializers.Serializer):
    identifier = serializers.CharField()
    password = serializers.CharField(write_only=True)
    device_name = serializers.CharField(required=False, allow_blank=True)


class EmailVerificationRequestSerializer(serializers.Serializer):
    email = serializers.EmailField()


class TokenCodeSerializer(serializers.Serializer):
    token = serializers.CharField()


class ForgotPasswordSerializer(serializers.Serializer):
    email = serializers.EmailField()


class ResetPasswordSerializer(serializers.Serializer):
    token = serializers.CharField()
    password = serializers.CharField(write_only=True, min_length=8)
    password_confirm = serializers.CharField(write_only=True, min_length=8)

    def validate(self, data):
        if data['password'] != data.pop('password_confirm'):
            raise serializers.ValidationError({'password': 'Passwords do not match.'})
        return data


class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(write_only=True)
    new_password = serializers.CharField(write_only=True, min_length=8)
    new_password_confirm = serializers.CharField(write_only=True, min_length=8)

    def validate(self, data):
        if data['new_password'] != data.pop('new_password_confirm'):
            raise serializers.ValidationError({'new_password': 'Passwords do not match.'})
        return data


class OTPVerificationSerializer(serializers.Serializer):
    verification_id = serializers.IntegerField()
    code = serializers.CharField()


class GoogleLoginSerializer(serializers.Serializer):
    id_token = serializers.CharField()


class LogoutSerializer(serializers.Serializer):
    session_id = serializers.IntegerField(required=False)


class AccountDeactivationSerializer(serializers.Serializer):
    reason = serializers.CharField(required=False, allow_blank=True)


class LoginSessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = LoginSession
        fields = ('id', 'device_name', 'user_agent', 'ip_address', 'is_active', 'last_seen_at', 'logged_out_at', 'created_at')


class UserActivityLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserActivityLog
        fields = ('id', 'action', 'details', 'metadata', 'ip_address', 'user_agent', 'created_at')
