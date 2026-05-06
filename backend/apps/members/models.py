from django.db import models
from apps.authentication.models import CustomUser

class Member(models.Model):
    """Member Model for Bachelor House"""
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    member_id = models.CharField(max_length=50, unique=True)
    phone = models.CharField(max_length=20, blank=True, null=True)
    emergency_contact = models.CharField(max_length=100, blank=True, null=True)
    emergency_contact_phone = models.CharField(max_length=20, blank=True, null=True)
    join_date = models.DateField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'members'
    
    def __str__(self):
        return f"{self.user.first_name} ({self.member_id})"
