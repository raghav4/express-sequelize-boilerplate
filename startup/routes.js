const cors = require('cors');
const bodyParser = require('body-parser');
const error = require('../middlewares/error');

module.exports = (app) => {
  app.use(
    cors({
      exposedHeaders: ['Content-Length', 'x-auth-token'],
    }),
  );
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(error);
};
