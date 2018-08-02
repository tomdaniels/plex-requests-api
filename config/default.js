const defer = require('config/defer').deferConfig;

module.exports = {
  NEW_RELIC_APP_NAME: process.env.NEW_RELIC_APP_NAME || 'Fe Home Loans Api',
  NEW_RELIC_LICENSE_KEY: process.env.NEW_RELIC_LICENSE_KEY || '',
  NEW_RELIC_ENABLED: process.env.NEW_RELIC_ENABLED || false,
  NEW_RELIC_NO_CONFIG_FILE: process.env.NEW_RELIC_NO_CONFIG_FILE || false,
  NEW_RELIC_ERROR_COLLECTOR_IGNORE_ERROR_CODES:
    process.env.NEW_RELIC_ERROR_COLLECTOR_IGNORE_ERROR_CODES || '400,404',
  NEW_RELIC_CAPTURE_PARAMS: process.env.NEW_RELIC_CAPTURE_PARAMS || true,

  PORT: process.env.PORT || 3000,
  SSL_PORT: process.env.SSL_PORT || 4430,
  NO_CDN_API_ENDPOINT: process.env.NO_CDN_API_ENDPOINT || '',

  LOG_LEVEL: process.env.LOG_LEVEL || 'silly',

  DISABLE_ALL_CACHES: process.env.DISABLE_ALL_CACHES || false,
  ENABLE_ETAG: process.env.ENABLE_ETAG || true,

  RAYGUN_KEY: process.env.RAYGUN_KEY || '',

  SERVER_TIMING: process.env.SERVER_TIMING || true,

  isProduction: defer(() => process.env.NODE_ENV === 'production'),
  isDevelopment: defer(
    () => !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
  ),
  isTest: defer(() => process.env.NODE_ENV === 'test'),
};
