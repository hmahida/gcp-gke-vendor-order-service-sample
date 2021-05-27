const { PubSub } = require('@google-cloud/pubsub');
const pubsub = require('../helpers/pubsub');
const config = require('../config');
const logger = require('../helpers/logger');

// Creates a client; cache this for further use
const pubSubClient = new PubSub({ projectId: config.gcp.projectId });

const publishData = async orderSaga => {
  await pubsub.publishMessage(pubSubClient, config.gcp.publishTopicName, orderSaga);
};

const messageHandler = message => {
  logger.info(`Data: ${message.data}`);

  const datatoPublish = message.data;
  datatoPublish.vendorConfimation = {
    venodrOrderId: 'gcp-eo-2323',
    status: 'InProcess',
  };

  publishData(datatoPublish);

  message.ack();
};

const subscribeData = async () => {
  await pubsub.subscribeMessage(pubSubClient, config.gcp.subscribeTopicName, config.gcp.subscriptionName, messageHandler);
};

const pubsubService = {
  publishData,
  subscribeData,
};

module.exports = pubsubService;
