module.exports = function(app) {
  var requestControllers = require(`../middleware/plex-requests-controllers`);
  const prefix = '/v1';

  app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    next();
  });

  app.route(`${prefix}/media`)
    .get(requestControllers.getAll)

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
