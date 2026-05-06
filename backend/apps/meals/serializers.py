from rest_framework import serializers
from .models import MealEntry, GuestMeal

class MealEntrySerializer(serializers.ModelSerializer):
    member_name = serializers.CharField(source='member.user.get_full_name', read_only=True)
    
    class Meta:
        model = MealEntry
        fields = ('id', 'member', 'member_name', 'meal_type', 'meal_date', 'is_taken', 'created_at')
        read_only_fields = ('id', 'created_at')

class GuestMealSerializer(serializers.ModelSerializer):
    member_name = serializers.CharField(source='member.user.get_full_name', read_only=True)
    
    class Meta:
        model = GuestMeal
        fields = ('id', 'member', 'member_name', 'guest_name', 'meal_date', 'meal_count', 'meal_rate', 'created_at')
        read_only_fields = ('id', 'created_at')
