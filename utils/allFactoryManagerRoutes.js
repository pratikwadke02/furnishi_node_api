const {verifyRole} = require("../middleware/verifyFactoryManager");
const {tokenVerify} = require("../middleware/tokenVerify");
const AllFactoryManager_Routes = (app) => {
    app.use(tokenVerify);
    app.use(
        verifyRole, 
    )
    app.use(
        "/fm",
        require("../factoryManager/routes/source"),
        require("../factoryManager/routes/cordinatorType"),
        require("../factoryManager/routes/cordinator"),
        require("../factoryManager/routes/product"),
        require("../factoryManager/routes/factory"),
        require("../factoryManager/routes/status"),
        require("../factoryManager/routes/snag"),
        require("../factoryManager/routes/master"),
        require("../factoryManager/routes/location"),
        require("../factoryManager/routes/defaultRoleManager"),
        require("../factoryManager/routes/assistantUser"),
        require("../factoryManager/routes/enquiry"),
        require("../factoryManager/routes/order"),
        require("../factoryManager/routes/dashboard"),
        require("../factoryManager/routes/snaglist"),
        require("../factoryManager/routes/orderlist"),
        require("../factoryManager/routes/history"),
        require("../factoryManager/routes/assignOrder"),
        require("../factoryManager/routes/setting"),
    )
};

module.exports = AllFactoryManager_Routes;