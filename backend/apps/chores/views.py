from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import ChoreType, ChoreAssignment
from .serializers import ChoreTypeSerializer, ChoreAssignmentSerializer

class ChoreTypeViewSet(viewsets.ModelViewSet):
    queryset = ChoreType.objects.all()
    serializer_class = ChoreTypeSerializer
    permission_classes = [IsAuthenticated]

class ChoreAssignmentViewSet(viewsets.ModelViewSet):
    queryset = ChoreAssignment.objects.all()
    serializer_class = ChoreAssignmentSerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['is_completed', 'chore_type']
    ordering_fields = ['due_date', 'assigned_date']
