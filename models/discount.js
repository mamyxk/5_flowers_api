const { Sequelize } = require("sequelize");

module.exports = (conn, Sequelize) =>  {
    const Discount = conn.define("discount",{
            value: {
                type: Sequelize.INTEGER,
                allowNull: false
            }
    });
    return Discount
}