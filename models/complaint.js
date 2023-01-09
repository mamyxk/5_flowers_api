const { Sequelize } = require("sequelize");

module.exports = (conn, Sequelize) =>  {
    const Complaint = conn.define("complaint",{
            reason: {
                type: Sequelize.STRING,
                allowNull: false
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            decisionDate: {
                type: Sequelize.DATE,
            }
    });
    return Complaint
}