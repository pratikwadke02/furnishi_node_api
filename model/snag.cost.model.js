const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const SnagCost = dbConnection.define("snagCost", {
    cost: sequelize.STRING,
})

module.exports = SnagCost;