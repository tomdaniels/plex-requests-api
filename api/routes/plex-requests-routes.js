postmodule.exports = function(app) {
  var requestControllers = require('../controllers/plex-requests-controllers');

  app.route('/movie/:id')
    .get(requestControllers.getMovieId)
    .post(requestControllers.postMovieId);


  app.route('/tv/:id')
    .get(requestControllers.getTvId)
    .post(requestControllers.sendTvId);
};
