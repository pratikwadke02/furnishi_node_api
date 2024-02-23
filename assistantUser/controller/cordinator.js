const getAllCordinator = async (req, res) => {
    try {
        const {userId, managerId} = req.user;
        const{id, cordinatorTypeId}=req.query;
        let whereClause = {managerId};
        if(id){
            whereClause = {id, managerId};
        }
        if(cordinatorTypeId){
            whereClause = {managerId, cordinatorTypeId};
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
        res.status(500).json({
            error: error.message
        })
    }
}