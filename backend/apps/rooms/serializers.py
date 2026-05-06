from rest_framework import serializers
from .models import Room, RoomAssignment

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id', 'room_number', 'capacity', 'description', 'is_active')

class RoomAssignmentSerializer(serializers.ModelSerializer):
    room_number = serializers.CharField(source='room.room_number', read_only=True)
    member_name = serializers.CharField(source='member.user.get_full_name', read_only=True)
    
    class Meta:
        model = RoomAssignment
        fields = ('id', 'member', 'member_name', 'room', 'room_number', 'seat_number', 'assigned_date', 'is_current')
        read_only_fields = ('id', 'assigned_date')
