const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const AssistantUserOrder_Model = dbConnection.define("assistantUserOrder", {
})

module.exports = AssistantUserOrder_Model;