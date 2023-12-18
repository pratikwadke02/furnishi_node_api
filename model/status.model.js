const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const Status_Model = dbConnection.define('status', {
    status: sequelize.STRING,
})

module.exports = Status_Model;