const authService = require("../services/AuthService.js");

// Login a user
exports.login = async (req, res) => {
  try {
    const reqBody = req.body;
    const data = await authService.login(reqBody.email, reqBody.password);
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while logging in."
    });
  }
};