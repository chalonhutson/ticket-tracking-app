from django.urls import path, include
from rest_framework.routers import SimpleRouter
from .views import TicketViewSet, TicketCommentViewSet

router = SimpleRouter()
router.register(r'tickets', TicketViewSet)
# router.register(r'tickets/comments', TicketCommentViewSet, basename='tickets')

urlpatterns = [
    path('', include(router.urls)),
]

