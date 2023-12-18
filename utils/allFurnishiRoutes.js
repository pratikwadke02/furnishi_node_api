const AllEcom_Routes = (app) => {
    app.use(
        "/furnishi",
        require("../furnishi/routes/user")
    )
};

module.exports = AllEcom_Routes;