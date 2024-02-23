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

const getAssignedOrders = async (req, res) => {
  try {
    const { userId } = req.user;
    const assignedOrders = await All_Models.AssistantUser_Model.findAll({
      where: {
        id: userId,
      },
      attributes: ["id", "name"],
      include: [
        {
          model: All_Models.Order_Model,
          through: {
            attributes: [],
          },
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
            {
              model: All_Models.AssistantUser_Model,
              through: {
                model: All_Models.AssistantUserOrder_Model,
                as: "assistantUserOrder",
              },
            },
          ],
        },
      ],
    });

    if (!assignedOrders) {
      return res.status(404).json({ message: "No orders assigned" });
    }

    return res.status(200).json({ assignedOrders });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getOrderDetails = async (req, res) => {
  try {
    const { userId } = req.user;
    const { orderId } = req.query;
    const order = await All_Models.AssistantUser_Model.findOne({
      where: {
        id: userId,
      },
      attributes: ["id", "name"],
      include: [
        {
          model: All_Models.Order_Model,
          through: {
            where: {
              orderId,
            },
          },
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
            {
              model: All_Models.AssistantUser_Model,
              through: {
                model: All_Models.AssistantUserOrder_Model,
                as: "assistantUserOrder",
              },
            },
          ],
        },
      ],
    });

    if (order.orders.length === 0) {
      return res.status(404).json({ message: "Order not found" });
    }

    return res.status(200).json({ order });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateOrder = async (req, res) => {
  try {
    const { userId } = req.user;
    const { orderId } = req.body;
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
    const uploadPath = path.join("../../private/au/order" + file.name);
    await saveFile(file, uploadPath);
    attachment = path.join("/au/order", file.name);
    await All_Models.Order_Model.update(
      {
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
      },
      {
        where: {
          id: orderId,
        },
      }
    );
    const updatedOrder = await All_Models.Order_Model.findOne({
      where: {
        id: orderId,
      },
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
        {
          model: All_Models.AssistantUser_Model,
          through: {
            model: All_Models.AssistantUserOrder_Model,
            as: "assistantUserOrder",
          },
        },
      ],
    });
    if (updatedOrder) {
      const orderHistory = await All_Models.OrderHistory_Model.create({
        orderId: orderId,
        updatedBy: userId,
      });
    }
    return res.status(200).json({
      success: true,
      message: "Order updated successfully",
      order: updatedOrder,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAssignedOrdersCount = async (req, res) => {
  try{
    const { userId } = req.user;
    const assignedOrdersCount = await All_Models.AssistantUserOrder_Model.count({
      where: {
        assistantUserId: userId,
      },
    });
    return res.status(200).json({ 
      success: true,
      message: "Assigned orders count",
      assignedOrdersCount });
  }catch(error){
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAssignedOrders,
  getOrderDetails,
  updateOrder,
  getAssignedOrdersCount,
};
