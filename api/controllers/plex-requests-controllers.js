exports.listMovieId = function(req, res) {
  res.send('getMovieId');
}

exports.addMovieId = function(req, res) {
  const message = `the movie that has been requested: ${req.params.id}`;
  res.send(message);
  console.log(message);
}

exports.listTvId = function(req, res) {
  res.send('getTvId');
}

exports.addTvId = function(req, res) {
  const message = `the show that has been requested: ${req.params.id}`;
  res.send(message);
  console.log(message);
}

exports.listTvSeasonId = function(req, res) {
  res.send('getTvSeasonId');
}

exports.addTvSeasonId = function(req, res) {
  const message = `the show ID that has been requested: ${req.params.id} (SeasonID): ${req.params.seasonId}`;
  res.send(message);
  console.log(message);
}
