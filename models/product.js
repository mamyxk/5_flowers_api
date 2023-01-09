const { Sequelize } = require("sequelize");

module.exports = (conn, Sequelize) =>  {
    const Product = conn.define("product",{
            price: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            tax: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            active: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            availBouquet: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            }

    });
    return Product
}