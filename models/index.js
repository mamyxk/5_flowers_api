const Sequelize = require("sequelize")
const config = require('../app.conf.json')

const connection = new Sequelize(config.database.dbName,config.database.dbUser,config.database.dbPass,{
    host: config.database.dbHost,
    dialect: config.database.dialect,
    operatorAliases: false,
    define: {
        timestamps: false
    }
});


const db = {};

db.Sequelize = Sequelize;
db.connection = connection;
db.accounts = require("./account")(connection,Sequelize);
db.clients = require("./client")(connection,Sequelize);
db.employee = require("./employee")(connection,Sequelize);

db.clients.belongsTo(db.accounts);
db.employee.belongsTo(db.accounts);

module.exports = db;