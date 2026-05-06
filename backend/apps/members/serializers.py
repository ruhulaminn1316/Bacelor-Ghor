from rest_framework import serializers
from .models import Member

class MemberSerializer(serializers.ModelSerializer):
    user_email = serializers.EmailField(source='user.email', read_only=True)
    user_name = serializers.CharField(source='user.get_full_name', read_only=True)
    
    class Meta:
        model = Member
        fields = ('id', 'user', 'user_email', 'user_name', 'member_id', 'phone', 'emergency_contact', 'emergency_contact_phone', 'join_date', 'is_active')
        read_only_fields = ('id', 'member_id', 'join_date')
