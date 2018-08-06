const sinon = require('sinon');
const supertest = require('supertest');
const config = require('config');

global.sinon = sinon;
global.supertest = supertest;

global.getApp = async () => {
  let app;
  if (['stage', 'production'].includes(config.util.getEnv('NODE_CONFIG_ENV'))) {
    app = config.get('NO_CDN_API_ENDPOINT');
  } else {
    // eslint-disable-next-line global-require
    const start = require('../src/app');
    app = await start();
  }
  return supertest(app);
};

// In Node v7 unhandled promise rejections will terminate the process
if (!process.env.LISTENING_TO_UNHANDLED_REJECTION) {
  process.on('unhandledRejection', (reason) => {
    throw reason;
  });
  // Avoid memory leak by adding too many listeners
  process.env.LISTENING_TO_UNHANDLED_REJECTION = true;
}
