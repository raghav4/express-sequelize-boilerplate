require('dotenv').config();
const debug = require('debug')('app:db');
const Sequelize = require('sequelize');
const config = require('config');

const sequelize = new Sequelize(
  config.get('db.DATABASE'),
  config.get('db.USER'),
  config.get('db.PASSWORD'),
  {
    host: config.get('db.HOST'),
    dialect: config.get('db.DIALECT'),
  },
);

const connect = () => {
  try {
    sequelize.sync({
      // eslint-disable-next-line no-console
      logging: console.log,
      force: true,
    });
    debug('Connected to the database...');
  } catch (ex) {
    debug('Connection to the DB cannot be established', ex);
  }
};

module.exports = { connect, sequelize };
