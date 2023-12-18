const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const  SiteSurveryor_Model = dbConnection.define('siteSurveyor', {
    siteSurveyor: sequelize.STRING,
})

module.exports = SiteSurveryor_Model;