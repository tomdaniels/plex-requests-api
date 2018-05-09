module.exports = function(app) {
  var requestControllers = require(`../controllers/plex-requests-controllers`);
  const prefix = '/v1';

  app.route(`${prefix}/movie/:id`)
    .get(requestControllers.getMovieId)
    .post(requestControllers.postMovieId);


  app.route(`${prefix}/tv/:id`)
    .get(requestControllers.getTvId)
    .post(requestControllers.postTvId);
};
