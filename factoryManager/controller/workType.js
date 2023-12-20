const All_Models = require('../../utils/allModels');

const addWorkType = async (req, res) => {
    try {
        const { workType } = req.body;
        const newWorkType = await All_Models.WorkType_Model.create({
            workType
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
        const { id } = req.query;
        let whereClause = {};
        if (id) {
            whereClause = { id };
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