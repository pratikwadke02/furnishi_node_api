All_Models = require('../../utils/allModels');

const addSnagAction = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { action } = req.body;
        const newSnagAction = await All_Models.SnagAction_Model.create({
            action,
            userId
        });
        res.status(200).json({
            success: true,
            message: "SnagAction added successfully",
            data: newSnagAction
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const getAllSnagAction = async (req, res) => {
    try {
        const userId = req.user.userId;
        const{id}=req.query;
        let whereClause = {userId};
        if(id){
            whereClause = {id, userId};
        }
        const allSnagAction = await All_Models.SnagAction_Model.findAll({
            where: whereClause
        });
        res.status(200).json({
            message: "All SnagAction",
            data: allSnagAction
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const addSnagIssue = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { issue } = req.body;
        const newSnagIssue = await All_Models.SnagIssue_Model.create({
            issue,
            userId
        });
        res.status(200).json({
            success: true,
            message: "SnagIssue added successfully",
            data: newSnagIssue
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const getAllSnagIssue = async (req, res) => {
    try {
        const userId = req.user.userId;
        const{id}=req.query;
        let whereClause = {userId};
        if(id){
            whereClause = {id, userId};
        }
        const allSnagIssue = await All_Models.SnagIssue_Model.findAll({
            where: whereClause
        });
        res.status(200).json({
            message: "All SnagIssue",
            data: allSnagIssue
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const addSnagCost = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { cost } = req.body;
        const newSnagCost = await All_Models.SnagCost_Model.create({
            cost,
            userId
        });
        res.status(200).json({
            success: true,
            message: "SnagCost added successfully",
            data: newSnagCost
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const getAllSnagCost = async (req, res) => {
    try {
        const userId = req.user.userId;
        const{id}=req.query;
        let whereClause = {userId};
        if(id){
            whereClause = {id, userId};
        }
        const allSnagCost = await All_Models.SnagCost_Model.findAll({
            where: whereClause
        });
        res.status(200).json({
            message: "All SnagCost",
            data: allSnagCost
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const addSnagSolution = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { solution } = req.body;
        const newSnagSolution = await All_Models.SnagSolution_Model.create({
            solution,
            userId
        });
        res.status(200).json({
            success: true,
            message: "SnagSolution added successfully",
            data: newSnagSolution
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const getAllSnagSolution = async (req, res) => {
    try {
        const userId = req.user.userId;
        const{id}=req.query;
        let whereClause = {userId};
        if(id){
            whereClause = {id, userId};
        }
        const allSnagSolution = await All_Models.SnagSolution_Model.findAll({
            where: whereClause
        });
        res.status(200).json({
            message: "All SnagSolution",
            data: allSnagSolution
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = {
    addSnagAction,
    getAllSnagAction,
    addSnagIssue,
    getAllSnagIssue,
    addSnagCost,
    getAllSnagCost,
    addSnagSolution,
    getAllSnagSolution
}
