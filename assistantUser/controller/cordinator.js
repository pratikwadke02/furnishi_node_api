const getAllCordinator = async (req, res) => {
    try {
        const {userId, managerId} = req.user;
        console.log(req.user);
        const{id, cordinatorTypeId}=req.query;
        let whereClause = {
            userId: managerId
        };
        if(id){
            whereClause = {
                id,
                userId: managerId
            };
        }
        if(cordinatorTypeId){
            whereClause = {
                cordinatorTypeId,
                userId: managerId
            };
        }
        const allCordinator = await All_Models.Cordinator_Model.findAll({
            where: whereClause,
            include:[
                {
                    model: All_Models.CordinatorType,
                    required: true
                },
                {
                    model: All_Models.Source_Model,
                    required: true
                }
            ]
        });
        res.status(200).json({
            message: "All Cordinator",
            data: allCordinator
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = {
    getAllCordinator
}