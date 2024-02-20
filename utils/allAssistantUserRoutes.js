const { tokenVerify } = require("../middleware/tokenVerify");

const AllAssistantUser_Routes = (app) => {
    app.use(tokenVerify);
    app.use(
        "/au",
        require("../assistantUser/routes/access"),
        require("../assistantUser/routes/order"),
    )
};

module.exports = AllAssistantUser_Routes;