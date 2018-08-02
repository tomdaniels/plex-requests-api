var requestControllers = require(`../middleware/middleware`);
const { Router } = require('express');
const runHealthChecks = require('../core/run-health-checks');
const noCache = require('../middleware/no-cache');
const apiV1 = require('./versions/1');
const prefix = '/v1';

const metaRouter = new Router({
  strict: true,
  caseSensitive: true,
});

// any custom health checks
const healthChecks = () => [];

metaRouter.get('/', (req, res) => res.redirect('/swagger'));
metaRouter.use('/v1', apiV1);

// core routes
metaRouter.route(`${prefix}/media`)
  .get(requestControllers.getAll);

metaRouter.route(`${prefix}/movies`)
  .get(requestControllers.listMovies);

metaRouter.route(`${prefix}/tv`)
  .get(requestControllers.listTvShows);

metaRouter.route(`${prefix}/seasons`)
  .get(requestControllers.listTvSeasons);

metaRouter.route(`${prefix}/movie/:name`)
  .post(requestControllers.addMovieId);

metaRouter.route(`${prefix}/tv/:name`)
  .post(requestControllers.addTvId);

metaRouter.route(`${prefix}/tv/:showName/season/:seasonNumber`)
  .post(requestControllers.addTvSeasonId);

metaRouter.route(`${prefix}/media-resolved`)
  .delete(requestControllers.clearAllMedia);

metaRouter.route(`${prefix}/movies-resolved`)
  .delete(requestControllers.clearMovies);

metaRouter.route(`${prefix}/tv-resolved`)
  .delete(requestControllers.clearTv);

metaRouter.route(`${prefix}/seasons-resolved`)
  .delete(requestControllers.clearSeasons);

metaRouter.get('/ping', noCache, (req, res) => res.send());
metaRouter.get('/health', noCache, (req, res, next) => {
  runHealthChecks(healthChecks)
    .then((results) => res.send(results))
    .catch(next);
});

// metrics routes
metaRouter.get('/metrics', noCache, (req, res) => {
  res
    .set('Content-Type', 'application/json')
    .send(metrics.getAll(req.query.reset));
});

metaRouter.get('/', (req, res) => res.redirect('/swagger'));

module.exports = { metaRouter };
