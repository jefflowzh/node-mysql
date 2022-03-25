const { env } = require('../config/env');
const mysql = require('mysql2/promise');
const Sequelize = require("sequelize");

module.exports = db = {};

module.exports.initializeDb = async function () {
  // create db if it doesn't already exist
  const connection = await mysql.createConnection({
    host: env.db.host,
    port: env.db.port,
    user: env.db.username,
    password: env.db.password
  });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${env.db.name}\`;`);

  const sequelize = new Sequelize(env.db.name, env.db.username, env.db.password, {
    host: env.db.host,
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