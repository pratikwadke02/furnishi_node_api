const All_Models = require("../../utils/allModels");

const getAccess = async (req, res) => {
    try {
        const { userId, managerId} = req.user;
        
        const user = await All_Models.AssistantUser_Model.findOne({
            where: {
                id: userId
            },
            attributes: ["id", "name", "emailId", "mobileNumber", "panelControlId", "userId"],
            include: [
                {
                    model: All_Models.PanelControl_Model
                }
            ]
        });

        if (!user) {
            return res.status(401).json({ message: "Access denied" });
        }

        const managerDetails = await All_Models.User_Model.findOne({
            where: {
                id: managerId,
            },
            attributes: ["id", "firstName", "lastName", "mobileNumber", "emailId"]
        });

        return res.status(200).json({ user, managerDetails });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAccess
}