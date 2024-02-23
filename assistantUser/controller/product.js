const All_Models = require("../../utils/allModels");

const getProducts = async (req, res) => {
    try {
        const {userId, managerId} = req.user;
        
        const products = await All_Models.Product_Model.findAll({
            where: {
                userId: managerId
            },
            include: [
                {
                    model: All_Models.Factory_Model,
                    attributes: ['companyName']
                }
            ]
        });
        return res.status(200).json({ products });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


module.exports = {
    getProducts
}
