const database = require('../firebase/firebase');
const getMedia = require('../middleware/get-media');

exports.listTvShows = (req, res) => {
  database
    .ref('tv')
    .once('value')
    .then((snapshot) => {
      getMedia(snapshot, res);
    })
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));
};

exports.addTvId = (req, res) => {
  const message = `the show that has been requested: ${req.params.name}`;
  database.ref('tv').push(req.params.name);
  res.send(message);
};

exports.clearTv = (req, res) => {
  database
    .ref('tv')
    .remove()
    .then(() => {
      res.send('the TV Shows database has been cleared!');
    })
    .catch((error) => {
      res.send({
        error,
      });
      // eslint-disable-next-line no-console
      console.log(error);
    });
};
