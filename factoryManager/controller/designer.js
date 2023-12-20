const All_Models = require('../../utils/allModels');

const addDesigner = async (req, res) => {
    try {
        const { designer } = req.body;
        const newDesigner = await All_Models.Designer_Model.create({
            designer
        });
        res.status(200).json({
            success: true,
            message: "Designer added successfully",
            data: newDesigner
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const getAllDesigner = async (req, res) => {
    try {
        const { id } = req.query;
        let whereClause = {};
        if (id) {
            whereClause = { id };
        }
        const allDesigner = await All_Models.Designer_Model.findAll({
            where: whereClause
        });
        res.status(200).json({
            message: "All Designer",
            data: allDesigner
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = {
    addDesigner,
    getAllDesigner
}
