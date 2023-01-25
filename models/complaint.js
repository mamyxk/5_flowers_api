const { Sequelize } = require("sequelize");

module.exports = (conn, Sequelize) =>  {
    const Complaint = conn.define("complaint",{
            reason: {
                type: Sequelize.STRING,
                allowNull: false
            },
            createdAt: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                allowNull: true
            },
            decisionDate: {
                type: Sequelize.DATE,
                allowNull: true
            },
            decision: {
                type: Sequelize.INTEGER
            }
    });
    return Complaint
}