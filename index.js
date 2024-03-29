const express = require("express"),
bodyParser = require("body-parser"),
swaggerJsdoc = require("swagger-jsdoc"),
swaggerUi = require("swagger-ui-express");
const cors = require("cors");
const sequelizeFixtures = require('sequelize-fixtures');

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
    // load fixtures
    sequelizeFixtures.loadFiles([
      "./fixtures/productTypes.json",
      "./fixtures/orderStatuses.json",
      "./fixtures/complaintStatuses.json",
      "./fixtures/products.json",
      "./fixtures/orders.json"
    ],db).then(function(){
      console.log('Loaded fixtures')})
    // synced OK
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

  
// Import routers
const clientsRouter = require('./routes/clientsRouter')
const productsRouter = require('./routes/productsRouter')
const complaintsRouter = require('./routes/complaintsRouter')
app.use('/accounts', clientsRouter);
app.use('/products',productsRouter);
app.use('/complaints',complaintsRouter)

const options = {
  definition: {
    openapi: "3.0.0",
    servers: [
      {
        url: "http://localhost:8081",
      },
    ],
  },
  apis: ["./routes/*.js"],
};


const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

// Start app listen on port
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
