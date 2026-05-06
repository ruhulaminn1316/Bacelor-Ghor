from rest_framework import serializers

class AdminStatsSerializer(serializers.Serializer):
    total_members = serializers.IntegerField()
    total_expenses = serializers.DecimalField(max_digits=12, decimal_places=2)
    total_rent = serializers.DecimalField(max_digits=12, decimal_places=2)
