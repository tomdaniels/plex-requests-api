const firebase = require('firebase');

var config = {
  apiKey: "AIzaSyB9M8auyBF_uS-hUEZOAbZ1CTch_mrmDXU",
  authDomain: "requests-db985.firebaseapp.com",
  databaseURL: "https://requests-db985.firebaseio.com",
  projectId: "requests-db985",
  storageBucket: "",
  messagingSenderId: "301891703979"
};

firebase.initializeApp(config);

const database = firebase.database();

module.exports = database;
