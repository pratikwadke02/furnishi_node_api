const All_Models = require('../../utils/allModels');

const getStatus = async (req, res) => {
    try{
        const {userId, managerId} = req.user;
        const status = await All_Models.Status_Model.findAll({
            where: {
                userId: managerId
            }
        });
        if (!status) {
            return res.status(200).json({ message: "No status found" });
        }
        return res.status(200).json({ status });
    }catch(error){
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = {
    getStatus
}