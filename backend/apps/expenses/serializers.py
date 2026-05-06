from rest_framework import serializers
from .models import ExpenseCategory, BazarEntry, ExpenseItem

class ExpenseItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExpenseItem
        fields = ('id', 'item_name', 'item_quantity', 'item_price')

class BazarEntrySerializer(serializers.ModelSerializer):
    member_name = serializers.CharField(source='member.user.get_full_name', read_only=True)
    category_name = serializers.CharField(source='category.name', read_only=True)
    
    class Meta:
        model = BazarEntry
        fields = ('id', 'member', 'member_name', 'category', 'category_name', 'expense_date', 'total_amount', 'description', 'receipt_image', 'created_at')
        read_only_fields = ('id', 'created_at')

class ExpenseCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ExpenseCategory
        fields = ('id', 'name', 'description')
