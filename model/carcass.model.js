const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const  Carcass_Model = dbConnection.define('carcass', {
    carcass: sequelize.STRING,
})

module.exports = Carcass_Model;