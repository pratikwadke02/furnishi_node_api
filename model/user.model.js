const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const User_Model = dbConnection.define('user', {
    firstName: sequelize.STRING,
    lastName: sequelize.STRING,
    email: sequelize.STRING,
    password: sequelize.STRING,
});

module.exports = User_Model;
  