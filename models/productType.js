const { Sequelize } = require("sequelize");

module.exports = (conn, Sequelize) =>  {
    const ProductType = conn.define("productType",{
            name: {
                type: Sequelize.STRING,
                allowNull: false
            }
    });
    return ProductType
}