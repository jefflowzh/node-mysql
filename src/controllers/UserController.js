const userService = require("../services/UserService.js");

// Retrieve all Users from the database.
exports.create = async (req, res) => {
  try {
    const reqBody = req.body;
    const data = await userService.create(reqBody.name);
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Tutorial."
    });
  }
};