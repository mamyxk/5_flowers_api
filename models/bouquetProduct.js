const { Sequelize } = require("sequelize");

module.exports = (conn, Sequelize) =>  {
    const BouquetProduct = conn.define("bouquetProduct",{
            count: {
                type: Sequelize.INTEGER,
                allowNull: false,
                default: 0
            }
    });
    return BouquetProduct
}