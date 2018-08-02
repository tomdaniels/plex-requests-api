const database = require('../firebase/firebase');
const getMedia = require('../middleware/get-media');

exports.getAll = function(req, res) {
  database.ref('/').once('value').then((snapshot) => {
    const media = [];
    const data = snapshot.val();
    media.push(data);

    res.send(media);
  }).catch((error) => console.log(error));
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
