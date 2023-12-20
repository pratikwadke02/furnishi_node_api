const All_Models = require('../../utils/allModels');

const addSalesPerson = async (req, res) => {
    try {
        const { salesPerson } = req.body;
        const newSalesPerson = await All_Models.SalesPerson_Model.create({
            salesPerson
        });
        res.status(200).json({
            success: true,
            message: "SalesPerson added successfully",
            data: newSalesPerson
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const getAllSalesPerson = async (req, res) => {
    try {
        const { id } = req.query;
        let whereClause = {};
        if (id) {
            whereClause = { id };
        }
        const allSalesPerson = await All_Models.SalesPerson_Model.findAll({
            where: whereClause
        });
        res.status(200).json({
            message: "All SalesPerson",
            data: allSalesPerson
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = {
    addSalesPerson,
    getAllSalesPerson
}

