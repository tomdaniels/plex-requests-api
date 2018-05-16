# plex-requests-api

A restful Nodejs api to store requested movies from the [Plex Requests Client](http://requests.tomd.io) website. ([view code](https://github.com/tomdaniels/plex-requests-client))

base-URL: http://requests-api.tomd.io

## GET method

| MEDIA TYPE |     PATH    |                           RESULT                          |
|----------|-----------|---------------------------------------------------------|
|    All     |  `v1/media` |          returns all available data in DB                  |
|   Movies   | `v1/movies` |          returns an array of objects, containing stored movie ID's         |
|     TV     |    `v1/tv`   |         returns an array of objects, containing stored TV show ID's        |
|   Seasons  | `v1/seasons` | returns an array of objects, with ID's for individual seasons and the TV show they belong to. |

## POST method

| MEDIA TYPE |     PATH    |                           RESULT                          |
|:----------:|:-----------:|:---------------------------------------------------------:|
|   Movies   | `v1/movies/:id` |          pushes the requested movies ID into Movie DB        |
|     TV     |    `v1/tv/:id`   |         pushes the requested TV show ID into the TV DB        |
|   Seasons  | `v1/tv/:id/season/:seasonId` | pushes the individual season ID that was requested, with the show it belongs to into the TV DB |
