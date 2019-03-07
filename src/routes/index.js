const { Router } = require('express');
const runHealthChecks = require('../core/run-health-checks');
const noCache = require('../middleware/no-cache');
const apiV1 = require('./versions/1');

const prefix = '/v1';

const mediaController = require('../controllers/media');
const moviesController = require('../controllers/movies');
const tvController = require('../controllers/tv');
const seasonsController = require('../controllers/seasons');

const metaRouter = new Router({
  strict: true,
  caseSensitive: true,
});

metaRouter.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type',
  );
  next();
});

// any custom health checks
const healthChecks = () => [];

metaRouter.get('/', (req, res) => res.redirect('/swagger'));
metaRouter.use('/v1', apiV1);

// core routes
metaRouter
  .route(`${prefix}/media`)
  .get(mediaController.getAll)
  .delete(mediaController.clearAllMedia);

metaRouter
  .route(`${prefix}/movies`)
  .get(moviesController.listMovies)
  .delete(moviesController.clearMovies);

metaRouter.route(`${prefix}/movie/:name`).post(moviesController.addMovieId);

metaRouter
  .route(`${prefix}/tv`)
  .get(tvController.listTvShows)
  .delete(tvController.clearTv);

metaRouter.route(`${prefix}/tv/:name`).post(tvController.addTvId);

metaRouter
  .route(`${prefix}/seasons`)
  .get(seasonsController.listTvSeasons)
  .delete(seasonsController.clearSeasons);

metaRouter
  .route(`${prefix}/tv/:showName/season/:seasonNumber`)
  .post(seasonsController.addTvSeasonId);

metaRouter.get('/ping', noCache, (req, res) => res.send());
metaRouter.get('/health', noCache, (req, res, next) => {
  runHealthChecks(healthChecks)
    .then(results => res.send(results))
    .catch(next);
});

// metrics routes
// metaRouter.get('/metrics', noCache, (req, res) => {
//   res
//     .set('Content-Type', 'application/json')
//     .send(metrics.getAll(req.query.reset));
// });

metaRouter.get('/', (req, res) => res.redirect('/swagger'));

module.exports = { metaRouter };
