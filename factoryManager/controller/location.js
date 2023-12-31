const All_Models = require('../../utils/allModels');

const addLocation = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { pincode, name } = req.body;
        const newLocation = await All_Models.Location_Model.create({
            pincode,
            name,
            userId
        });
        res.status(200).json({
            success: true,
            message: "Location added successfully",
            data: newLocation
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }

}

const getAllLocation = async (req, res) => {
    try {
        const userId = req.user.userId;
        const{id}=req.query;
        let whereClause = {userId};
        if(id){
            whereClause = {id, userId};
        }
        const allLocation = await All_Models.Location_Model.findAll({
            where: whereClause
        });
        res.status(200).json({
            message: "All Location",
            data: allLocation
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = {
    addLocation,
    getAllLocation
}
