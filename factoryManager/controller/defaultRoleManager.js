const All_Models = require('../../utils/allModels');

const addDefaultRole = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { role , defaultControls } = req.body;
        const defaultAccess = await All_Models.DefaultPanelControl_Model.create({
            receivedDate: defaultControls.receiveDate,
            targetDate: defaultControls.targetDate,
            customerName: defaultControls.customerName,
            customerNumber: defaultControls.customerNumber,
            siteAddress: defaultControls.siteAddress,
            sitePincode: defaultControls.sitePincode,
            siteGoogleLocation: defaultControls.siteGoogleLocation,
            source: defaultControls.source,
            sourceCordinator: defaultControls.sourceCordinator,
            sourceCordinatorNumber: defaultControls.sourceCordinatorNumber,
            customerCordinator: defaultControls.customerCordinator,
            customerCordinatorNumber: defaultControls.customerCordinatorNumber,
            factoryCordinator: defaultControls.factoryCordinator,
            factoryCordinatorNumber: defaultControls.factoryCordinatorNumber,
            product: defaultControls.product,
            videosAndImages: defaultControls.videosAndImages,
            location: defaultControls.location,
            noOfServices: defaultControls.noOfServices,
            area: defaultControls.area,
            orderValue: defaultControls.orderValue,
            paymentReceived: defaultControls.paymentReceived,
            currentStatus: defaultControls.currentStatus,
            factoryEngineer: defaultControls.factoryEngineer,
            carcass: defaultControls.carcass,
            shutter: defaultControls.shutter,
            salesPerson: defaultControls.salesPerson,
            designer: defaultControls.designer,
            indentNumber: defaultControls.indentNumber,
            finalSiteSurveyor: defaultControls.finalSiteSurveyor,
            workStartTime: defaultControls.workStartTime,
            workEndTime: defaultControls.workEndTime,
            indentRelease: defaultControls.indentRelease,
            accountClearance: defaultControls.accountClearance,
            designClearance: defaultControls.designClearance,
            shopDocuments: defaultControls.shopDocuments,
            stockCheck: defaultControls.stockCheck,
            poPrepare: defaultControls.poPrepare,
            poRelease: defaultControls.poRelease,
            poApproval: defaultControls.poApproval,
            jobWorkDone: defaultControls.jobWorkDone,
            rawMaterialAvailable: defaultControls.rawMaterialAvailable,
            otherMaterialAvailable: defaultControls.otherMaterialAvailable,
            paintMaterialProduction: defaultControls.paintMaterialProduction,
            otherMaterialProduction: defaultControls.otherMaterialProduction,
            panelProduction: defaultControls.panelProduction,
            assembly: defaultControls.assembly,
            cleaning: defaultControls.cleaning,
            packing: defaultControls.packing,
            dispatch: defaultControls.dispatch,
        });
        const newDefaultRole = await All_Models.DefaultRoleManager_Model.create({
            role,
            defaultPanelControlId: defaultAccess.id,
            userId
        });
        res.status(200).json({
            success: true,
            message: "Default Role added successfully",
            data: newDefaultRole
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const getAllDefaultRoles = async (req, res) => {
    try {
        const userId = req.user.userId;
        const{id}=req.query;
        let whereClause = {userId};
        if(id){
            whereClause = {id, userId};
        }
        const allDefaultRoles = await All_Models.DefaultRoleManager_Model.findAll({
            where: whereClause,
            include: [
                {
                    model: All_Models.DefaultPanelControl_Model,
                    as: "defaultPanelControl"
                }
            ]
        });
        res.status(200).json({
            message: "All Default Roles",
            data: allDefaultRoles
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = {
    addDefaultRole,
    getAllDefaultRoles
}

