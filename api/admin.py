from django.contrib import admin
from .models import Task


class TaskAdmin(admin.ModelAdmin):
    list_display = ['text', 'complete']


admin.site.register(Task, TaskAdmin)
