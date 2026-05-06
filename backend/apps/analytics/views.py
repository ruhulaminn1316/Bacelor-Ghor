from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import MemberStats, DashboardMetric
from .serializers import MemberStatsSerializer, DashboardMetricSerializer

class MemberStatsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = MemberStats.objects.all()
    serializer_class = MemberStatsSerializer
    permission_classes = [IsAuthenticated]

class DashboardMetricViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = DashboardMetric.objects.all()
    serializer_class = DashboardMetricSerializer
    permission_classes = [IsAuthenticated]
    filterset_fields = ['metric_date']
    ordering_fields = ['metric_date']
    
    @action(detail=False, methods=['get'])
    def latest(self, request):
        latest = DashboardMetric.objects.latest('metric_date')
        serializer = self.get_serializer(latest)
        return Response(serializer.data)
