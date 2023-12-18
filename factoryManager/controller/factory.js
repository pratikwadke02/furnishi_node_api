const All_Models = require('../../utils/allModels');

const addFactory = async (req, res) => {
    try{
        const {companyName, companyAddress, emailId, contactNumber, website, gstNumber, manager, managerNumber, managerEmailId} = req.body;
        const newFactory = await All_Models.Factory.create({
            companyName,
            companyAddress,
            emailId,
            contactNumber,
            website,
            gstNumber,
            manager,
            managerNumber,
            managerEmailId
        });
        res.status(200).json({
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
        const allFactory = await All_Models.Factory.findAll();
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

module.exports = {
    addFactory,
    getAllFactory
}