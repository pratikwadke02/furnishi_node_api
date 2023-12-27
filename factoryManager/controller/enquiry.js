const All_Models = require("../../utils/allModels");

exports.addEnquiry = async (req, res) => {
  try {
    const {
      targetDate,
      sitePincode,
      statusId,
      carcassId,
      shutterId,
      dispatch,
      workStartTime,
      workEndTime,
      estimate,
      statusActionId,
      deepClean,
      liveStream,
      installationRecording,
      amc,
      amcData,
      enquiryType,
      installationArea,
      productId,
    } = req.body;
    const { userId } = req.user;
    const newEnquiry = await All_Models.Enquiry_Model.create({
      targetDate,
      sitePincode,
      statusId,
      carcassId,
      shutterId,
      dispatch,
      workStartTime,
      workEndTime,
      estimate,
      statusActionId,
      deepClean,
      liveStream,
      installationRecording,
      amc,
      amcData,
      enquiryType,
      installationArea,
      productId,
      userId,
      enquiryStatus: "active",
    });
    return res.status(200).json({
      success: true,
      message: "Enquiry added successfully",
      enquiry: newEnquiry,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getAllEnquiry = async (req, res) => {
  try {
    const { userId } = req.user;
    const allEnquiry = await All_Models.Enquiry_Model.findAll({
      where: {
        userId,
      },
      include: [
        {
          model: All_Models.Status_Model,
          as: "status",
          attributes: ["status"],
        },
        {
          model: All_Models.Carcass_Model,
          as: "carcass",
          attributes: ["carcass"],
        },
        {
          model: All_Models.Shutter_Model,
          as: "shutter",
          attributes: ["shutter"],
        },
        {
          model: All_Models.StatusAction_Model,
          as: "statusAction",
          attributes: ["statusAction"],
        },
        {
          model: All_Models.Product_Model,
          as: "product",
          attributes: ["product"],
          include: [
            {
              model: All_Models.Factory_Model,
              as: "factory",
              attributes: ["companyName"],
            },
          ],
        },
      ],
    });
    return res.status(200).json({
      success: true,
      message: "All enquiry fetched successfully",
      enquiry: allEnquiry,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getEnquiryCount = async (req, res) => {
  try {
    const { userId } = req.user;
    const enquiryCount = await All_Models.Enquiry_Model.count({
      where: {
        userId,
        enquiryStatus: "active",
      },
    });
    return res.status(200).json({
      success: true,
      message: "Enquiry count fetched successfully",
      enquiryCount,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
