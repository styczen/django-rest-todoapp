from django.urls import include, path
from django.contrib import admin
# from rest_framework import routers
# from api import views

# router = routers.DefaultRouter()
# router.register('todos', views.TodoView, 'todo')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls'))
]
