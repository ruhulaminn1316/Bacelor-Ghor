from rest_framework import serializers
from .models import Payment

class PaymentSerializer(serializers.ModelSerializer):
    member_name = serializers.CharField(source='member.user.get_full_name', read_only=True)
    
    class Meta:
        model = Payment
        fields = ('id', 'member', 'member_name', 'amount', 'payment_method', 'transaction_id', 'status', 'screenshot', 'payment_date', 'verified_at', 'created_at')
        read_only_fields = ('id', 'payment_date', 'created_at', 'verified_at')
