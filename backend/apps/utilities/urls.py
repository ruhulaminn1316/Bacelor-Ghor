from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UtilityTypeViewSet, UtilityEntryViewSet

router = DefaultRouter()
router.register(r'types', UtilityTypeViewSet, basename='utility-types')
router.register(r'entries', UtilityEntryViewSet, basename='utility-entries')

urlpatterns = [
    path('', include(router.urls)),
]
