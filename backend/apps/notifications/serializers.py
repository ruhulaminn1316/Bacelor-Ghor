from rest_framework import serializers
from .models import Notification

class NotificationSerializer(serializers.ModelSerializer):
    member_name = serializers.CharField(source='member.user.get_full_name', read_only=True)
    
    class Meta:
        model = Notification
        fields = ('id', 'member', 'member_name', 'notification_type', 'title', 'message', 'is_read', 'created_at', 'updated_at')
        read_only_fields = ('id', 'created_at', 'updated_at')
