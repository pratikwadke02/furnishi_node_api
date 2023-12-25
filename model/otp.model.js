const Sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const Otp_Model = dbConnection.define('otp', {
    mobileNumber: Sequelize.STRING(15),
    emailId: Sequelize.STRING,
    role: Sequelize.STRING,
    otp: Sequelize.INTEGER,
    expiryTime: Sequelize.DATE,
})

module.exports = Otp_Model