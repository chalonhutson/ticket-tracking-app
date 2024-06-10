from django.contrib import admin
from .models import Ticket, TicketComment, TicketTask

# Register your models here.
admin.site.register(Ticket)
admin.site.register(TicketComment)
admin.site.register(TicketTask)
