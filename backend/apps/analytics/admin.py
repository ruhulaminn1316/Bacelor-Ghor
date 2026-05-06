from django.contrib import admin
from .models import MemberStats, DashboardMetric

@admin.register(MemberStats)
class MemberStatsAdmin(admin.ModelAdmin):
    list_display = ('member', 'total_meals', 'total_expense', 'current_balance', 'xp_points')
    search_fields = ('member__user__email',)
    readonly_fields = ('last_updated',)

@admin.register(DashboardMetric)
class DashboardMetricAdmin(admin.ModelAdmin):
    list_display = ('metric_date', 'total_meals', 'meal_rate', 'total_expense', 'total_rent')
    list_filter = ('metric_date',)
