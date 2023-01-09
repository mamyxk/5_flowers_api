const { Sequelize } = require("sequelize");

module.exports = (conn, Sequelize) =>  {
    const OrderStatus = conn.define("orderStatus",{
            name: {
                type: Sequelize.STRING,
                default: 0
            }
    });
    return OrderStatus
}