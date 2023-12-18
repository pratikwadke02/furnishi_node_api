All_Models = require('../../utils/allModels');

const addSource = async (req, res) => {
    try {
        const { source, firmName, firmAddress, emailId, contactNumberOne, contactNumberTwo, cordinatorName, cordinatorNumber } = req.body;
        const newSource = await All_Models.Source_Model.create({
            source,
            firmName,
            firmAddress,
            emailId,
            contactNumberOne,
            contactNumberTwo,
            cordinatorName,
            cordinatorNumber
        });
        res.status(200).json({
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
        const allSource = await All_Models.Source_Model.findAll();
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

