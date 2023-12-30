const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const  Enquiry_Model = dbConnection.define('enquiry', {
    targetDate: sequelize.DATE,
    sitePincode: sequelize.STRING,
    dispatch: sequelize.DATE,
    workStartTime: sequelize.TIME,
    workEndTime: sequelize.TIME,
    estimate: sequelize.STRING,
    deepClean: sequelize.BOOLEAN,
    liveStream: sequelize.BOOLEAN,
    installationRecording: sequelize.BOOLEAN,
    amc: sequelize.BOOLEAN,
    amcData: sequelize.STRING,
    enquiryType: sequelize.ENUM('installation', 'survey', 'complaint'),
    installationArea: sequelize.STRING,
    enquiryStatus: sequelize.ENUM('active', 'inactive', 'cancel'),
})

module.exports = Enquiry_Model;