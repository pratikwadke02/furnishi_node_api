const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const Order_Model = dbConnection.define("order", {
    name: sequelize.STRING,
    mobileNumber: sequelize.STRING,
    address: sequelize.STRING,
    saleValue: sequelize.STRING,
    materialValue: sequelize.STRING,
    faceArea: sequelize.STRING,
    TargetStartDate: sequelize.DATE,
    TargetEndDate: sequelize.DATE,
    startDate: sequelize.DATE,
    endDate: sequelize.DATE,
    totalService: sequelize.STRING,
    serviceDone: sequelize.STRING,
    servicePending: sequelize.STRING,
    serviceCalender: sequelize.STRING,
    estimatedCost: sequelize.STRING,
    actualCost: sequelize.STRING,
    attachment: sequelize.STRING,
    expenseTillDate: sequelize.STRING,
    estimatedQuoteAfterDiscount: sequelize.STRING,
    orderStatus: sequelize.ENUM('open', 'close', 'cancel'),
})

module.exports = Order_Model;