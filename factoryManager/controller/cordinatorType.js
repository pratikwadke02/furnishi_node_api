const All_Models = require('../../utils/allModels');

const addCordinatorType = async (req, res) => {
    try {
        const factoryManagerId = req.user.userId;
        const { cordinatorType } = req.body;
        const newCordinatorType = await All_Models.CordinatorType.create({
            cordinatorType,
            factoryManagerId
        });
        res.status(200).json({
            success: true,
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
        const factoryManagerId = req.user.userId;
        const{id}=req.query;
        let whereClause = {factoryManagerId};
        if(id){
            whereClause = {id, factoryManagerId};
        }
        const allCordinatorType = await All_Models.CordinatorType.findAll({
            where: whereClause
        });
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
