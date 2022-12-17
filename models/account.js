const { Sequelize } = require("sequelize");

module.exports = (conn, Sequelize) =>  {
    const Account = conn.define("account",{
            login: {
                type: Sequelize.STRING,
                allowNull: false
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            }
    });
    return Account
}