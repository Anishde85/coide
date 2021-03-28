from django.conf.urls import url
from django.urls import path, include
from django.contrib import admin
from rest_framework import routers
from codeeditor.views import TodoListApiView
urlpatterns = [
    url(r'^admin/', admin.site.urls),
    path('', TodoListApiView),
]