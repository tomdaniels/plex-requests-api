function resultReducer(acc, { healthy, name, message }) {
  /* eslint-disable no-param-reassign */
  if (healthy) {
    acc.Healthy[name] = message;
  } else {
    acc.Unhealthy[name] = message;
    acc.IsHealthy = false;
  }

  return acc;
  /* eslint-enable no-param-reassign */
}

module.exports = function runHealthChecks(healthChecks) {
  const initialResponse = {
    IsHealthy: true,
    Healthy: {},
    Unhealthy: {},
    Timestamp: Date.now(),
  };

  return Promise.all(healthChecks()).then((results) =>
    results.reduce(resultReducer, initialResponse),
  );
};
