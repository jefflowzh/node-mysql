const { database } = require('../config/env');
const mysql = require('mysql2/promise');
const Sequelize = require("sequelize");

module.exports = db = {};

module.exports.initializeDb = async function () {
  // create db if it doesn't already exist
  const connection = await mysql.createConnection({
    host: database.host,
    port: database.port,
    user: database.username,
    password: database.password
  });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database.name}\`;`);

  const sequelize = new Sequelize(database.name, database.username, database.password, {
    host: database.host,
    dialect: 'mysql',
    pool: {
      max: 400,
      min: 0,
      acquire: 20000,
      idle: 10000,
      evict: 1000
    }
  });

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  db.users = require("./User.js")(sequelize, Sequelize);

  db.sequelize.sync();
  // // drop the table if it already exists
  // db.sequelize.sync({ force: true }).then(() => {
  //   console.log("Drop and re-sync db.");
  // });
}