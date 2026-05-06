from django.db import models
from apps.members.models import Member

class ChoreType(models.Model):
    """Chore Type Model"""
    CHORE_TYPES = [
        ('cleaning', 'Cleaning'),
        ('cooking', 'Cooking'),
        ('dish_washing', 'Dish Washing'),
        ('bazar', 'Bazar'),
    ]
    
    name = models.CharField(max_length=50, choices=CHORE_TYPES, unique=True)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'chore_types'
    
    def __str__(self):
        return self.name


class ChoreAssignment(models.Model):
    """Chore Assignment Model"""
    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    chore_type = models.ForeignKey(ChoreType, on_delete=models.CASCADE)
    assigned_date = models.DateField()
    due_date = models.DateField()
    is_completed = models.BooleanField(default=False)
    completed_date = models.DateField(blank=True, null=True)
    notes = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'chore_assignments'
    
    def __str__(self):
        return f"{self.member} - {self.chore_type}"
