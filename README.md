# BeerList

BeerList is a webapp where users are able to view beers, view the beers reviews, and review the beers themselves. 

## Dependencies

### React

React.js is used for the frontend. You must have npm installed to run this app. 

### Django

Django is used for the backend. You must have django installed to run this app.

## Database

This app uses a sqlite database to store the beer and the reviews. The database should come empty, so to leave reviews on beers you will have to manually add beers to the database. To do this,
navigate to the /beer directory where there should be a manage.py file. 
```
BeerList/beer
```

Next you will have to open the shell:

```
python manage.py shell
```
This will open the shell. Next we need to import our model and load the beers.
```
from beerlist.models import Beer
beer1 = Beer(name = "Miners Gold" brewery = "Lewis and Clark")
beer1.save()

beer2 = Beer(name = "Single Malt IPA", brewery = "Blackfoot River")
beer2.save()
```

Continue this process for all the beer you want to review.

## Running the app

To start the app, you will need two terminal windows open. Navigate one to the myapp directory.
```
BeerList/myapp
```

This is the frontend where you will need to start the React app with the command :

```
npm start
```

In the other window, navigate to the beer directory where the manage.py file is located.

```
BeerList/beer
```

Run the backend Django app with the command :

```
python manage.py runserver
```

Finally, on your browser go to 
```
http://localhost:3000/
```

This is where you will be able to view all the beer, view reviews, and leave reviews.


## Acknowledgments
Much of the frontend react code comes from a previous project that was completed with Ryan Johnson and can be found here:
```
https://github.com/rjohnson05/RanksList
```

Django resources :
```
https://www.w3schools.com/django/index.php
```

React resources :
```
https://medium.com/@devsumitg/how-to-connect-reactjs-django-framework-c5ba268cb8be
```
