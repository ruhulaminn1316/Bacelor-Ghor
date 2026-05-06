from django.db import models
from apps.members.models import Member

class Room(models.Model):
    """Room Model"""
    room_number = models.CharField(max_length=50, unique=True)
    capacity = models.IntegerField(default=1)
    description = models.TextField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'rooms'
    
    def __str__(self):
        return self.room_number


class RoomAssignment(models.Model):
    """Room Assignment Model"""
    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    room = models.ForeignKey(Room, on_delete=models.SET_NULL, null=True)
    seat_number = models.IntegerField(blank=True, null=True)
    assigned_date = models.DateField(auto_now_add=True)
    is_current = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'room_assignments'
    
    def __str__(self):
        return f"{self.member} - {self.room} (Seat: {self.seat_number})"
