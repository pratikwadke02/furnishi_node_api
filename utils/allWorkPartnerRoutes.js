const AllWorkPartner_Routes = (app) => {
    app.use(
        "/wp",
        require("../workPartner/routes/profile")
    )
};

module.exports = AllWorkPartner_Routes;