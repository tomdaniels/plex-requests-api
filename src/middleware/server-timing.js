const appConfig = require('config');

if (
  !appConfig.get('SERVER_TIMING') ||
  [false, 'false', 'False', 'FALSE'].indexOf(appConfig.get('SERVER_TIMING')) !==
    -1
) {
  // No-op when not enabled
  module.exports = function serverTimingNoOp() {
    return (_, res, next) => {
      /* eslint-disable no-param-reassign */
      res.setMetric = () => {};
      res.startTime = () => {};
      res.endTime = () => {};
      /* eslint-enable no-param-reassign */
      if (typeof next === 'function') {
        next();
      }
    };
  };
} else {
  // eslint-disable-next-line global-require
  module.exports = require('server-timing');
}
