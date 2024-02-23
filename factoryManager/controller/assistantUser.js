const All_Models = require('../../utils/allModels');

const addAssistantUser = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { defaultRoleManagerId, name, mobileNumber, emailId, panelControls } = req.body;
        const panelControl = await All_Models.PanelControl_Model.create({
            receivedDate: panelControls.receiveDate,
            targetDate: panelControls.targetDate,
            customerName: panelControls.customerName,
            customerNumber: panelControls.customerNumber,
            siteAddress: panelControls.siteAddress,
            sitePincode: panelControls.sitePincode,
            siteGoogleLocation: panelControls.siteGoogleLocation,
            source: panelControls.source,
            sourceCordinator: panelControls.sourceCordinator,
            sourceCordinatorNumber: panelControls.sourceCordinatorNumber,
            customerCordinator: panelControls.customerCordinator,
            customerCordinatorNumber: panelControls.customerCordinatorNumber,
            factoryCordinator: panelControls.factoryCordinator,
            factoryCordinatorNumber: panelControls.factoryCordinatorNumber,
            product: panelControls.product,
            videosAndImages: panelControls.videosAndImages,
            location: panelControls.location,
            noOfServices: panelControls.noOfServices,
            area: panelControls.area,
            orderValue: panelControls.orderValue,
            paymentReceived: panelControls.paymentReceived,
            currentStatus: panelControls.currentStatus,
            factoryEngineer: panelControls.factoryEngineer,
            carcass: panelControls.carcass,
            shutter: panelControls.shutter,
            salesPerson: panelControls.salesPerson,
            designer: panelControls.designer,
            indentNumber: panelControls.indentNumber,
            finalSiteSurveyor: panelControls.finalSiteSurveyor,
            workStartTime: panelControls.workStartTime,
            workEndTime: panelControls.workEndTime,
            indentRelease: panelControls.indentRelease,
            accountClearance: panelControls.accountClearance,
            designClearance: panelControls.designClearance,
            shopDocuments: panelControls.shopDocuments,
            stockCheck: panelControls.stockCheck,
            poPrepare: panelControls.poPrepare,
            poRelease: panelControls.poRelease,
            poApproval: panelControls.poApproval,
            jobWorkDone: panelControls.jobWorkDone,
            rawMaterialAvailable: panelControls.rawMaterialAvailable,
            otherMaterialAvailable: panelControls.otherMaterialAvailable,
            paintMaterialProduction: panelControls.paintMaterialProduction,
            otherMaterialProduction: panelControls.otherMaterialProduction,
            panelProduction: panelControls.panelProduction,
            assembly: panelControls.assembly,
            cleaning: panelControls.cleaning,
            packing: panelControls.packing,
            dispatch: panelControls.dispatch,
        });
        const newAssistantUser = await All_Models.AssistantUser_Model.create({
            defaultRoleManagerId,
            name,
            mobileNumber,
            emailId,
            panelControlId: panelControl.id,
            userId
        });
        const ManagerSettings = await All_Models.Setting_Model.findOne({
            where: { userId }
        });
        //copy the settings of the manager to the assistant user
        const newSettings = await All_Models.Setting_Model.create({
            factoryName: ManagerSettings.factoryName,
            logo: ManagerSettings.logo,
            color: ManagerSettings.color,
            fontSize: ManagerSettings.fontSize,
            notification: ManagerSettings.notification,
            assistantUserId: newAssistantUser.id,
            userId
        });
        
        res.status(200).json({
            success: true,
            message: "Assistant User added successfully",
            data: newAssistantUser
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const getAllAssistantUser = async (req, res) => {
    try{
        const userId = req.user.userId;
        const{id}=req.query;
        let whereClause = {userId};
        if(id){
            whereClause = {id, userId};
        }
        const allAssistantUser = await All_Models.AssistantUser_Model.findAll({
            where: whereClause,
            include: [
                {
                    model: All_Models.DefaultRoleManager_Model,
                    as: "defaultRoleManager",
                },
                {
                    model: All_Models.PanelControl_Model,
                    as: "panelControl"
                }
            ]
        });
        res.status(200).json({
            message: "All Assistant User",
            data: allAssistantUser
        });
    }
    catch(error){
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = {
    addAssistantUser,
    getAllAssistantUser
}
