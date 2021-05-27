const server = require('./server');
const config = require('./config');
const logger = require('./helpers/logger');
const pubsub = require('./services/pubsubService');

server.listen(config.port, async () => {
  logger.info(`Started on port ${server.address().port}`);

  await pubsub.subscribeData();
});

// Workaround for nodemon not killing all child processes
process.on('SIGINT', () => {
  logger.info('Server shutting down');
  process.exit();
});
