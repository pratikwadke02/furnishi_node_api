const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection');

const Factory_Model = dbConnection.define("factory", {
    companyName: sequelize.STRING,
    companyAddress: sequelize.STRING,
    contactNumber: sequelize.STRING,
    website: sequelize.STRING,
    gstNumber: sequelize.STRING,
    manager: sequelize.STRING,
    managerNumber: sequelize.STRING,
    managerEmailId: sequelize.STRING,
});

module.exports = Factory_Model
  