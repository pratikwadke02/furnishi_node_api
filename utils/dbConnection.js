const Sequelize = require('sequelize')

const dbConnection = new Sequelize(process.env.DB_NAME, process.env.DB_USER_NAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    logging: false,
});

const authenticateDbConnection = async () => {
    try {
        await dbConnection.authenticate();
        console.log("Connection has been established.");

    } catch (error) {
        console.log("Unable to connect the Databse", error);
    }
}

authenticateDbConnection();


module.exports = dbConnection