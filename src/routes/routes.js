module.exports = function(app) {
  var requestControllers = require(`../middleware/middleware`);
  const prefix = '/v1';

  app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    next();
  });

  app.route(`${prefix}/media`)
    .get(requestControllers.getAll);

  app.route(`${prefix}/movies`)
    .get(requestControllers.listMovies);

  app.route(`${prefix}/tv`)
    .get(requestControllers.listTvShows);

  app.route(`${prefix}/seasons`)
    .get(requestControllers.listTvSeasons);

  app.route(`${prefix}/movie/:name`)
    .post(requestControllers.addMovieId);

  app.route(`${prefix}/tv/:name`)
    .post(requestControllers.addTvId);

  app.route(`${prefix}/tv/:showName/season/:seasonNumber`)
    .post(requestControllers.addTvSeasonId);

  app.route(`${prefix}/media-resolved`)
    .delete(requestControllers.clearAllMedia);

  app.route(`${prefix}/movies-resolved`)
    .delete(requestControllers.clearMovies);

  app.route(`${prefix}/tv-resolved`)
    .delete(requestControllers.clearTv);

  app.route(`${prefix}/seasons-resolved`)
    .delete(requestControllers.clearSeasons);
};
