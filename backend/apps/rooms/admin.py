from django.contrib import admin
from .models import Room, RoomAssignment

@admin.register(Room)
class RoomAdmin(admin.ModelAdmin):
    list_display = ('room_number', 'capacity', 'is_active')
    list_filter = ('is_active',)
    search_fields = ('room_number',)

@admin.register(RoomAssignment)
class RoomAssignmentAdmin(admin.ModelAdmin):
    list_display = ('member', 'room', 'seat_number', 'assigned_date', 'is_current')
    list_filter = ('is_current', 'assigned_date')
    search_fields = ('member__user__email', 'room__room_number')
