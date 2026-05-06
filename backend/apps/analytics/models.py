from django.db import models
from apps.members.models import Member

class MemberStats(models.Model):
    """Member Statistics Model"""
    member = models.OneToOneField(Member, on_delete=models.CASCADE)
    total_meals = models.IntegerField(default=0)
    total_expense = models.DecimalField(max_digits=12, decimal_places=2, default=0)
    total_paid = models.DecimalField(max_digits=12, decimal_places=2, default=0)
    current_balance = models.DecimalField(max_digits=12, decimal_places=2, default=0)
    total_contributions = models.IntegerField(default=0)
    xp_points = models.IntegerField(default=0)
    last_updated = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'member_stats'
    
    def __str__(self):
        return f"Stats - {self.member}"


class DashboardMetric(models.Model):
    """Dashboard Metrics Model"""
    metric_date = models.DateField()
    total_meals = models.IntegerField()
    meal_rate = models.DecimalField(max_digits=10, decimal_places=2)
    total_expense = models.DecimalField(max_digits=12, decimal_places=2)
    total_rent = models.DecimalField(max_digits=12, decimal_places=2)
    total_utility = models.DecimalField(max_digits=12, decimal_places=2)
    total_active_members = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'dashboard_metrics'
    
    def __str__(self):
        return f"Metrics - {self.metric_date}"
