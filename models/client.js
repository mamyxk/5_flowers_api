const { Sequelize } = require("sequelize");

module.exports = (conn, Sequelize) =>  {
    const Client = conn.define("client",{
        taxed: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        town: {
            type: Sequelize.STRING,
            allowNull: false
        },
        postalCode: {
            type: Sequelize.STRING,
            allowNull: false
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false
        },
        phontNumber: {
            type: Sequelize.STRING,
            allowNull: false
        }

    });
    return Client
}