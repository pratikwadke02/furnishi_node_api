const All_Models = require('../../utils/allModels');

const addPlanner = async (req, res) => {
    try {
        const { planner } = req.body;
        const newPlanner = await All_Models.Planner_Model.create({
            planner
        });
        res.status(200).json({
            success: true,
            message: "Planner added successfully",
            data: newPlanner
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const getAllPlanner = async (req, res) => {
    try {
        const { id } = req.query;
        let whereClause = {};
        if (id) {
            whereClause = { id };
        }
        const allPlanner = await All_Models.Planner_Model.findAll({
            where: whereClause
        });
        res.status(200).json({
            message: "All Planner",
            data: allPlanner
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = {
    addPlanner,
    getAllPlanner
}
