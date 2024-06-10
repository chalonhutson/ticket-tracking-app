from rest_framework import serializers
from .models import Ticket, TicketComment, TicketTask

class TicketCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = TicketComment
        fields = '__all__'

class TicketTaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = TicketTask
        fields = '__all__'

class TicketSerializer(serializers.ModelSerializer):

    comments = TicketCommentSerializer(many=True, read_only=True)
    tasks = TicketTaskSerializer(many=True, read_only=True)
    
    class Meta:
        model = Ticket
        fields = '__all__'
