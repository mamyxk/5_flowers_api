const { Sequelize } = require("sequelize");

module.exports = (conn, Sequelize) =>  {
    const Client = conn.define("client",{
        taxed: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        town: {
            type: Sequelize.STRING,
            allowNull: true
        },
        postalCode: {
            type: Sequelize.STRING,
            allowNull: true
        },
        address: {
            type: Sequelize.STRING,
            allowNull: true
        },
        phontNumber: {
            type: Sequelize.STRING,
            allowNull: true
        }

    });
    return Client
}