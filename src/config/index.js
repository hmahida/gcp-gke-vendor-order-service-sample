require('dotenv').config();

module.exports = {
  port: 3000,
  basePath: '/',
  gcp: {
    projectId: 'spartan-perigee-314702',
    subscribeTopicName: 'Order_Payment_Reserved',
    subscriptionName: 'Order_Payment_Reserved_Subcription',
    publishTopicName: 'Vendor_Order_Palced',
  },
  logging: {
    prettyPrint: true,
    level: 'debug',
    stringify: false,
    humanReadableUnhandledException: true,
    json: true,
    colorize: true,
    timestamp: true,
    silent: false,
  },
};
