const { Sequelize } = require("sequelize");

module.exports = (conn, Sequelize) =>  {
    const Client = conn.define("client",{
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false
        },

    });
    return Client
}