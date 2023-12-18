const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const  Admin_Model = dbConnection.define('admin', {
    firstName: sequelize.STRING,
    lastName: sequelize.STRING,
    emailId: sequelize.STRING,
    phoneNumber: sequelize.STRING,
    password: sequelize.STRING,
})

module.exports = Admin_Model;