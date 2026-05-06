from django.contrib import admin
from .models import Member

@admin.register(Member)
class MemberAdmin(admin.ModelAdmin):
    list_display = ('member_id', 'user', 'phone', 'join_date', 'is_active')
    list_filter = ('is_active', 'join_date')
    search_fields = ('member_id', 'user__email', 'user__first_name')
    readonly_fields = ('created_at', 'updated_at', 'join_date')
