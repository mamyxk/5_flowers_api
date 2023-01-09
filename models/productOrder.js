const { Sequelize } = require("sequelize");

module.exports = (conn, Sequelize) =>  {
    const ProductOrder = conn.define("productOrder",{
            count: {
                type: Sequelize.INTEGER,
                allowNull: false,
                default: 0
            },
            price: {
                type: Sequelize.INTEGER,
                allowNull: false
            }
    });
    return ProductOrder
}