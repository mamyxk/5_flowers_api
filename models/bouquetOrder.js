const { Sequelize } = require("sequelize");

module.exports = (conn, Sequelize) =>  {
    const BouquetOrder = conn.define("bouquetOrder",{
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
    return BouquetOrder
}