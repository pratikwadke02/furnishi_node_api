const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const Shutter_Model = dbConnection.define("shutter", {
    shutter: sequelize.STRING,
})

module.exports = Shutter_Model;