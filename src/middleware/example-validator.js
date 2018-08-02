const { getConfig } = require('../helpers/example');
const createError = require('http-errors');

module.exports = function exampleValidator(req, res, next) {
  const configuration = getConfig(
    req.method === 'POST' ? req.body.name : req.query.name,
  );

  if (configuration) {
    // eslint-disable-next-line no-param-reassign
    req.config = configuration;
    next();
    return;
  }

  res
    .status(400)
    .send(
      createError(
        400,
        `Invalid request. Configuration with the name ${
          req.body.name
        } not found.`,
      ),
    );
};
