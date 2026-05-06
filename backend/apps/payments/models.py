from django.db import models
from apps.members.models import Member

class Payment(models.Model):
    """Payment Model"""
    PAYMENT_METHODS = [
        ('bkash', 'bKash'),
        ('nagad', 'Nagad'),
        ('rocket', 'Rocket'),
        ('cash', 'Cash'),
        ('bank', 'Bank Transfer'),
    ]
    
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('completed', 'Completed'),
        ('failed', 'Failed'),
        ('verified', 'Verified'),
    ]
    
    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    payment_method = models.CharField(max_length=50, choices=PAYMENT_METHODS)
    transaction_id = models.CharField(max_length=255, blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    screenshot = models.ImageField(upload_to='payment_screenshots/', blank=True, null=True)
    payment_date = models.DateTimeField(auto_now_add=True)
    verified_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'payments'
    
    def __str__(self):
        return f"{self.member} - {self.amount} ({self.status})"
