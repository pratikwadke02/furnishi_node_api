const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const Panel_Model = dbConnection.define("panel", {
    panel: sequelize.STRING,
})

module.exports = Panel_Model;