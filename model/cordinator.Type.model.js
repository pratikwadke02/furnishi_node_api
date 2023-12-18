const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const CordinatorType_Model = dbConnection.define("cordinatorType", {
    cordinatorType: sequelize.STRING,
})

module.exports =CordinatorType_Model;