const { tokenVerify } = require("../middleware/tokenVerify");

const AllAssistantUser_Routes = (app) => {
    app.use(tokenVerify);
    app.use(
        "/au",
        require("../assistantUser/routes/access"),
        require("../assistantUser/routes/order"),
        require("../assistantUser/routes/location"),
        require("../assistantUser/routes/settings"),
        require("../assistantUser/routes/cordinator"),
        require("../assistantUser/routes/product"),
        require("../assistantUser/routes/dashboard"),
        require("../assistantUser/routes/status"),
    )
};

module.exports = AllAssistantUser_Routes;