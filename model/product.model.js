const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const Product_Model = dbConnection.define("product", {
    product: sequelize.STRING,
})

module.exports = Product_Model;