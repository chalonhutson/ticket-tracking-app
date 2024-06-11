from rest_framework import viewsets
from .models import Ticket
from .serializers import TicketSerializer, TicketCommentSerializer, TicketTaskSerializer

class TicketViewSet(viewsets.ModelViewSet):
    queryset = Ticket.objects.all()
    serializer_class = TicketSerializer

class TicketCommentViewSet(viewsets.ModelViewSet):
    queryset = Ticket.objects.all()
    serializer_class = TicketCommentSerializer

class TicketTaskViewSet(viewsets.ModelViewSet):
    queryset = Ticket.objects.all()
    serializer_class = TicketTaskSerializer