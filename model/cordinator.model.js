const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const Cordinator_Model = dbConnection.define("cordinator", {
    firmName: sequelize.STRING,
    firmAddress: sequelize.STRING,
    name: sequelize.STRING,
    number: sequelize.STRING,
    emailId: sequelize.STRING,
})

module.exports = Cordinator_Model;
