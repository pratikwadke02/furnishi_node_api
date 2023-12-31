const All_Models = require('../../utils/allModels');

const addCarCass = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { carcass } = req.body;
        const newCarCass = await All_Models.Carcass_Model.create({
            carcass,
            userId
        });
        res.status(200).json({
            success: true,
            message: "Carcass added successfully",
            data: newCarCass
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const getAllCarCass = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { id } = req.query;
        let whereClause = { userId };
        if (id) {
            whereClause = { id , userId };
        }
        const allCarCass = await All_Models.Carcass_Model.findAll({
            where: whereClause
        });
        res.status(200).json({
            message: "All CarCass",
            data: allCarCass
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = {
    addCarCass,
    getAllCarCass
}
