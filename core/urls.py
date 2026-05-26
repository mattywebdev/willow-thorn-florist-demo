from django.urls import path
from .views import home, bouquets

urlpatterns = [
    path('', home, name='home'),
    path('bouquets/', bouquets, name='bouquets'),
]