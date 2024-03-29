const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const WorkPartner_Model = dbConnection.define('workPartner', {
    firstName: sequelize.STRING,
    lastName: sequelize.STRING,
    mobileNumber: sequelize.STRING,
    emailId: sequelize.STRING,
    profile: sequelize.STRING,
    type: sequelize.ENUM('Individual', 'Contractor'),
});

module.exports = WorkPartner_Model;