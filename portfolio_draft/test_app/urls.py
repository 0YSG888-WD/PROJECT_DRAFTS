from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('new', views.new),
    path('create', views.create),
    path('<int:val>', views.displayInt),
    path('<int:val>/edit', views.edit),
    path('<int:val>/destroy', views.destroy),
    path('template_test', views.template_test),
    path('current_time', views.time),
    path('form_test', views.form_test),
    path('form_process', views.form_process),
    path('form_display', views.form_display),
    path('greensock', views.greensocktest),
    path('animations', views.animations)
]   
