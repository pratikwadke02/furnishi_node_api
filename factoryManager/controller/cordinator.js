const All_Models = require('../../utils/allModels');

const addCordinator = async (req, res) => {
    try {
        const { name, number, emailId, cordinatorTypeId, sourceId } = req.body;
        const newCordinator = await All_Models.Cordinator_Model.create({
            name,
            number,
            emailId,
            cordinatorTypeId,
            sourceId
        });
        res.status(200).json({
            message: "Cordinator added successfully",
            data: newCordinator
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const getAllCordinator = async (req, res) => {
    try {
        const{id}=req.query;
        let whereClause = {};
        if(id){
            whereClause = {id};
        }
        const allCordinator = await All_Models.Cordinator_Model.findAll({
            where: whereClause,
            include:[
                {
                    model: All_Models.CordinatorType,
                    required: true
                },
                {
                    model: All_Models.Source_Model,
                    required: true
                }
            ]
        });
        res.status(200).json({
            message: "All Cordinator",
            data: allCordinator
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = {
    addCordinator,
    getAllCordinator
}