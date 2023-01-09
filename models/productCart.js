const { Sequelize } = require("sequelize");

module.exports = (conn, Sequelize) =>  {
    const ProductCart = conn.define("productCart",{
            count: {
                type: Sequelize.INTEGER,
                allowNull: false
            }
    });
    return ProductCart
}