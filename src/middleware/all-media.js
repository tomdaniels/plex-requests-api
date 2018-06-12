const database = require('../firebase/firebase');

function getAll(req, res) {
  database.ref('/').once('value').then((snapshot) => {
    const media = [];
    const data = snapshot.val();
    media.push(data);
    res.send(data);
  }).catch((error) => console.log(error));
};

module.exports = getAll;
