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

const addOrder = async (req, res) => {
  try {
    if (!req.files) {
      return res.status(400).json({
        error: "No files selected",
      });
    }
    const files = req.files;
    if (!files || !files.attachment) {
      return res.status(400).json({
        error: "No files selected",
      });
    }
    const file = files.attachment;
    let attachment;
    const uploadPath = path.join("../../private/fm/order" + file.name);
    await saveFile(file, uploadPath);
    attachment = path.join("/fm/order", file.name);

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
    const newOrder = await All_Models.Order_Model.create({
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
      orderStatus: "open",
      userId,
    });
    if (newOrder) {
      const orderHistory = await All_Models.OrderHistory_Model.create({
        orderId: newOrder.id,
        updatedById: userId,
      });
    }
    return res.status(200).json({
      success: true,
      message: "Order added successfully",
      order: newOrder,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.message,
    });
  }
};

const getAllOrder = async (req, res) => {
  try {
    const { userId } = req.user;
    const { id, orderStatus } = req.query;
    let whereClause = { userId };
    if (id) {
      whereClause = { id, userId };
    }
    if (orderStatus) {
      whereClause = { userId, orderStatus };
    }
    const allOrder = await All_Models.Order_Model.findAll({
      where: whereClause,
      include: [
        {
          model: All_Models.Status_Model,
          as: "status",
          attributes: ["status"],
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
      ],
    });
    res.status(200).json({
      success: true,
      message: "All Orders",
      data: allOrder,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const getOrdersCount = async (req, res) => {
  try {
    const { userId } = req.user;
    const { orderStatus } = req.query;
    let whereClause = { userId };
    if (orderStatus) {
      whereClause = { userId, orderStatus };
    }
    const orderCount = await All_Models.Order_Model.count({
      where: whereClause,
    });
    res.status(200).json({
      success: true,
      message: "Order count",
      data: orderCount,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  addOrder,
  getAllOrder,
  getOrdersCount,
};
