const database = require('../firebase/firebase');
const getMedia = require('../middleware/get-media');

exports.listTvSeasons = function(req, res) {
  database.ref('seasons').once('value').then((snapshot) => {
    getMedia(snapshot, res);
  }).catch((error) => console.log(error));
};

exports.addTvSeasonId = function(req, res) {
  const message = `the show that has been requested: ${req.params.showName} (${req.params.seasonNumber})`;
  database.ref('seasons').push({
    show: req.params.showName,
    season: req.params.seasonNumber,
  });
  res.send(message);
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
