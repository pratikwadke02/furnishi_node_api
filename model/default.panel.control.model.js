const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const DefaultPanelControl_Model = dbConnection.define("defaultPanelControl", {
    receivedDate: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    targetDate: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    customerName: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    customerNumber: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    siteAddress: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    sitePincode: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    siteGoogleLocation: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    source: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    sourceCordinator: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    sourceCordinatorNumber: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    customerCordinator: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    customerCordinatorNumber: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    factoryCordinator: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    factoryCordinatorNumber: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    product: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    videosAndImages: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    location: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    noOfServices: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    area: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    orderValue: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    paymentReceived: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    currentStatus: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    factoryEngineer: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    carcass: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    shutter: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    salesPerson: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    designer: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    indentNumber: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    finalSiteSurveyor: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    workStartTime: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    workEndTime: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    indentRelease: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    accountClearance: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    designClearance: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    shopDocuments: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    stockCheck: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    poPrepare: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    poRelease: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    poApproval: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    jobWorkDone: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    rawMaterialAvailable: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    otherMaterialAvailable: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    paintMaterialProduction: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    otherMaterialProduction: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    panelProduction: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    assembly: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    cleaning: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    packing: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    dispatch: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
})

module.exports = DefaultPanelControl_Model;