const All_Models = require('../../utils/allModels');

const addShutter = async (req, res) => {
    try {
        const { shutter } = req.body;
        const newShutter = await All_Models.Shutter_Model.create({
            shutter
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
        const { id } = req.query;
        let whereClause = {};
        if (id) {
            whereClause = { id };
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
