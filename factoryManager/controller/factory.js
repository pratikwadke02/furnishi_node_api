const All_Models = require('../../utils/allModels');

const addFactory = async (req, res) => {
    try{
        const userId = req.user.userId;
        const {companyName, companyAddress, emailId, contactNumber, website, gstNumber, manager, managerNumber, managerEmailId} = req.body;
        const newFactory = await All_Models.Factory_Model.create({
            companyName,
            companyAddress,
            emailId,
            contactNumber,
            website,
            gstNumber,
            manager,
            managerNumber,
            managerEmailId,
            userId
        });
        res.status(200).json({
            success: true,
            message: "Factory added successfully",
            data: newFactory
        });
    }catch(error){
        res.status(500).json({
            error: error.message
        })
    }
}

const getAllFactory = async (req, res) => {
    try{
        const userId = req.user.userId;
        const{id}=req.query;
        let whereClause = {userId};
        if(id){
            whereClause = {id, userId};
        }
        const allFactory = await All_Models.Factory_Model.findAll({
            where: whereClause
        });
        res.status(200).json({
            message: "All Factory",
            data: allFactory
        });
    }catch(error){
        res.status(500).json({
            error: error.message
        })
    }
}

const addFactoryEngineer = async (req, res) => {
    try{
        const userId = req.user.userId;
        const {factoryEngineer} = req.body;
        const newFactoryEngineer = await All_Models.FactoryEngineer_Model.create({
            factoryEngineer,
            userId
        });
        res.status(200).json({
            success: true,
            message: "Factory Engineer added successfully",
            data: newFactoryEngineer
        });
    }
    catch(error){
        res.status(500).json({
            error: error.message
        })
    }
}

const getAllFactoryEngineer = async (req, res) => {
    try{
        const userId = req.user.userId;
        const{id}=req.query;
        let whereClause = {userId};
        if(id){
            whereClause = {id, userId};
        }
        const allFactoryEngineer = await All_Models.FactoryEngineer_Model.findAll({
            where: whereClause
        });
        res.status(200).json({
            message: "All Factory Engineer",
            data: allFactoryEngineer
        });
    }
    catch(error){
        res.status(500).json({
            error: error.message
        })
    }
}


module.exports = {
    addFactory,
    getAllFactory,
    addFactoryEngineer,
    getAllFactoryEngineer
}