from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ChoreTypeViewSet, ChoreAssignmentViewSet

router = DefaultRouter()
router.register(r'types', ChoreTypeViewSet, basename='chore-types')
router.register(r'assignments', ChoreAssignmentViewSet, basename='chore-assignments')

urlpatterns = [
    path('', include(router.urls)),
]
