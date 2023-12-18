const sequelize = require("sequelize");
const dbConnection = require("../utils/dbConnection");

const FurnishiUser_Model = dbConnection.define("furnishiUser", {
  firstName: sequelize.STRING,
  lastName: sequelize.STRING,
  email: sequelize.STRING,
  password: sequelize.STRING,
});

module.exports = FurnishiUser_Model;
