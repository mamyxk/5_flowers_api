const { Sequelize } = require("sequelize");

module.exports = (conn, Sequelize) => {
    const ProductImage = conn.define("productImage", {
        path: {
            type: Sequelize.STRING,
            allowNull: false
        },
        main: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            default: false
        }
    });
    return ProductImage
}