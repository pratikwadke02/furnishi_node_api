const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const Setting_Model = dbConnection.define("setting", {
    factoryName: {
        type: sequelize.STRING,
        defaultValue: "Factory Manager"
    },
    logo: {
        type: sequelize.STRING,
        defaultValue: null
    },
    colors: {
        type: sequelize.STRING,
        defaultValue: null
    },
    fontSize: {
        type: sequelize.STRING,
        defaultValue: null
    },
    notification: {
        type: sequelize.BOOLEAN,
        defaultValue: true
    }
})

module.exports = Setting_Model;