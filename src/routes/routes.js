module.exports = app => {
  const userController = require("../controllers/UserController.js");

  var router = require("express").Router();

  // Create a new user
  router.post("/users", userController.create);

  // // Retrieve all users
  // router.get("/users", users.findAll);

  // // Retrieve a single user with id
  // router.get("/users/:id", users.findOne);

  // // Update a user with id
  // router.put("/users/:id", users.update);

  // // Delete a user with id
  // router.delete("/users/:id", users.delete);

  // // Delete all users
  // router.delete("/users", users.deleteAll);

  app.use('/api', router);
};