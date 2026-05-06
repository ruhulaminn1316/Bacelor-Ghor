from django.contrib import admin
from .models import UtilityType, UtilityEntry

@admin.register(UtilityType)
class UtilityTypeAdmin(admin.ModelAdmin):
    list_display = ('name',)

@admin.register(UtilityEntry)
class UtilityEntryAdmin(admin.ModelAdmin):
    list_display = ('utility_type', 'month', 'total_amount', 'per_person_amount', 'is_paid', 'due_date')
    list_filter = ('is_paid', 'due_date', 'utility_type')
    readonly_fields = ('per_person_amount',)
