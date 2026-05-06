from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Member
from .serializers import MemberSerializer

class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer
    permission_classes = [IsAuthenticated]
    search_fields = ['member_id', 'user__email', 'user__first_name']
    ordering_fields = ['join_date', 'member_id']
