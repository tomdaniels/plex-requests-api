const database = require('../firebase/firebase');

exports.getAll = (req, res) => {
  database
    .ref('/')
    .once('value')
    .then(snapshot => {
      const media = [];
      const data = snapshot.val();
      media.push(data);

      res.send(media);
    })
    // eslint-disable-next-line no-console
    .catch(error => console.log(error));
};

exports.clearAllMedia = (req, res) => {
  database
    .ref('/')
    .remove()
    .then(() => {
      res.send('All media on the database has been removed');
    })
    .catch(error => {
      res.send({
        error,
      });
      // eslint-disable-next-line no-console
      console.log(error);
    });
};
