from django.db import models
from apps.members.models import Member

class ExpenseCategory(models.Model):
    """Expense Category Model"""
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'expense_categories'
    
    def __str__(self):
        return self.name


class BazarEntry(models.Model):
    """Daily Bazar/Expense Entry Model"""
    member = models.ForeignKey(Member, on_delete=models.SET_NULL, null=True)
    category = models.ForeignKey(ExpenseCategory, on_delete=models.SET_NULL, null=True)
    expense_date = models.DateField()
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField(blank=True, null=True)
    receipt_image = models.ImageField(upload_to='receipts/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'bazar_entries'
    
    def __str__(self):
        return f"Bazar - {self.expense_date} - {self.total_amount}"


class ExpenseItem(models.Model):
    """Individual Expense Items Model"""
    bazar_entry = models.ForeignKey(BazarEntry, on_delete=models.CASCADE)
    item_name = models.CharField(max_length=200)
    item_quantity = models.CharField(max_length=100, blank=True, null=True)
    item_price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'expense_items'
    
    def __str__(self):
        return f"{self.item_name} - {self.item_price}"
