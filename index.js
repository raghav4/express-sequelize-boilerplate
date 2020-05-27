const debug = require('debug')('app:startup');
const express = require('express');
const db = require('./startup/db');

const app = express();
const PORT = process.env.PORT || 5000;

require('./startup/logging')(app);
require('./startup/routes')(app);

const server = app.listen(PORT, () => debug(`Listening on PORT ${PORT}...`));
db.connect();

module.exports = server;
