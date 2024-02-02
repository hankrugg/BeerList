import json

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Beer, Review

# show the home page
@api_view(['GET'])
def home(request):
    return Response()

# get the list of all beers
@api_view(['GET'])
def allBeers(request):
    allbeers = Beer.objects.all().values()
    return Response(allbeers)

# get only one specific beer
@api_view(['GET'])
def details(request, id):
    beer = Beer.objects.all().values().filter(id=id)
    return Response(beer)

# get the reviews for the beer
@api_view(['GET'])
def review(request, beer_id):
    beer = Review.objects.all().values().filter(beer_id=beer_id)
    return Response(beer)

# post the reviews for the beer
@api_view(['POST'])
def postreview(request):
    a = request.data
    r = Review(review=a['review'], beer_id=a['beerId'])
    r.save()
    return Response()
