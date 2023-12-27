const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const  Snaglist_Model = dbConnection.define('snaglist', {
    name: sequelize.STRING,
    mobileNumber: sequelize.STRING,
    address: sequelize.STRING,
    saleValue: sequelize.STRING,
    materialValue: sequelize.STRING,
    faceArea: sequelize.STRING,
    targetStartDate: sequelize.DATE,
    targetEndDate: sequelize.DATE,
    startDate: sequelize.DATE,
    endDate: sequelize.DATE,
    reason: sequelize.STRING,
    attachment: sequelize.STRING,
    photo: sequelize.STRING,
    video: sequelize.STRING,
    totalService: sequelize.STRING,
    serviceDone: sequelize.STRING,
    servicePending: sequelize.STRING,
    serviceCalender: sequelize.STRING,
    estimatedCost: sequelize.STRING,
    actualCost: sequelize.STRING,
    expenseTillDate: sequelize.STRING,
    estimatedQuoteAfterDiscount: sequelize.STRING,
})

module.exports = Snaglist_Model;