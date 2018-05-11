# plex-requests-api

An api to store requested movies from the [Plex Requests Client](http://requests.tomd.io) website. ([view code](https://github.com/tomdaniels/plex-requests-client))


This gives the users of my Plex server the ability to request their own media.


### Movies

`v1/movie/:id`

The movie path expects an id, this id is to match [the MovieDB](https://www.themoviedb.org/) ID.

- GET requests: The api will return a list of movieDB ID's.
- POST requests: The api will add the provided ID to it's list.

### TV

`v1/tv/:id`

The tv path expects the same [Movie DB](https://www.themoviedb.org/) ID as specified above.

- GET requests: The api will return a list of movieDB ID's.
- POST requests: The api will add the provided ID to it's list.

### TV Seasons

`v1/tv/:id/series/:seriesId`

The same behaviour is applied, though for a specific season of a TV show.
