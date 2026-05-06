from django.db import models
from apps.members.models import Member

class Notification(models.Model):
    """Notification Model"""
    NOTIFICATION_TYPES = [
        ('rent_due', 'Rent Due'),
        ('utility_due', 'Utility Due'),
        ('meal_reminder', 'Meal Reminder'),
        ('low_balance', 'Low Balance'),
        ('duty_reminder', 'Duty Reminder'),
        ('payment_confirmation', 'Payment Confirmation'),
        ('notice', 'Notice'),
    ]
    
    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    notification_type = models.CharField(max_length=50, choices=NOTIFICATION_TYPES)
    title = models.CharField(max_length=255)
    message = models.TextField()
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'notifications'
    
    def __str__(self):
        return f"{self.member} - {self.notification_type}"
