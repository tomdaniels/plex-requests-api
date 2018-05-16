const database = require('../firebase/firebase');

exports.getAll = function(req, res) {
  res.send('list all movie ID\'s');
}

exports.listMovieId = function(req, res, next) {
  database.ref('movies').once('value').then((snapshot) => {
    const movies = [];
    const data = snapshot.val();
    movies.push(data);
    res.send(movies);
  }).catch((error) => console.log(error));
}

exports.addMovieId = function(req, res) {
  const message = `the movie that has been requested: ${req.params.id}`;
  database.ref('movies').push(req.params.id);
  res.send(message);
  console.log(message);
}

exports.listTvId = function(req, res) {
  database.ref('tv').once('value').then((snapshot) => {
    const shows = [];
    const data = snapshot.val();
    shows.push(data);
    res.send(shows);
  }).catch((error) => console.log(error));
}

exports.addTvId = function(req, res) {
  const message = `the show that has been requested: ${req.params.id}`;
  database.ref('tv').push(req.params.id);
  res.send(message);
  console.log(message);
}

exports.listTvSeasonId = function(req, res) {
  database.ref('tv/seasons').once('value').then((snapshot) => {
    const seasons = [];
    const data = snapshot.val();
    seasons.push(data);
    res.send(seasons);
  }).catch((error) => console.log(error));
}

exports.addTvSeasonId = function(req, res) {
  const message = `the show ID that has been requested: ${req.params.id} (SeasonID): ${req.params.seasonId}`;
  database.ref('tv/seasons').push({
    show: req.params.id,
    season: req.params.seasonId,
  });
  res.send(message);
  console.log(message);
}
