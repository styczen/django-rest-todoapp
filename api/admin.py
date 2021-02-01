from django.contrib import admin
from .models import Task


class TaskAdmin(admin.ModelAdmin):
    list_display = ['text', 'due_date', 'complete', 'created_date_time']


admin.site.register(Task, TaskAdmin)
