from django.urls import path
from . import views

# relevant urls
urlpatterns = [
    path('', views.home, name='home'),
    path('allbeers', views.allBeers, name='allBeers'),
    path('details/<int:id>', views.details, name='details'),
    path('home', views.home, name='home'),
    path('review/<int:beer_id>', views.review, name='review'),
    path('postreview', views.postreview, name='postreview')
]