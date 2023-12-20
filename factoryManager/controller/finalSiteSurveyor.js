const All_Models = require('../../utils/allModels');

const addFinalSiteSurveyor = async (req, res) => {
    try {
        const { siteSurveyor } = req.body;
        const newFinalSiteSurveyor = await All_Models.SiteSurveryor_Model.create({
            siteSurveyor
        });
        res.status(200).json({
            success: true,
            message: "Final Site Surveyor added successfully",
            data: newFinalSiteSurveyor
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const getAllFinalSiteSurveyor = async (req, res) => {
    try {
        const { id } = req.query;
        let whereClause = {};
        if (id) {
            whereClause = { id };
        }
        const allFinalSiteSurveyor = await All_Models.SiteSurveryor_Model.findAll({
            where: whereClause
        });
        res.status(200).json({
            message: "All Final Site Surveyor",
            data: allFinalSiteSurveyor
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = {
    addFinalSiteSurveyor,
    getAllFinalSiteSurveyor
}
