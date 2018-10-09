const database = require('../firebase/firebase');
const getMedia = require('../middleware/get-media');

exports.listTvSeasons = (req, res) => {
  database
    .ref('seasons')
    .once('value')
    .then((snapshot) => {
      getMedia(snapshot, res);
    })
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));
};

exports.addTvSeasonId = (req, res) => {
  const message = `the show that has been requested: ${req.params.showName} (${
    req.params.seasonNumber
  })`;
  database.ref('seasons').push({
    show: req.params.showName,
    season: req.params.seasonNumber,
  });
  res.send(message);
};

exports.clearSeasons = (req, res) => {
  database
    .ref('seasons')
    .remove()
    .then(() => {
      res.send('Seaasons database has been cleared!');
    })
    .catch((error) => {
      res.send({
        error,
      });
      // eslint-disable-next-line no-console
      console.log(error);
    });
};
