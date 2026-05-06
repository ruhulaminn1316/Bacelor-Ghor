from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import UtilityType, UtilityEntry
from .serializers import UtilityTypeSerializer, UtilityEntrySerializer

class UtilityTypeViewSet(viewsets.ModelViewSet):
    queryset = UtilityType.objects.all()
    serializer_class = UtilityTypeSerializer
    permission_classes = [IsAuthenticated]

class UtilityEntryViewSet(viewsets.ModelViewSet):
    queryset = UtilityEntry.objects.all()
    serializer_class = UtilityEntrySerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['is_paid', 'utility_type']
    ordering_fields = ['month', 'due_date']
