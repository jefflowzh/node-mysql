const db = require("../entities");

// Create and Save a new User
exports.create = async (name) => {
  try {
    const User = db.users;
    // Save User in the database
    const newUser = await User.create({
      name: name,
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
exports.findOne = () => {

};

// Update a User by the id in the request
exports.update = () => {

};

// Delete a User with the specified id in the request
exports.delete = () => {

};