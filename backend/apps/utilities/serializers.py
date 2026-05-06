from rest_framework import serializers
from .models import UtilityType, UtilityEntry

class UtilityTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = UtilityType
        fields = ('id', 'name', 'description')

class UtilityEntrySerializer(serializers.ModelSerializer):
    utility_type_name = serializers.CharField(source='utility_type.name', read_only=True)
    
    class Meta:
        model = UtilityEntry
        fields = ('id', 'utility_type', 'utility_type_name', 'month', 'total_amount', 'total_members', 'per_person_amount', 'bill_date', 'due_date', 'is_paid', 'created_at')
        read_only_fields = ('id', 'per_person_amount', 'created_at')
