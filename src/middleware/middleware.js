const database = require('../firebase/firebase');

function getMedia(apiData, response) {
  const media = [];
  apiData.forEach((child) => {
    media.push(child.val());
  });
  response.send(media);
};

exports.getAll = function(req, res) {
  database.ref('/').once('value').then((snapshot) => {
    const media = [];
    const data = snapshot.val();
    media.push(data);
    res.send(data);
  }).catch((error) => console.log(error));
};

exports.listMovies = function(req, res) {
  database.ref('movies').once('value').then((snapshot) => {
    getMedia(snapshot, res);
  }).catch((error) => console.log(error));
};

exports.addMovieId = function(req, res) {
  const message = `the movie that has been requested: ${req.params.id}`;
  database.ref('movies').push(req.params.id);
  res.send(message);
};

exports.listTvShows = function(req, res) {
  database.ref('tv').once('value').then((snapshot) => {
    getMedia(snapshot, res);
  }).catch((error) => console.log(error));
};

exports.addTvId = function(req, res) {
  const message = `the show that has been requested: ${req.params.id}`;
  database.ref('tv').push(req.params.id);
  res.send(message);
};

exports.listTvSeasons = function(req, res) {
  database.ref('seasons').once('value').then((snapshot) => {
    getMedia(snapshot, res);
  }).catch((error) => console.log(error));
};

exports.addTvSeasonId = function(req, res) {
  const message = `the show ID that has been requested: ${req.params.id} (SeasonID): ${req.params.seasonId}`;
  database.ref('seasons').push({
    show: req.params.id,
    season: req.params.seasonId,
  });
  res.send(message);
};

exports.clearAllMedia = function(req, res) {
  database.ref('/').remove().then((response) => {
    res.send('All media on the database has been removed');
  }).catch((error) => {
    res.send({
      error,
    });
    console.log(error);
  });;
};

exports.clearMovies = function(req, res) {
  database.ref('movies').remove().then((response) => {
    res.send('Movies database has been cleared!');
  }).catch((error) => {
    res.send({
      error,
    });
    console.log(error);
  });;
};

exports.clearTv = function(req, res) {
  database.ref('tv').remove().then((response) => {
    res.send('the TV Shows database has been cleared!');
  }).catch((error) => {
    res.send({
      error,
    });
    console.log(error);
  });
};

exports.clearSeasons = function(req, res) {
  database.ref('seasons').remove().then((response) => {
    res.send('Seaasons database has been cleared!');
  }).catch((error) => {
    res.send({
      error,
    });
    console.log(error);
  });
};
