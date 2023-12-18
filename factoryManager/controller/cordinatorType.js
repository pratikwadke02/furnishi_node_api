const All_Models = require('../../utils/allModels');

const addCordinatorType = async (req, res) => {
    try {
        const { cordinatorType } = req.body;
        const newCordinatorType = await All_Models.CordinatorType.create({
            cordinatorType
        });
        res.status(200).json({
            message: "CordinatorType added successfully",
            data: newCordinatorType
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const getAllCordinatorType = async (req, res) => {
    try {
        const allCordinatorType = await All_Models.CordinatorType.findAll();
        res.status(200).json({
            message: "All CordinatorType",
            data: allCordinatorType
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = {
    addCordinatorType,
    getAllCordinatorType
}
