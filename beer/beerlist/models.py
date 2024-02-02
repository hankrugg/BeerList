from django.db import models

# beer model that contains the name and the brewery
class Beer(models.Model):
  name = models.CharField(max_length=255)
  brewery = models.CharField(max_length=255, null=True)

# review model that connects to each beer
class Review(models.Model):
  review = models.TextField(null=False)
  beer = models.ForeignKey(Beer, on_delete=models.CASCADE)
