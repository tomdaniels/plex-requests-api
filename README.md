# plex-requests-api

A restful Nodejs api to store requested movies from the [Plex Requests Client](http://requests.tomd.io) website. ([view code](https://github.com/tomdaniels/plex-requests-client))

base-URL: http://requests-api.tomd.io

## GET method

| MEDIA TYPE |     PATH    |                           RESULT                          |
|:----------:|:-----------:|:---------------------------------------------------------:|
|   Movies   | `v1/movies` |          returns array of object, with movie ID's         |
|     TV     |    `v1/tv`   |         returns array of object, with TV show ID's        |
|   Seasons  | `v1/seasons` | returns array of object, with ID's for individual seasons |
|    All     |  `v1/media` |          returns all available data in DB                  |

## POST method

| MEDIA TYPE |     PATH    |                           RESULT                          |
|:----------:|:-----------:|:---------------------------------------------------------:|
|   Movies   | `v1/movies/:id` |          pushes the supplied ID's into Movie DB        |
|     TV     |    `v1/tv/:id`   |         pushes the supplied ID's into TV DB        |
|   Seasons  | `v1/tv/:id/season/:seasonId` | pushes the individual Season ID's into TV DB |

