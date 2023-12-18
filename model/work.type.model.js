const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const  WorkType = dbConnection.define('workType', {
    workType: sequelize.STRING,
});

module.exports = WorkType;