const { Sequelize } = require("sequelize");

module.exports = (conn, Sequelize) =>  {
    const StatusComplaint = conn.define("statusComplaint",{
            name: {
                type: Sequelize.STRING,
                allowNull: false
            }
    });
    return StatusComplaint
}