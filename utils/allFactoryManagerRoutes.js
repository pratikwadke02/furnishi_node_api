const AllEcom_Routes = (app) => {
    app.use(
        "/fm",
        require("../factoryManager/routes/source"),
        require("../factoryManager/routes/cordinatorType"),
        require("../factoryManager/routes/cordinator"),
        require("../factoryManager/routes/product"),
        require("../factoryManager/routes/factory"),
        require("../factoryManager/routes/status"),
        require("../factoryManager/routes/snag"),
    )
};

module.exports = AllEcom_Routes;