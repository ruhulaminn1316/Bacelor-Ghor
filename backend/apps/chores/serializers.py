from rest_framework import serializers
from .models import ChoreType, ChoreAssignment

class ChoreTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChoreType
        fields = ('id', 'name', 'description')

class ChoreAssignmentSerializer(serializers.ModelSerializer):
    member_name = serializers.CharField(source='member.user.get_full_name', read_only=True)
    chore_type_name = serializers.CharField(source='chore_type.name', read_only=True)
    
    class Meta:
        model = ChoreAssignment
        fields = ('id', 'member', 'member_name', 'chore_type', 'chore_type_name', 'assigned_date', 'due_date', 'is_completed', 'completed_date', 'notes', 'created_at')
        read_only_fields = ('id', 'created_at')
