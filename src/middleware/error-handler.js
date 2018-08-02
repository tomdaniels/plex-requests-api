const config = require('config');

function errorHandler(err, req, res, next) {
  req.log.error(err);
  const response = {};

  // see: https://expressjs.com/en/guide/error-handling.html
  if (res.headersSent) {
    return next(err);
  }

  // swagger validation handler
  if (err.failedValidation) {
    return res.json(err);
  }

  if (err.status && err.status >= 400 && err.status < 500) {
    res.status(err.status);
  } else {
    res.status(500);
    response.message = 'Internal Server Error';
  }

  if (config.isDevelopment) {
    response.stack = err.stack || err;
  }

  return res.json(response);
}

module.exports = errorHandler;
