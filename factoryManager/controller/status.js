All_Models = require('../../utils/allModels');

const addStatus = async (req, res) => {
    try {
        const {status} = req.body;
        const newStatus = await All_Models.Status_Model.create({
            status
        });
        res.status(200).json({
            success: true,
            message: "Status added successfully",
            data: newStatus
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const getAllStatus = async (req, res) => {
    try {
        const {id} = req.query;
        let whereClause = {};
        if(id){
            whereClause = {id};
        }
        const allStatus = await All_Models.Status_Model.findAll({
            where: whereClause
        });
        res.status(200).json({
            message: "All Status",
            data: allStatus
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const addStatusAction = async (req, res) => {
    try {
        const {statusAction} = req.body;
        const newStatusAction = await All_Models.StatusAction_Model.create({
            statusAction
        });
        res.status(200).json({
            success: true,
            message: "StatusAction added successfully",
            data: newStatusAction
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const getAllStatusAction = async (req, res) => {
    try {
        const {id} = req.query;
        let whereClause = {};
        if(id){
            whereClause = {id};
        }
        const allStatusAction = await All_Models.StatusAction_Model.findAll({
            where: whereClause
        });
        res.status(200).json({
            message: "All StatusAction",
            data: allStatusAction
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = {
    addStatus,
    getAllStatus,
    addStatusAction,
    getAllStatusAction
}

        

