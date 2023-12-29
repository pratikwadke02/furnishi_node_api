const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const SnaglistHistory_Model = dbConnection.define("snaglistHistory", {
});

module.exports = SnaglistHistory_Model;