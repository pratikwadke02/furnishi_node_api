const All_Models = require("../../utils/allModels");

const settings = async (req, res) => {
  try {
    const { userId } = req.user;
    const settings = await All_Models.Setting_Model.findOne({
      where: {
        assistantUserId: userId,
      },
    });
    if (!settings) {
      return res.status(200).json({ message: "No settings found" });
    }
    return res.status(200).json({ settings });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const colors = async (req, res) => {
  try {
    const { userId } = req.user;
    const { colors } = req.body;
    await All_Models.Setting_Model.update(
      { colors },
      {
        where: {
          assistantUserId: userId,
        },
      }
    );
    res.status(200).json({
      success: true,
      message: "Colors updated successfully",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const fontSize = async (req, res) => {
  try {
    const { userId } = req.user;
    const { fontSize } = req.body;
    await All_Models.Setting_Model.update(
      { fontSize },
      {
        where: {
          assistantUserId: userId,
        },
      }
    );
    res.status(200).json({
      success: true,
      message: "Font Size updated successfully",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const notification = async (req, res) => {
  try {
    const { userId } = req.user;
    const { notification } = req.body;
    await All_Models.Setting_Model.update(
      { notification },
      {
        where: {
          assistantUserId: userId,
        },
      }
    );
    res.status(200).json({
      success: true,
      message: "Notification updated successfully",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  settings,
  colors,
  fontSize,
  notification,
};
