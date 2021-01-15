from django.urls import path
from .views import TaskView, TaskEditView

app_name = 'todo'

urlpatterns = [
    path('tasks/', TaskView.as_view(), name='all_tasks'),
    path('tasks/<int:pk>/', TaskEditView.as_view(), name='edit_task'),
]

