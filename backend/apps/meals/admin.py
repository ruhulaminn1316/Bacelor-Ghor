from django.contrib import admin
from .models import MealEntry, GuestMeal

@admin.register(MealEntry)
class MealEntryAdmin(admin.ModelAdmin):
    list_display = ('member', 'meal_type', 'meal_date', 'is_taken')
    list_filter = ('meal_type', 'meal_date', 'is_taken')
    search_fields = ('member__user__email',)

@admin.register(GuestMeal)
class GuestMealAdmin(admin.ModelAdmin):
    list_display = ('guest_name', 'member', 'meal_date', 'meal_count')
    list_filter = ('meal_date',)
    search_fields = ('guest_name', 'member__user__email')
