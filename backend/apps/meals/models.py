from django.db import models
from apps.members.models import Member

class MealEntry(models.Model):
    """Daily Meal Entry Model"""
    MEAL_TYPES = [
        ('breakfast', 'Breakfast'),
        ('lunch', 'Lunch'),
        ('dinner', 'Dinner'),
    ]
    
    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    meal_type = models.CharField(max_length=20, choices=MEAL_TYPES)
    meal_date = models.DateField()
    is_taken = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'meal_entries'
        unique_together = ('member', 'meal_type', 'meal_date')
    
    def __str__(self):
        return f"{self.member} - {self.meal_type} ({self.meal_date})"


class GuestMeal(models.Model):
    """Guest Meal Model"""
    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    guest_name = models.CharField(max_length=100)
    meal_date = models.DateField()
    meal_count = models.IntegerField(default=1)
    meal_rate = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'guest_meals'
    
    def __str__(self):
        return f"{self.guest_name} - {self.meal_date}"
