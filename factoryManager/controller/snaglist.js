const All_Models = require("../../utils/allModels");
const path = require("path");

async function saveFile(file, uploadPath) {
  return new Promise((resolve, reject) => {
    file.mv(uploadPath, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(uploadPath);
      }
    });
  });
}

const addSnaglist = async (req, res) => {
  try {
    if (!req.files) {
      return res.status(400).json({
        error: "No files selected",
      });
    }
    const files = req.files;
    const { attachmentFile, photoFile, videoFile } = files;
    console.log(attachmentFile, photoFile, videoFile);
    let attachment;
    let photo;
    let video;
    const attachmenUploadPath = path.join(
      "../../private/fm/snaglist" + attachmentFile.name
    );
    await saveFile(attachmentFile, attachmenUploadPath);
    const photoUploadPath = path.join(
      "../../private/fm/snaglist" + photoFile.name
    );
    await saveFile(photoFile, photoUploadPath);
    const videoUploadPath = path.join(
      "../../private/fm/snaglist" + videoFile.name
    );
    await saveFile(videoFile, videoUploadPath);
    attachment = path.join("/fm/snaglist", attachmentFile.name);
    photo = path.join("/fm/snaglist", photoFile.name);
    video = path.join("/fm/snaglist", videoFile.name);

    const { userId } = req.user;
    const {
      name,
      mobileNumber,
      address,
      locationId,
      customerCordinatorId,
      sourceCordinatorId,
      factoryCordinatorId,
      productId,
      saleValue,
      materialValue,
      faceArea,
      targetStartDate,
      targetEndDate,
      startDate,
      endDate,
      snagIssueId,
      snagSolutionId,
      snagActionId,
      snagCostId,
      reason,
      totalService,
      serviceDone,
      servicePending,
      serviceCalender,
      estimatedCost,
      actualCost,
      expenseTillDate,
      statusId,
      estimatedQuoteAfterDiscount,
    } = req.body;
    const newSnaglist = await All_Models.Snaglist_Model.create({
      name,
      mobileNumber,
      address,
      locationId,
      customerCordinatorId,
      sourceCordinatorId,
      factoryCordinatorId,
      productId,
      saleValue,
      materialValue,
      faceArea,
      targetStartDate,
      targetEndDate,
      startDate,
      endDate,
      snagIssueId,
      snagSolutionId,
      snagActionId,
      snagCostId,
      reason,
      totalService,
      serviceDone,
      servicePending,
      serviceCalender,
      estimatedCost,
      actualCost,
      expenseTillDate,
      statusId,
      estimatedQuoteAfterDiscount,
      attachment,
      photo,
      video,
      userId,
      snaglistStatus: "open",
    });
    if (newSnaglist) {
      const snaglistHistory = await All_Models.SnaglistHistory_Model.create({
        snaglistId: newSnaglist.id,
        updatedById: userId,
      });
    }
    res.status(200).json({
      success: true,
      message: "Snaglist added successfully",
      data: newSnaglist,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.message,
    });
  }
};

const getAllSnaglist = async (req, res) => {
  try {
    const { userId } = req.user;
    const { id, snaglistStatus } = req.query;
    let whereClause = {};
    if (id) {
      whereClause = { id, userId };
    }
    if (snaglistStatus) {
      whereClause = { snaglistStatus, userId };
    }
    const allSnaglist = await All_Models.Snaglist_Model.findAll({
      where: whereClause,
      include: [
        {
          model: All_Models.Location_Model,
          as: "location",
          attributes: ["name", "pincode"],
        },
        {
          model: All_Models.Cordinator_Model,
          as: "customerCordinator",
          attributes: ["name", "number"],
          include: [
            {
              model: All_Models.CordinatorType,
              as: "cordinatorType",
              attributes: ["cordinatorType"],
            },
          ],
        },
        {
          model: All_Models.Cordinator_Model,
          as: "factoryCordinator",
          attributes: ["name", "number"],
          include: [
            {
              model: All_Models.CordinatorType,
              as: "cordinatorType",
              attributes: ["cordinatorType"],
            },
          ],
        },
        {
          model: All_Models.Cordinator_Model,
          as: "sourceCordinator",
          attributes: ["name", "number"],
          include: [
            {
              model: All_Models.CordinatorType,
              as: "cordinatorType",
              attributes: ["cordinatorType"],
            },
          ],
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
        {
          model: All_Models.SnagIssue_Model,
          as: "snagIssue",
          attributes: ["issue"],
        },
        {
          model: All_Models.SnagSolution_Model,
          as: "snagSolution",
          attributes: ["solution"],
        },
        {
          model: All_Models.SnagAction_Model,
          as: "snagAction",
          attributes: ["action"],
        },
        {
          model: All_Models.SnagCost_Model,
          as: "snagCost",
          attributes: ["cost"],
        },
        {
          model: All_Models.Status_Model,
          as: "status",
          attributes: ["status"],
        },
      ],
    });
    res.status(200).json({
      message: "All Snaglist",
      data: allSnaglist,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  addSnaglist,
  getAllSnaglist,
};
