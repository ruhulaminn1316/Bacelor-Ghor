from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.db.models import Sum
from datetime import datetime
from .models import ExpenseCategory, BazarEntry, ExpenseItem
from .serializers import ExpenseCategorySerializer, BazarEntrySerializer, ExpenseItemSerializer

class ExpenseCategoryViewSet(viewsets.ModelViewSet):
    queryset = ExpenseCategory.objects.all()
    serializer_class = ExpenseCategorySerializer
    permission_classes = [IsAuthenticated]

class BazarEntryViewSet(viewsets.ModelViewSet):
    queryset = BazarEntry.objects.all()
    serializer_class = BazarEntrySerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['expense_date', 'category']
    
    @action(detail=False, methods=['get'])
    def monthly_summary(self, request):
        month = request.query_params.get('month', datetime.now().strftime('%Y-%m'))
        expenses = BazarEntry.objects.filter(expense_date__startswith=month)
        
        total = expenses.aggregate(Sum('total_amount'))['total_amount__sum'] or 0
        by_category = expenses.values('category__name').annotate(
            amount=Sum('total_amount')
        )
        
        return Response({
            'month': month,
            'total': total,
            'by_category': by_category
        })

class ExpenseItemViewSet(viewsets.ModelViewSet):
    queryset = ExpenseItem.objects.all()
    serializer_class = ExpenseItemSerializer
    permission_classes = [IsAuthenticated]
