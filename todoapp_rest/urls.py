from django.urls import include, path
from django.contrib import admin


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('api.urls')),
    #path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]

