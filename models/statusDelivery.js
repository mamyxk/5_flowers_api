const { Sequelize } = require("sequelize");

module.exports = (conn, Sequelize) =>  {
    const StatusDelivery = conn.define("statusDelivery",{
            name: {
                type: Sequelize.STRING,
                allowNull: false
            }
    });
    return StatusDelivery
}