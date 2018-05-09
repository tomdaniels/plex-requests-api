exports.getMovieId = function(req, res) {
  res.send('getMovieId');
}

exports.postMovieId = function(req, res) {
  const message = `the movie that has been requested: ${req.params.id}`;
  res.send(message);
  console.log(message);
}

exports.getTvId = function(req, res) {
  res.send('getTvId');
}

exports.postTvId = function(req, res) {
  const message = `the show that has been requested: ${req.params.id}`;
  res.send(message);
  console.log(message);
}

exports.getTvSeasonId = function(req, res) {
  res.send('getTvSeasonId');
}

exports.postTvSeasonId = function(req, res) {
  const message = `the show ID that has been requested: ${req.params.id} (SeasonID): ${req.params.seasonId}`;
  res.send(message);
  console.log(message);
}
