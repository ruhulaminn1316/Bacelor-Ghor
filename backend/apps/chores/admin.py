from django.contrib import admin
from .models import ChoreType, ChoreAssignment

@admin.register(ChoreType)
class ChoreTypeAdmin(admin.ModelAdmin):
    list_display = ('name',)

@admin.register(ChoreAssignment)
class ChoreAssignmentAdmin(admin.ModelAdmin):
    list_display = ('member', 'chore_type', 'assigned_date', 'due_date', 'is_completed')
    list_filter = ('is_completed', 'chore_type', 'assigned_date')
    search_fields = ('member__user__email',)
