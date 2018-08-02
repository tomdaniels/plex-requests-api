let newRelic;

if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line global-require
  newRelic = require('newrelic');
}

const config = require('config');
const createLogger = require('./core/logger');
const start = require('./app');

start().then((app) => {
  const logger = createLogger();

  if (config.isProduction) {
    app.locals.newrelic = newRelic; // eslint-disable-line no-param-reassign
  }

  const port = config.get('PORT');

  app.listen(port, () => {
    logger.info(`Server started at http://localhost:${port}`);
  });
}).catch(error => console.log(`Server failed: ${error}`));
