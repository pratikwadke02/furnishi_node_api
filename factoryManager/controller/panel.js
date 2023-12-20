const All_Models = require('../../utils/allModels');

const addPanel = async (req, res) => {
    try {
        const { panel } = req.body;
        const newPanel = await All_Models.Panel_Model.create({
            panel
        });
        res.status(200).json({
            success: true,
            message: "Panel added successfully",
            data: newPanel
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const getAllPanel = async (req, res) => {
    try {
        const { id } = req.query;
        let whereClause = {};
        if (id) {
            whereClause = { id };
        }
        const allPanel = await All_Models.Panel_Model.findAll({
            where: whereClause
        });
        res.status(200).json({
            message: "All Panel",
            data: allPanel
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = {
    addPanel,
    getAllPanel
}

