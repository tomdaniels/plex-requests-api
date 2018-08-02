const database = require('../firebase/firebase');
const getMedia = require('../middleware/get-media');

exports.listTvShows = function(req, res) {
  database.ref('tv').once('value').then((snapshot) => {
    getMedia(snapshot, res);
  }).catch((error) => console.log(error));
};

exports.addTvId = function(req, res) {
  const message = `the show that has been requested: ${req.params.name}`;
  database.ref('tv').push(req.params.name);
  res.send(message);
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
