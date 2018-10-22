# plex-requests-api [![Build Status](https://travis-ci.com/tomdaniels/plex-requests-api.svg?branch=master)](https://travis-ci.com/tomdaniels/plex-requests-api)

An api to store requested movies from the [Plex Requests Client](http://requests.tomd.io) website. ([view code](https://github.com/tomdaniels/plex-requests-client))

More documentation available on [swagger](http://requests-api.tomd.io/swagger)

base-URL: http://requests-api.tomd.io

[Swagger](ttp://requests-api.tomd.io/swagger)


## Verbs

### GET

| MEDIA    |ENDPOINT    |                           RESULT                          |
|----------|-----------|---------------------------------------------------------|
|    All     |  `v1/media` |          returns a nested object structure of all available data in DB                  |
|   Movies   | `v1/movies` |          returns an array movie ID's         |
|     TV     |    `v1/tv`   |         returns an array of TV show ID's        |
|   Seasons  | `v1/seasons` | returns an array of objects, with ID's for individual seasons and the TV show they belong to. |

### POST

| MEDIA    |ENDPOINT       |RESULT                                                     |
|----------|-----------|---------------------------------------------------------|
|   Movies   | `v1/movie/:id` |          pushes the requested movies ID into Movie DB        |
|     TV     |    `v1/tv/:id`   |         pushes the requested TV show ID into the TV DB        |
|   Seasons  | `v1/tv/:id/season/:seasonId` | pushes the individual season ID that was requested, with the show it belongs to into the TV DB |

### DELETE

| MEDIA    |ENDPOINT    |                           RESULT                          |
|----------|-----------|---------------------------------------------------------|
|    All     |  `v1/media` |          clears all available data in DB                  |
|   Movies   | `v1/movies` |          clears all children of the movie DB         |
|     TV     |    `v1/tv`   |         clears all children of the TV show DB        |
|   Seasons  | `v1/seasons` | clears all children of the Seasons DB |
