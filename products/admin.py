from django.contrib import admin
from .models import *


# class SubsciberAdmin(admin.ModelAdmin):
#     list_display = [field.name for field in Subscriber._meta.fields]
#     list_filter = ['name']
#     search_fields = ['name', 'email']
#     # fields = ['email']
#     # exclude = ''
#     # inlines = ''
#
#
# admin.site.register(Subscriber, SubsciberAdmin)
