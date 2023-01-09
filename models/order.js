const { Sequelize } = require("sequelize");

module.exports = (conn, Sequelize) =>  {
    const Order = conn.define("order",{
            createAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            discount: {
                type: Sequelize.INTEGER,
                default: 0
            },
            paymentDate: {
                type: Sequelize.DATE
            },
            price: {
                type: Sequelize.INTEGER
            },
            deliveryNumber: {
                type: Sequelize.STRING
            },
            deliveryTown: {
                type: Sequelize.STRING
            },
            deliveryPostalCode: {
                type: Sequelize.STRING
            },
            deliveryAddress: {
                type: Sequelize.STRING
            },
            deliverySendDate: {
                type: Sequelize.DATE
            },
            deliveryReceiveDate: {
                type: Sequelize.DATE
            }
    });
    return Order
}