const config = require('config');
const createLogger = require('./core/logger');
const start = require('./app');

start()
  .then(app => {
    const logger = createLogger();
    const port = config.get('PORT');

    app.listen(port, () => {
      logger.info(`Server started at http://localhost:${port}`);
    });
  })
  // eslint-disable-next-line no-console
  .catch(error => console.log(`Server failed: ${error}`));
