const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const Designer_Model = dbConnection.define("designer", {
    designer: sequelize.STRING
})

module.exports = Designer_Model;