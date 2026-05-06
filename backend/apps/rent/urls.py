from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import RentEntryViewSet, RentPaymentViewSet

router = DefaultRouter()
router.register(r'entries', RentEntryViewSet, basename='rent-entries')
router.register(r'payments', RentPaymentViewSet, basename='rent-payments')

urlpatterns = [
    path('', include(router.urls)),
]
