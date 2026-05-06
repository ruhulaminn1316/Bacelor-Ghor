from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import RentEntry, RentPayment
from .serializers import RentEntrySerializer, RentPaymentSerializer

class RentEntryViewSet(viewsets.ModelViewSet):
    queryset = RentEntry.objects.all()
    serializer_class = RentEntrySerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['is_paid']
    ordering_fields = ['month', 'due_date']

class RentPaymentViewSet(viewsets.ModelViewSet):
    queryset = RentPayment.objects.all()
    serializer_class = RentPaymentSerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['is_verified', 'payment_date']
