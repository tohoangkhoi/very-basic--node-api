require("dotenv").config();
const pg = require("pg");
const { Client } = pg;
const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env || {};

const dbClient = new Client({
  user: DB_USERNAME,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
});

module.exports = dbClient;
