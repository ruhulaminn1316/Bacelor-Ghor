from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.db.models import Sum, Count
from datetime import datetime
from .models import MealEntry, GuestMeal
from .serializers import MealEntrySerializer, GuestMealSerializer

class MealEntryViewSet(viewsets.ModelViewSet):
    queryset = MealEntry.objects.all()
    serializer_class = MealEntrySerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['meal_date', 'meal_type', 'is_taken']
    
    @action(detail=False, methods=['get'])
    def monthly_report(self, request):
        month = request.query_params.get('month', datetime.now().strftime('%Y-%m'))
        meals = MealEntry.objects.filter(meal_date__startswith=month)
        
        # Total meals for the month
        total_meals = meals.filter(is_taken=True).count()
        
        # Get member-wise count
        member_meals = meals.filter(is_taken=True).values('member__user__email').annotate(
            count=Count('id')
        )
        
        return Response({
            'month': month,
            'total_meals': total_meals,
            'member_meals': member_meals
        })

class GuestMealViewSet(viewsets.ModelViewSet):
    queryset = GuestMeal.objects.all()
    serializer_class = GuestMealSerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['meal_date']
