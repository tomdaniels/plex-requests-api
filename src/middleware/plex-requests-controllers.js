const database = require('../firebase/firebase');

function getMedia(apiData, response) {
  const media = [];
  const data = apiData;
  media.push(data);
  response.send(media);
};

exports.getAll = function(req, res) {
  database.ref('/').once('value').then((snapshot) => {
    getMedia(snapshot.val(), res);
  }).catch((error) => console.log(error));
};

exports.listMovies = function(req, res, next) {
  database.ref('movies').once('value').then((snapshot) => {
    getMedia(snapshot.val(), res);
  }).catch((error) => console.log(error));
};

exports.addMovieId = function(req, res) {
  const message = `the movie that has been requested: ${req.params.id}`;
  database.ref('movies').push(req.params.id);
  res.send(message);
  console.log(message);
};

exports.listTvShows = function(req, res) {
  database.ref('tv').once('value').then((snapshot) => {
    getMedia(snapshot.val(), res);
  }).catch((error) => console.log(error));
};

exports.addTvId = function(req, res) {
  const message = `the show that has been requested: ${req.params.id}`;
  database.ref('tv').push(req.params.id);
  res.send(message);
  console.log(message);
};

exports.listTvSeasons = function(req, res) {
  database.ref('tv/seasons').once('value').then((snapshot) => {
    getMedia(snapshot.val(), res);
  }).catch((error) => console.log(error));
};

exports.addTvSeasonId = function(req, res) {
  const message = `the show ID that has been requested: ${req.params.id} (SeasonID): ${req.params.seasonId}`;
  database.ref('tv/seasons').push({
    show: req.params.id,
    season: req.params.seasonId,
  });
  res.send(message);
  console.log(message);
};
