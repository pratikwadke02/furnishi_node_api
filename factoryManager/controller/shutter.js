const All_Models = require('../../utils/allModels');

const addShutter = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { shutter } = req.body;
        const newShutter = await All_Models.Shutter_Model.create({
            shutter,
            userId
        });
        res.status(200).json({
            success: true,
            message: "Shutter added successfully",
            data: newShutter
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const getAllShutter = async (req, res) => {
    try {
        const userId = req.user.userId;
        const{id}=req.query;
        let whereClause = {userId};
        if(id){
            whereClause = {id, userId};
        }
        const allShutter = await All_Models.Shutter_Model.findAll({
            where: whereClause
        });
        res.status(200).json({
            message: "All Shutter",
            data: allShutter
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = {
    addShutter,
    getAllShutter
}
