from django.contrib import admin
from .models import CustomUser, LoginSession, SecurityToken, UserActivityLog

@admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('email', 'first_name', 'last_name', 'role', 'is_email_verified', 'is_deactivated', 'is_blocked', 'created_at')
    list_filter = ('role', 'is_email_verified', 'is_deactivated', 'is_blocked', 'created_at')
    search_fields = ('email', 'first_name', 'last_name', 'username')
    readonly_fields = ('created_at', 'updated_at')
    
    fieldsets = (
        ('Personal Info', {
            'fields': ('email', 'first_name', 'last_name', 'phone', 'profile_picture')
        }),
        ('Security', {
            'fields': (
                'password',
                'is_email_verified',
                'email_verification_token',
                'email_verification_expires_at',
                'password_reset_token',
                'password_reset_expires_at',
                'two_factor_enabled',
                'two_factor_method',
                'is_deactivated',
                'is_blocked',
                'blocked_reason',
                'last_password_change_at',
            )
        }),
        ('Permissions', {
            'fields': ('role', 'is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')
        }),
        ('Important Dates', {
            'fields': ('last_login', 'created_at', 'updated_at')
        }),
    )


@admin.register(SecurityToken)
class SecurityTokenAdmin(admin.ModelAdmin):
    list_display = ('user', 'purpose', 'token', 'is_used', 'expires_at', 'created_at')
    list_filter = ('purpose', 'is_used', 'created_at')
    search_fields = ('user__email', 'token')


@admin.register(LoginSession)
class LoginSessionAdmin(admin.ModelAdmin):
    list_display = ('user', 'device_name', 'ip_address', 'is_active', 'last_seen_at', 'created_at')
    list_filter = ('is_active', 'created_at')
    search_fields = ('user__email', 'device_name', 'ip_address')


@admin.register(UserActivityLog)
class UserActivityLogAdmin(admin.ModelAdmin):
    list_display = ('user', 'action', 'ip_address', 'created_at')
    list_filter = ('action', 'created_at')
    search_fields = ('user__email', 'action', 'details')
