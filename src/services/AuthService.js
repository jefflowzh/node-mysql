const jwt = require('jsonwebtoken');
const { env } = require('../config/env');
const userService = require("../services/UserService.js");
const bcrypt = require('bcrypt');

exports.login = async (email, password) => {
  try {
    const user = await userService.findOne(email);

    const passwordMatch = await bcrypt.compare(password, user.hashedPassword);

    if (!passwordMatch) {
      throw new Error('Invalid password for account!');
    }

    const token = jwt.sign(
      { user_id: email },
      env.jwt.secret,
      { expiresIn: "24h" }
    );

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token
    };

  } catch (err) {
    console.log(err.message);
    throw err;
  }
}