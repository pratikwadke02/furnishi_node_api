All_Models = require('../../utils/allModels');

const addSource = async (req, res) => {
    try {
        const factoryManagerId = req.user.userId;
        const { source, firmName, firmAddress, emailId, contactNumberOne, contactNumberTwo } = req.body;
        const newSource = await All_Models.Source_Model.create({
            source,
            firmName,
            firmAddress,
            emailId,
            contactNumberOne,
            contactNumberTwo,
            factoryManagerId
        });
        res.status(200).json({
            success: true,
            message: "Source added successfully",
            data: newSource
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const getAllSource = async (req, res) => {
    try {
        const factoryManagerId = req.user.userId;
        const{id}=req.query;
        let whereClause = {factoryManagerId};
        if(id){
            whereClause = {id, factoryManagerId};
        }
        const allSource = await All_Models.Source_Model.findAll({
            where: whereClause
        });
        res.status(200).json({
            message: "All Source",
            data: allSource
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = {
    addSource,
    getAllSource
}

