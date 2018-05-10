# plex-requests-api

An api to store requested movies from [Plex Requests](http://requests.tomd.io).
This gives the users of my Plex server the ability to requests their own media.


### Movies

`v1/movie/123`

The movie path accepts an id, this id is to match [the MovieDB](https://www.themoviedb.org/) ID.

- GET requests: The api will return a list of movieDB ID's.
- POST requests: The api will add the provided ID to it's list. 
