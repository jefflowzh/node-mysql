const db = require("../entities");
const bcrypt = require('bcrypt');

// Create and Save a new User
exports.create = async (name, email, password) => {
  try {
    const User = db.users;

    const hashedPassword = await bcrypt.hash(password, 10);

    // Save User in the database
    const newUser = await User.create({
      name: name,
      email: email,
      hashedPassword: hashedPassword,
    });
    return newUser;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

// Retrieve all Users from the database.
exports.findAll = () => {

};

// Find a single User with an id
exports.findOne = async (email) => {
  try {
    const User = db.users;

    const user = await User.findOne({
      where: {
        email: email
      }
    })

    if (!user) {
      throw new Error("User not found!");
    }

    return user;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

// Update a User by the id in the request
exports.update = () => {

};

// Delete a User with the specified id in the request
exports.delete = () => {

};