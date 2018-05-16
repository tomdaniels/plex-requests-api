# plex-requests-api

A restful Nodejs api to store requested movies from the [Plex Requests Client](http://requests.tomd.io) website. ([view code](https://github.com/tomdaniels/plex-requests-client))


###How to use it? 

| MEDIA   | GET         | RESULT                                                    | POST                  | RESULT                                       |
|---------|-------------|-----------------------------------------------------------|-----------------------|----------------------------------------------|
| Movies  | `v1/movies` | returns array of object, with movie ID's                  | `v1/movies/:id`       | Stores that Movie ID into Database           |
| TV      | `v1/tv `     | returns array of object, with TV show ID's                | `v1/tv/:id`           | Stores that TV Show ID into Database         |
| Seasons | `v1/season` | returns array of object, with ID's for individual seasons | `v1/tv/:id/:seasonId` | Stores that specific season ID into Database |


### Get all

A get requests with `v1/media` will return the entire available dataset.