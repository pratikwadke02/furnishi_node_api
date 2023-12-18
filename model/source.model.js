const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const Source = dbConnection.define("source", {
    source: sequelize.STRING,
    firmName: sequelize.STRING,
    firmAddress: sequelize.STRING,
    emailId: sequelize.STRING,
    contactNumberOne: sequelize.STRING,
    contactNumberTwo: sequelize.STRING,
    cordinatorName: sequelize.STRING,
    cordinatorNumber: sequelize.STRING,
})

module.exports = Source;