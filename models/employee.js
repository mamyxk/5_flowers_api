const { Sequelize } = require("sequelize");

module.exports = (conn, Sequelize) =>  {
    const Employee = conn.define("employee",{
            isAdmin: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            dateOfEmployment: {
                type: Sequelize.DATE,
                allowNull: false
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false
            },
            phoneNumber: {
                type: Sequelize.STRING,
                allowNull: false
            }
    });
    return Employee
}