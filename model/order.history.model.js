const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const OrderHistory_Model = dbConnection.define("orderHistory", {
});

module.exports = OrderHistory_Model;