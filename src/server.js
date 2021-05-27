const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');
const cores = require('cors');
const routes = require('./routes');
const config = require('./config');

const app = express();
app.use(cores());
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(config.basePath, routes);

module.exports = http.createServer(app);
