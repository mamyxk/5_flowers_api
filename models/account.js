const { Sequelize } = require("sequelize");

module.exports = (conn, Sequelize) =>  {
    const Account = conn.define("account",{
            login: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true                
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },
            firstName: {
                type: Sequelize.STRING,
                allowNull: true
            },
            lastName: {
                type: Sequelize.STRING,
                allowNull: true
            },

    });
    return Account
}