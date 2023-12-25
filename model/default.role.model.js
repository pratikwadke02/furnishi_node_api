const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const DefaultRoleManager_Model = dbConnection.define("defaultRoleManager", {
    role: sequelize.STRING,
})

module.exports = DefaultRoleManager_Model;