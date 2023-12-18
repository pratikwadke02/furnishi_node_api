const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const Planner_Model = dbConnection.define("planner", {
    planner: sequelize.STRING,
})

module.exports = Planner_Model;