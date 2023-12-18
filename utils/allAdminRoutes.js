const AllAdmin_Routes = (app) => {
    app.use(
        "/admin",
        require("../admin/routes/admin")
    )
};

module.exports = AllAdmin_Routes;