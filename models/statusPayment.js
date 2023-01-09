const { Sequelize } = require("sequelize");

module.exports = (conn, Sequelize) =>  {
    const StatusPayment = conn.define("statusPayment",{
            name: {
                type: Sequelize.STRING,
                allowNull: false
            }
    });
    return StatusPayment
}