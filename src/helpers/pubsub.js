const logger = require('../helpers/logger');

async function publishMessage(pubSubClient, topicName, payload) {
  try {
    const dataBuffer = Buffer.from(JSON.stringify(payload));
    const messageId = await pubSubClient.topic(topicName).publish(dataBuffer);
    logger.info(`Message ${messageId} published.`);
    return messageId;
  } catch (error) {
    logger.error(`Received error while publishing: ${error.message}`);
    throw error;
  }
}

async function subscribeMessage(pubSubClient, topicName, subscriptionName, messageHandler) {
  try {
    //const subscription = await pubSubClient.topic(topicName).createSubscription(subscriptionName);
    const subscription = pubSubClient.subscription(subscriptionName);
    subscription.on('message', messageHandler);
  } catch (error) {
    logger.error(`Received error while creating subscription: ${error.message}`);
    throw error;
  }
}

const pubsub = {
  publishMessage,
  subscribeMessage,
};

module.exports = pubsub;
