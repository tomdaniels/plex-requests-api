module.exports = function(app) {
  var requestControllers = require(`../middleware/plex-requests-controllers`);
  const prefix = '/v1';

  app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://requests.tomd.io');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    next();
  });

  app.route(`${prefix}/media`)
    .get(requestControllers.getAll);

  app.route(`${prefix}/movies`)
    .get(requestControllers.listMovieId);

  app.route(`${prefix}/movie/:id`)
    .post(requestControllers.addMovieId);

  app.route(`${prefix}/tv`)
    .get(requestControllers.listTvId);

  app.route(`${prefix}/tv/:id`)
    .post(requestControllers.addTvId);

  app.route(`${prefix}/seasons`)
    .get(requestControllers.listTvSeasonId);

  app.route(`${prefix}/tv/:id/season/:seasonId`)
    .post(requestControllers.addTvSeasonId);
};
