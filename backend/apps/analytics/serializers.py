from rest_framework import serializers
from .models import MemberStats, DashboardMetric

class MemberStatsSerializer(serializers.ModelSerializer):
    member_name = serializers.CharField(source='member.user.get_full_name', read_only=True)
    
    class Meta:
        model = MemberStats
        fields = ('id', 'member', 'member_name', 'total_meals', 'total_expense', 'total_paid', 'current_balance', 'total_contributions', 'xp_points', 'last_updated')

class DashboardMetricSerializer(serializers.ModelSerializer):
    class Meta:
        model = DashboardMetric
        fields = ('id', 'metric_date', 'total_meals', 'meal_rate', 'total_expense', 'total_rent', 'total_utility', 'total_active_members', 'created_at')
