const express = require("express");
const cors = require("cors");

const app = express();

const config = require('./app.conf.json')

console.log(`Loaded config ${JSON.stringify(config)}`)

var corsOptions = {
  origin: "http://0.0.0.0:8081"
};

// Set cors for security
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Update database schema
const db = require("./models");
// db.connection.sync()
db.connection.sync({ force: true })
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

  
// Import routers
const accountsRouter = require('./routes/accountsRouter')
app.use('/accounts', accountsRouter);

// Start app listen on port
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
