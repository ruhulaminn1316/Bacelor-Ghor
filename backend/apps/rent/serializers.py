from rest_framework import serializers
from .models import RentEntry, RentPayment

class RentEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = RentEntry
        fields = ('id', 'month', 'total_rent', 'total_members', 'per_person_rent', 'is_paid', 'due_date', 'created_at')
        read_only_fields = ('id', 'per_person_rent', 'created_at')

class RentPaymentSerializer(serializers.ModelSerializer):
    member_name = serializers.CharField(source='member.user.get_full_name', read_only=True)
    
    class Meta:
        model = RentPayment
        fields = ('id', 'member', 'member_name', 'rent_entry', 'amount_paid', 'payment_date', 'payment_method', 'is_verified', 'created_at')
        read_only_fields = ('id', 'created_at')
