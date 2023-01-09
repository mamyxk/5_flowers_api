const { Sequelize } = require("sequelize");

module.exports = (conn, Sequelize) =>  {
    const BouquetCart = conn.define("bouquetCart",{
            count: {
                type: Sequelize.INTEGER,
                allowNull: false,
                default: 0
            }
    });
    return BouquetCart
}