const All_Models = require("../../utils/allModels");

const getLocation = async (req, res) => {
    try{
        const {userId, managerId} = req.user;
        const locations = await All_Models.Location_Model.findAll({
            where: {
                userId: managerId
            }
        });
        if (!locations) {
            return res.status(200).json({ message: "No location found" });
        }
        return res.status(200).json({ locations });
    }catch(error){  
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = {
    getLocation
}