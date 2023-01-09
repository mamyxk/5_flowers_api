const { Sequelize } = require("sequelize");

module.exports = (conn, Sequelize) =>  {
    const StatusOrder = conn.define("statusOrder",{
            name: {
                type: Sequelize.STRING,
                allowNull: false
            }
    });
    return StatusOrder
}