const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const User_Model = dbConnection.define('user', {
    firstName: sequelize.STRING,
    lastName: sequelize.STRING,
    role: sequelize.ENUM('admin', 'factoryManager'),
    mobileNumber: sequelize.STRING,
    emailId: sequelize.STRING,
    password: sequelize.STRING,
});

module.exports = User_Model;