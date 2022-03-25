const { env } = require('./config/env');
const express = require("express");
const cors = require("cors");
const app = express();
const { initializeDb } = require('./entities');

app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

initializeDb();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to node-mysql application!!" });
});

require("./routes/routes")(app);

// set port, listen for requests
const PORT = env.api.port || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});