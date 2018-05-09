module.exports = function(app) {
  var requestControllers = require(`../controllers/plex-requests-controllers`);
  const prefix = '/v1';

  app.route(`${prefix}/movie/:id`)
    .get(requestControllers.listMovieId)
    .post(requestControllers.addMovieId);


  app.route(`${prefix}/tv/:id`)
    .get(requestControllers.listTvId)
    .post(requestControllers.addTvId);

  app.route(`${prefix}/tv/:id/season/:seasonId`)
    .get(requestControllers.listTvSeasonId)
    .post(requestControllers.addTvSeasonId);
};
