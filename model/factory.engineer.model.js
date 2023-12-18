const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const  FactoryEngineer_Model = dbConnection.define('factoryEngineer', {
    factoryEngineer: sequelize.STRING,
})

module.exports = FactoryEngineer_Model;