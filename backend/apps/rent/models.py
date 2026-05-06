from django.db import models
from apps.members.models import Member

class RentEntry(models.Model):
    """Monthly Rent Entry Model"""
    month = models.CharField(max_length=7)  # Format: YYYY-MM
    total_rent = models.DecimalField(max_digits=12, decimal_places=2)
    total_members = models.IntegerField()
    per_person_rent = models.DecimalField(max_digits=12, decimal_places=2)
    is_paid = models.BooleanField(default=False)
    due_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'rent_entries'
        unique_together = ('month',)
    
    def __str__(self):
        return f"Rent - {self.month}"


class RentPayment(models.Model):
    """Rent Payment Model"""
    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    rent_entry = models.ForeignKey(RentEntry, on_delete=models.CASCADE)
    amount_paid = models.DecimalField(max_digits=12, decimal_places=2)
    payment_date = models.DateField()
    payment_method = models.CharField(max_length=50, blank=True)
    is_verified = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'rent_payments'
    
    def __str__(self):
        return f"{self.member} - {self.rent_entry}"
