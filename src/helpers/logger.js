const winston = require('winston');

const logger = winston.createLogger({
  format: winston.format.simple(),
  level: 'debug',
  defaultMeta: {
    service: 'gke-vendor-order-service',
  },
  transports: [new winston.transports.Console()],
});

module.exports = logger;
