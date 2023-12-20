const All_Models = require('../../utils/allModels');

const addProduct = async (req, res) => {
    try{
        const factoryManagerId = req.user.userId;
        const {productName, factoryId } = req.body;
        const newProduct = await All_Models.Product_Model.create({
            product:productName,
            factoryId:factoryId,
            factoryManagerId
        });
        res.status(200).json({
            success: true,
            message: "Product added successfully",
            data: newProduct
        });
    }catch(error){
        res.status(500).json({
            error: error.message
        })
    }
}

const getAllProduct = async (req, res) => {
    try{
        const factoryManagerId = req.user.userId;
        const{id}=req.query;
        let whereClause = {factoryManagerId};
        if(id){
            whereClause = {id, factoryManagerId};
        }
        const allProduct = await All_Models.Product_Model.findAll({
            where: whereClause,
            include: [
                {
                    model: All_Models.Factory_Model,
                    attributes: ['companyName']
                }
            ]
        });
        res.status(200).json({
            message: "All Product",
            data: allProduct
        });
    }catch(error){
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = {
    addProduct,
    getAllProduct
}
