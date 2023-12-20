const AllFurnishi_Routes = (app) => {
    app.use(
        "/furnishi",
        require("../routes/user"),
    )
};

module.exports = AllFurnishi_Routes;