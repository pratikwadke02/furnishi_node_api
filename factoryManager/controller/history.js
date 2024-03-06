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
        let orderHistory = await All_Models.OrderHistory_Model.findAll({
            where: whereClause,
        });
        //find all the user from updatedById column
        const updatedBy = orderHistory.map(order => order.updatedById);
        const users = await All_Models.User_Model.findAll({
            where: {
                id: updatedBy
            }
        });
        //map the user with orderHistory
        orderHistory.forEach(order => {
            let user = users.find(user => user.id === order.updatedById);
            order.dataValues.updatedBy = user;
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