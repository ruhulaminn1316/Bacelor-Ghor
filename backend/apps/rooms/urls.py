from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import RoomViewSet, RoomAssignmentViewSet

router = DefaultRouter()
router.register(r'rooms', RoomViewSet, basename='rooms')
router.register(r'assignments', RoomAssignmentViewSet, basename='room-assignments')

urlpatterns = [
    path('', include(router.urls)),
]
