"""
URL Configuration for Bachelor Ghor Backend
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # API URLs
    path('api/auth/', include('apps.authentication.urls')),
    path('api/members/', include('apps.members.urls')),
    path('api/rooms/', include('apps.rooms.urls')),
    path('api/meals/', include('apps.meals.urls')),
    path('api/expenses/', include('apps.expenses.urls')),
    path('api/rent/', include('apps.rent.urls')),
    path('api/utilities/', include('apps.utilities.urls')),
    path('api/payments/', include('apps.payments.urls')),
    path('api/notifications/', include('apps.notifications.urls')),
    path('api/chores/', include('apps.chores.urls')),
    path('api/analytics/', include('apps.analytics.urls')),
    path('api/admin/', include('apps.admin.urls')),
]

# Serve media files during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
