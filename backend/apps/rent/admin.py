from django.contrib import admin
from .models import RentEntry, RentPayment

@admin.register(RentEntry)
class RentEntryAdmin(admin.ModelAdmin):
    list_display = ('month', 'total_rent', 'per_person_rent', 'is_paid', 'due_date')
    list_filter = ('is_paid', 'due_date')
    readonly_fields = ('per_person_rent',)

@admin.register(RentPayment)
class RentPaymentAdmin(admin.ModelAdmin):
    list_display = ('member', 'rent_entry', 'amount_paid', 'payment_date', 'is_verified')
    list_filter = ('is_verified', 'payment_date')
    search_fields = ('member__user__email',)
