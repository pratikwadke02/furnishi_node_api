const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const SnagIssue = dbConnection.define("snagIssue", {
    issue: sequelize.STRING,
})

module.exports = SnagIssue;