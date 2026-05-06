from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ExpenseCategoryViewSet, BazarEntryViewSet, ExpenseItemViewSet

router = DefaultRouter()
router.register(r'categories', ExpenseCategoryViewSet, basename='expense-categories')
router.register(r'entries', BazarEntryViewSet, basename='bazar-entries')
router.register(r'items', ExpenseItemViewSet, basename='expense-items')

urlpatterns = [
    path('', include(router.urls)),
]
