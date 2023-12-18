const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const SnagSolution = dbConnection.define("snagSolution", {
    solution: sequelize.STRING,
})

module.exports = SnagSolution;