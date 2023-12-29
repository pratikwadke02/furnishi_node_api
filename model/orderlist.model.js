const sequelize = require("sequelize");
const dbConnection = require("../utils/dbConnection");

const Orderlist_Model = dbConnection.define("orderlist", {
    receivedDate: sequelize.DATE,
    targetDate: sequelize.DATE,
    customerName: sequelize.STRING,
    customerNumber: sequelize.STRING,
    siteAddress: sequelize.STRING,
    sitePincode: sequelize.STRING,
    siteGoogleLocation: sequelize.STRING,
    noOfServices: sequelize.STRING,
    area: sequelize.STRING,
    orderValue: sequelize.STRING,
    paymentReceived: sequelize.STRING,
    workStartTime: sequelize.TIME,
    workEndTime: sequelize.TIME,
    indentNumber: sequelize.STRING,
    indentRelease: sequelize.DATE,
    designClearance: sequelize.DATE,
    accountClearance: sequelize.DATE,
    shopDocuments: sequelize.DATE,
    stockCheck: sequelize.DATE,
    poPrepare: sequelize.DATE,
    poRelease: sequelize.DATE,
    poApproval: sequelize.DATE,
    jobWorkDone: sequelize.DATE,
    rawMaterialAvailable: sequelize.DATE,
    otherMaterialAvailable: sequelize.DATE,
    paintMaterialProduction: sequelize.DATE,
    otherMaterialProduction: sequelize.DATE,
    panelProduction: sequelize.DATE,
    assembly: sequelize.DATE,
    cleaning: sequelize.DATE,
    packing: sequelize.DATE,
    dispatch: sequelize.DATE,
    orderlistStatus: sequelize.ENUM("active", "inactive"),
});

module.exports = Orderlist_Model;