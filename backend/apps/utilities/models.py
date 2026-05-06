from django.db import models

class UtilityType(models.Model):
    """Utility Type Model"""
    UTILITY_TYPES = [
        ('electricity', 'Electricity'),
        ('gas', 'Gas'),
        ('water', 'Water'),
        ('internet', 'Internet'),
        ('cleaning', 'Cleaning'),
        ('maintenance', 'Maintenance'),
    ]
    
    name = models.CharField(max_length=50, choices=UTILITY_TYPES, unique=True)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'utility_types'
    
    def __str__(self):
        return self.name


class UtilityEntry(models.Model):
    """Monthly Utility Entry Model"""
    utility_type = models.ForeignKey(UtilityType, on_delete=models.CASCADE)
    month = models.CharField(max_length=7)  # Format: YYYY-MM
    total_amount = models.DecimalField(max_digits=12, decimal_places=2)
    total_members = models.IntegerField()
    per_person_amount = models.DecimalField(max_digits=12, decimal_places=2)
    bill_date = models.DateField()
    due_date = models.DateField()
    is_paid = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'utility_entries'
        unique_together = ('utility_type', 'month')
    
    def __str__(self):
        return f"{self.utility_type} - {self.month}"
