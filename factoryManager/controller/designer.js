const All_Models = require('../../utils/allModels');

const addDesigner = async (req, res) => {
    try {
        const factoryManagerId = req.user.userId;
        const { designer } = req.body;
        const newDesigner = await All_Models.Designer_Model.create({
            designer,
            factoryManagerId
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
        const factoryManagerId = req.user.userId;
        const{id}=req.query;
        let whereClause = {factoryManagerId};
        if(id){
            whereClause = {id, factoryManagerId};
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
