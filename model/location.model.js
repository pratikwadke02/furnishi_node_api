const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const Location_Model = dbConnection.define("location", {
    pincode: sequelize.STRING,
    name: sequelize.STRING,
})

module.exports = Location_Model;