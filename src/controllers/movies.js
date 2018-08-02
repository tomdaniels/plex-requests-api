const database = require('../firebase/firebase');
const getMedia = require('../middleware/get-media');

exports.listMovies = function(req, res) {
  database.ref('movies').once('value').then((snapshot) => {
    getMedia(snapshot, res);
  }).catch((error) => console.log(error));
};

exports.addMovieId = function(req, res) {
  const message = `the movie that has been requested: ${req.params.name}`;
  database.ref('movies').push(req.params.name);
  res.send(message);
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
