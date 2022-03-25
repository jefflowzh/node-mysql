require('dotenv').config()

module.exports = {
  env: {
    db: {
      name: process.env.DB_NAME,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    },
    api: {
      port: process.env.PORT,
      path: process.env.PATH,
    },
    jwt: {
      secret: process.env.JWT_SECRET
    }
  }
};