const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const StatusAction = dbConnection.define("statusAction", {
    statusAction: sequelize.STRING,
})

module.exports = StatusAction;