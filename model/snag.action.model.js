const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const SnagAction = dbConnection.define("snagAction", {
    action: sequelize.STRING,
})

module.exports = SnagAction;