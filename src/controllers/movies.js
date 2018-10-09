const database = require('../firebase/firebase');
const getMedia = require('../middleware/get-media');

exports.listMovies = (req, res) => {
  database
    .ref('movies')
    .once('value')
    .then((snapshot) => {
      getMedia(snapshot, res);
    })
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));
};

exports.addMovieId = (req, res) => {
  const message = `the movie that has been requested: ${req.params.name}`;
  database.ref('movies').push(req.params.name);
  res.send(message);
};

exports.clearMovies = (req, res) => {
  database
    .ref('movies')
    .remove()
    .then(() => {
      res.send('Movies database has been cleared!');
    })
    .catch((error) => {
      res.send({
        error,
      });
      // eslint-disable-next-line no-console
      console.log(error);
    });
};
