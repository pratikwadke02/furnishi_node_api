const All_Models = require('../../utils/allModels');

const addWorkType = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { workType } = req.body;
        const newWorkType = await All_Models.WorkType_Model.create({
            workType,
            userId
        });
        res.status(200).json({
            success: true,
            message: "WorkType added successfully",
            data: newWorkType
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const getAllWorkType = async (req, res) => {
    try {
        const userId = req.user.userId;
        const{id}=req.query;
        let whereClause = {userId};
        if(id){
            whereClause = {id, userId};
        }
        const allWorkType = await All_Models.WorkType_Model.findAll({
            where: whereClause
        });
        res.status(200).json({
            message: "All WorkType",
            data: allWorkType
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = {
    addWorkType,
    getAllWorkType
}