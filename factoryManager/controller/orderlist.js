const All_Models = require("../../utils/allModels");

const addOrderlist = async (req, res) => {
  try {
    const userId = req.user.userId;
    const {
      receivedDate,
      targetDate,
      customerName,
      customerNumber,
      siteAddress,
      sitePincode,
      siteGoogleLocation,
      sourceId,
      sourceCordinatorId,
      customerCordinatorId,
      factoryCordinatorId,
      productId,
      locationId,
      noOfServices,
      area,
      orderValue,
      paymentReceived,
      statusId,
      carcassId,
      shutterId,
      designerId,
      siteSurveyorId,
      salesPersonId,
      factoryEngineerId,
      workStartTime,
      workEndTime,
      indentNumber,
      indentRelease,
      designClearance,
      accountClearance,
      shopDocuments,
      stockCheck,
      poPrepare,
      poApproval,
      poRelease,
      jobWorkDone,
      rawMaterialAvailable,
      otherMaterialAvailable,
      paintMaterialProduction,
      otherMaterialProduction,
      panelProduction,
      assembly,
      cleaning,
      packing,
      dispatch,
    } = req.body;
    const newOrderlist = await All_Models.Orderlist_Model.create({
      receivedDate,
      targetDate,
      customerName,
      customerNumber,
      siteAddress,
      sitePincode,
      siteGoogleLocation,
      sourceId,
      sourceCordinatorId,
      customerCordinatorId,
      factoryCordinatorId,
      productId,
      locationId,
      noOfServices,
      area,
      orderValue,
      paymentReceived,
      statusId,
      carcassId,
      shutterId,
      designerId,
      siteSurveyorId,
      salesPersonId,
      factoryEngineerId,
      workStartTime,
      workEndTime,
      indentNumber,
      indentRelease,
      designClearance,
      accountClearance,
      shopDocuments,
      stockCheck,
      poPrepare,
      poApproval,
      poRelease,
      jobWorkDone,
      rawMaterialAvailable,
      otherMaterialAvailable,
      paintMaterialProduction,
      otherMaterialProduction,
      panelProduction,
      assembly,
      cleaning,
      packing,
      dispatch,
      userId,
      orderlistStatus: "active",
    });
    res.status(200).json({
      success: true,
      message: "Orderlist added successfully",
      data: newOrderlist,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const getAllOrderlist = async (req, res) => {
    try{
        const {userId} = req.user;
        const {id, orderlistStatus} = req.query;
        let whereClause = {};
        if(id){
            whereClause = {id, userId};
        }
        if(orderlistStatus){
            whereClause = {orderlistStatus, userId};
        }
        const allOrderlist = await All_Models.Orderlist_Model.findAll({
            where: whereClause,
            include: [
                {
                    model: All_Models.Location_Model,
                    as: "location",
                    attributes: ["name", "pincode"]
                },
                {
                    model: All_Models.Cordinator_Model,
                    as: "customerCordinator",
                    attributes: ["name", "number"],
                    include: [
                        {
                            model: All_Models.CordinatorType,
                            as: "cordinatorType",
                            attributes: ["cordinatorType"]
                        }
                    ]
                },
                {
                    model: All_Models.Cordinator_Model,
                    as: "factoryCordinator",
                    attributes: ["name", "number"],
                    include: [
                        {
                            model: All_Models.CordinatorType,
                            as: "cordinatorType",
                            attributes: ["cordinatorType"]
                        }
                    ]
                },
                {
                    model: All_Models.Cordinator_Model,
                    as: "sourceCordinator",
                    attributes: ["name", "number"],
                    include: [
                        {
                            model: All_Models.CordinatorType,
                            as: "cordinatorType",
                            attributes: ["cordinatorType"]
                        }
                    ]
                },
                {
                    model: All_Models.Product_Model,
                    as: "product",
                    attributes: ["product"],
                    include: [
                        {
                            model: All_Models.Factory_Model,
                            as: "factory",
                            attributes: ["companyName"]
                        }
                    ]
                },
                {
                    model: All_Models.Status_Model,
                    as: "status",
                    attributes: ["status"]
                },
                {
                    model: All_Models.Carcass_Model,
                    as: "carcass",
                    attributes: ["carcass"]
                },
                {
                    model: All_Models.Shutter_Model,
                    as: "shutter",
                    attributes: ["shutter"]
                },
                {
                    model: All_Models.Designer_Model,
                    as: "designer",
                    attributes: ["designer"]
                },
                {
                    model: All_Models.SiteSurveryor_Model,
                    as: "siteSurveyor",
                    attributes: ["siteSurveyor"]
                },
                {
                    model: All_Models.SalesPerson_Model,
                    as: "salesPerson",
                    attributes: ["salesPerson"]
                },
                {
                    model: All_Models.FactoryEngineer_Model,
                    as: "factoryEngineer",
                    attributes: ["factoryEngineer"]
                }
            ]
        });
        res.status(200).json({
            message: "All Orderlist",
            data: allOrderlist
        })
    }catch(error){
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = {
  addOrderlist,
  getAllOrderlist,
};