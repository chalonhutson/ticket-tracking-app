from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TicketViewSet, TicketCommentViewSet, TicketTaskViewSet

router = DefaultRouter()
router.register(r'tickets', TicketViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('comments/', TicketCommentViewSet.as_view({'get': 'list'})),
    path('tasks/', TicketTaskViewSet.as_view({'get': 'list'})),
]

