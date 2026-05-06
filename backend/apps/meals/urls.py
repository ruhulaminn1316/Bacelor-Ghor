from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MealEntryViewSet, GuestMealViewSet

router = DefaultRouter()
router.register(r'entries', MealEntryViewSet, basename='meal-entries')
router.register(r'guests', GuestMealViewSet, basename='guest-meals')

urlpatterns = [
    path('', include(router.urls)),
]
