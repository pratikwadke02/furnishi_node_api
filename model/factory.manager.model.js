const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const FactoryManager_Model = dbConnection.define('factoryManager', {
    firstName: sequelize.STRING,
    lastName: sequelize.STRING,
    mobileNumber: sequelize.STRING,
    emailId: sequelize.STRING,
    password: sequelize.STRING,
});

module.exports = FactoryManager_Model;