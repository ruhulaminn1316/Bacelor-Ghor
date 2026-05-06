from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Room, RoomAssignment
from .serializers import RoomSerializer, RoomAssignmentSerializer

class RoomViewSet(viewsets.ModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    permission_classes = [IsAuthenticated]
    search_fields = ['room_number']

class RoomAssignmentViewSet(viewsets.ModelViewSet):
    queryset = RoomAssignment.objects.all()
    serializer_class = RoomAssignmentSerializer
    permission_classes = [IsAuthenticated]
    search_fields = ['member__user__email', 'room__room_number']
    filterset_fields = ['is_current']
