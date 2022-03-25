const userService = require("../services/UserService.js");

// Create a User to the database.
exports.create = async (req, res) => {
  try {
    const reqBody = req.body;
    const data = await userService.create(reqBody.name, reqBody.email, reqBody.password);
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the User."
    });
  }
};