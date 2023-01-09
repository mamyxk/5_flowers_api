const { Sequelize } = require("sequelize");

module.exports = (conn, Sequelize) =>  {
    const Bouquet = conn.define("bouquet",{
            itemCount: {
                type: Sequelize.INTEGER,
                allowNull: false,
                default: 0
            }
    });
    return Bouquet
}