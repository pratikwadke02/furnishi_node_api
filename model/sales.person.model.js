const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const SalesPerson_Model = dbConnection.define("salesPerson", {
    salesPerson: sequelize.STRING,
})

module.exports = SalesPerson_Model;