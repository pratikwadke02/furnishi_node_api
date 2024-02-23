const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const ContractorIndividual_Model = dbConnection.define("contractorIndividual", {
})

module.exports = ContractorIndividual_Model;