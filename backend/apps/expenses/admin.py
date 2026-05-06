from django.contrib import admin
from .models import ExpenseCategory, BazarEntry, ExpenseItem

@admin.register(ExpenseCategory)
class ExpenseCategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

@admin.register(BazarEntry)
class BazarEntryAdmin(admin.ModelAdmin):
    list_display = ('expense_date', 'member', 'category', 'total_amount')
    list_filter = ('expense_date', 'category')
    search_fields = ('member__user__email',)

@admin.register(ExpenseItem)
class ExpenseItemAdmin(admin.ModelAdmin):
    list_display = ('item_name', 'item_quantity', 'item_price')
    search_fields = ('item_name',)
