const Sequelize = require("sequelize")
const config = require('../app.conf.json')

const connection = new Sequelize(config.database.dbName,config.database.dbUser,config.database.dbPass,{
    host: config.database.dbHost,
    dialect: config.database.dialect,
    operatorAliases: false,
    define: {
        timestamps: false,
        underscored: true
    }
});


const db = {};

db.Sequelize = Sequelize;
db.connection = connection;

db.account = require("./account")(connection,Sequelize);
db.bouquet = require("./bouquet")(connection,Sequelize);
db.bouquetCart = require("./bouquetCart")(connection,Sequelize);
db.bouquetOrder = require("./bouquetOrder")(connection,Sequelize);
db.bouquetProduct = require("./bouquetProduct")(connection,Sequelize);
db.client = require("./client")(connection,Sequelize);
db.complaint = require("./complaint")(connection,Sequelize);
db.discount = require("./discount")(connection,Sequelize);
db.discountType = require("./discountType")(connection,Sequelize);
db.employee = require("./employee")(connection,Sequelize);
db.order = require("./order")(connection,Sequelize);
db.orderStatus = require("./orderStatus")(connection,Sequelize);
db.product = require("./product")(connection,Sequelize);
db.productCart = require("./productCart")(connection,Sequelize);
db.productOrder = require("./productOrder")(connection,Sequelize);
db.productType = require("./productType")(connection,Sequelize);
db.statusComplaint = require("./statusComplaint")(connection,Sequelize);
db.statusDelivery = require("./statusDelivery")(connection,Sequelize);
db.statusOrder = require("./statusOrder")(connection,Sequelize);
db.statusPayment = require("./statusPayment")(connection,Sequelize);

db.client.belongsTo(db.account);
db.employee.belongsTo(db.account);

db.discount.belongsTo(db.discountType);
db.discount.belongsTo(db.client);

db.bouquetCart.belongsTo(db.client)
db.bouquetCart.belongsTo(db.bouquet)
db.productCart.belongsTo(db.client)

db.bouquetProduct.belongsTo(db.product)
db.bouquetProduct.belongsTo(db.bouquet)

db.bouquetOrder.belongsTo(db.order)
db.bouquetOrder.belongsTo(db.bouquet)
db.productOrder.belongsTo(db.order)

db.order.belongsTo(db.statusOrder)
db.order.belongsTo(db.statusPayment)
db.order.belongsTo(db.statusDelivery)

db.complaint.belongsTo(db.order)
db.complaint.belongsTo(db.statusComplaint)

db.product.belongsToMany(db.productType,{through: "products_types_join"})

module.exports = db;