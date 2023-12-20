const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const AssistantUser_Model = dbConnection.define("assistantUser", {
    name: sequelize.STRING,
    mobileNumber: sequelize.STRING,
    emailId: sequelize.STRING,
    password: sequelize.STRING,
})

module.exports = AssistantUser_Model;