const config = require('config');
const pino = require('pino');
const pinoColada = require('pino-colada');

const loggers = new Map();

function createLogger(name) {
  let logger;
  const pinoConfig = { name };

  if (config.isProduction) {
    logger = pino(pinoConfig);
  } else if (config.isTest) {
    pinoConfig.level = `silent`;
    logger = pino(pinoConfig);
  } else if (config.isDevelopment) {
    const pretty = pinoColada();
    pretty.pipe(process.stdout);
    logger = pino(pinoConfig, pretty);
  }

  logger.addLevel('silly', 5);

  return logger;
}

function getLogger(name = 'transactions-users') {
  if (!loggers.has(name)) {
    loggers.set(name, createLogger(name));
  }

  return loggers.get(name);
}

module.exports = getLogger;
