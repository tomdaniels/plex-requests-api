const config = require('config');
const compression = require('compression');
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const slash = require('express-slash');
const hpp = require('hpp');
const cors = require('cors');
const pinoExpress = require('express-pino-logger');
const createLogger = require('./core/logger');
const serverTiming = require('./middleware/server-timing');
const errorHandler = require('./middleware/error-handler');
// const exampleValidator = require('./middleware/example-validator');
const configureSwaggerWithMetrics = require('./middleware/swagger-with-metrics');
const { metaRouter } = require('./routes/');
const { name, version } = require('../package.json');

async function start() {
  // start express
  const logger = createLogger();

  logger.info(`Starting ${name}@${version}`);
  const app = express();

  // general cache settings
  app.set(
    'etag',
    config.get('ENABLE_ETAG') === true &&
      config.get('DISABLE_ALL_CACHES') !== true,
  );

  // Trust akamai to get users ip address directly from express request.
  app.enable('trust proxy');

  app.enable('strict routing');
  app.enable('case sensitive routing');
  logger.info('Enabling of strict and case sensitive complete.');

  // Enable request logging
  app.use(pinoExpress({ logger }));

  // Register common middleware
  app.use(compression());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(hpp());
  app.use(cookieParser());
  app.use(helmet());
  app.use(serverTiming());

  logger.info('Common middleware registration complete.');

  // Register routes
  app.use('/', metaRouter);
  logger.info('Route registration complete.');

  // Register trailing slash check - must come after registering routes.
  app.use(slash());

  app.use(
    cors({
      origin: "*",
    }),
  );

  // path specific middleware configuration
  // app.use('/v1/path', requestValidator, configValidator);

  const middleware = await configureSwaggerWithMetrics();

  app.use(middleware);
  app.use(errorHandler);

  return app;
}

module.exports = start;
