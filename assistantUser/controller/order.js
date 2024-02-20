const All_Models = require("../../utils/allModels");

const getOrder = async (req, res) => {
    try{

    }catch(error){
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getOrder
}