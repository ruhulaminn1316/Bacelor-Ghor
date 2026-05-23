from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone

class CustomUser(AbstractUser):
    """Custom User Model with additional fields"""
    ROLE_CHOICES = [
        ('admin', 'Admin'),
        ('user', 'User'),
    ]

    TWO_FACTOR_CHOICES = [
        ('email', 'Email'),
    ]
    
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20, blank=True, null=True)
    profile_picture = models.ImageField(upload_to='profile_pics/', blank=True, null=True)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='user')
    is_email_verified = models.BooleanField(default=False)
    email_verification_token = models.CharField(max_length=255, blank=True, null=True)
    email_verification_expires_at = models.DateTimeField(blank=True, null=True)
    password_reset_token = models.CharField(max_length=255, blank=True, null=True)
    password_reset_expires_at = models.DateTimeField(blank=True, null=True)
    is_deactivated = models.BooleanField(default=False)
    is_blocked = models.BooleanField(default=False)
    blocked_reason = models.TextField(blank=True, null=True)
    two_factor_enabled = models.BooleanField(default=False)
    two_factor_method = models.CharField(max_length=20, choices=TWO_FACTOR_CHOICES, default='email')
    last_password_change_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'auth_user'
    
    def __str__(self):
        return self.email


class SecurityToken(models.Model):
    PURPOSE_CHOICES = [
        ('email_verification', 'Email Verification'),
        ('password_reset', 'Password Reset'),
        ('otp_login', 'OTP Login'),
    ]

    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='security_tokens')
    purpose = models.CharField(max_length=50, choices=PURPOSE_CHOICES)
    token = models.CharField(max_length=255)
    metadata = models.JSONField(default=dict, blank=True)
    expires_at = models.DateTimeField()
    is_used = models.BooleanField(default=False)
    used_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def mark_used(self):
        self.is_used = True
        self.used_at = timezone.now()
        self.save(update_fields=['is_used', 'used_at'])

    def __str__(self):
        return f'{self.user.email} - {self.purpose}'


class LoginSession(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='login_sessions')
    session_key = models.CharField(max_length=255, blank=True, null=True)
    device_name = models.CharField(max_length=120, blank=True, null=True)
    user_agent = models.TextField(blank=True, null=True)
    ip_address = models.GenericIPAddressField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    last_seen_at = models.DateTimeField(auto_now=True)
    logged_out_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def mark_logged_out(self):
        self.is_active = False
        self.logged_out_at = timezone.now()
        self.save(update_fields=['is_active', 'logged_out_at'])

    def __str__(self):
        return f'{self.user.email} - {self.device_name or "Session"}'


class UserActivityLog(models.Model):
    ACTION_CHOICES = [
        ('register', 'Register'),
        ('login', 'Login'),
        ('login_2fa_requested', 'Login 2FA Requested'),
        ('verify_email', 'Verify Email'),
        ('forgot_password', 'Forgot Password'),
        ('reset_password', 'Reset Password'),
        ('change_password', 'Change Password'),
        ('update_profile', 'Update Profile'),
        ('deactivate_account', 'Deactivate Account'),
        ('block_user', 'Block User'),
        ('unblock_user', 'Unblock User'),
        ('logout', 'Logout'),
        ('verify_otp', 'Verify OTP'),
        ('google_login', 'Google Login'),
    ]

    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='activity_logs')
    action = models.CharField(max_length=60, choices=ACTION_CHOICES)
    details = models.TextField(blank=True, null=True)
    metadata = models.JSONField(default=dict, blank=True)
    ip_address = models.GenericIPAddressField(blank=True, null=True)
    user_agent = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.user.email} - {self.action}'
