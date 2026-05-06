from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MemberStatsViewSet, DashboardMetricViewSet

router = DefaultRouter()
router.register(r'member-stats', MemberStatsViewSet, basename='member-stats')
router.register(r'dashboard-metrics', DashboardMetricViewSet, basename='dashboard-metrics')

urlpatterns = [
    path('', include(router.urls)),
]
