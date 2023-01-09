const { Sequelize } = require("sequelize");

module.exports = (conn, Sequelize) =>  {
    const DiscountType = conn.define("discountType",{
            name: {
                type: Sequelize.STRING,
                allowNull: false
            }
    });
    return DiscountType
}