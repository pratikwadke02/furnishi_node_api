const All_Models = require('../../utils/allModels');

const addProduct = async (req, res) => {
    try{
        const {productName} = req.body;
        const newProduct = await All_Models.Product_Model.create({
            product:productName
        });
        res.status(200).json({
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
        const{id}=req.query;
        let whereClause = {};
        if(id){
            whereClause = {id};
        }
        const allProduct = await All_Models.Product_Model.findAll({
            where: whereClause
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
