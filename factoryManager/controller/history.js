const All_Models = require('../../utils/allModels');

const getOrderHistroy = async (req, res) => {
    try{
        const {orderId} = req.query;
        let whereClause = {};
        if(orderId){
            whereClause = {
                orderId
            };
        }else{
            res.status(400).json({
                message: "Please provide orderId"
            });
        }
        const orderHistory = await All_Models.OrderHistory_Model.findAll({
            where: whereClause
        });
        res.status(200).json({
            message: "Order History",
            data: orderHistory
        });
    }catch(error){
        res.status(500).json({
            error: error.message
        })
    }
}

const getSnaglistHistory = async (req, res) => {
    try{
        const {snaglistId} = req.query;
        let whereClause = {};
        if(snaglistId){
            whereClause = {
                snaglistId
            }
        }else{
            res.status(400).json({
                message: "Please provide snaglistId"
            });
        }
        const snaglistHistory = await All_Models.SnaglistHistory_Model.findAll({
            where: whereClause
        });
        res.status(200).json({
            message: "Snaglist History",
            data: snaglistHistory
        });
    }catch(error){
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = {
    getOrderHistroy,
    getSnaglistHistory
}