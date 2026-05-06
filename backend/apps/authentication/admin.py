from django.contrib import admin
from .models import CustomUser

@admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('email', 'first_name', 'last_name', 'role', 'is_email_verified', 'created_at')
    list_filter = ('role', 'is_email_verified', 'created_at')
    search_fields = ('email', 'first_name', 'last_name')
    readonly_fields = ('created_at', 'updated_at')
    
    fieldsets = (
        ('Personal Info', {
            'fields': ('email', 'first_name', 'last_name', 'phone', 'profile_picture')
        }),
        ('Security', {
            'fields': ('password', 'is_email_verified', 'email_verification_token')
        }),
        ('Permissions', {
            'fields': ('role', 'is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')
        }),
        ('Important Dates', {
            'fields': ('last_login', 'created_at', 'updated_at')
        }),
    )
