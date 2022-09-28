const { Sequelize } = require('sequelize');

const database = String(process.env.DATABASE_NAME);
const username = String(process.env.DATABASE_USERNAME);
const password = String(process.env.DATABASE_PASSWORD);
const host = String(process.env.DATABASE_HOST);

const db = new Sequelize(database, username, password, { host, dialect: 'mysql', logging: false });

module.exports = db;
