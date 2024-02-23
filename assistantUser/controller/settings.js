const All_Models = require("../../utils/allModels");

const getSettings = async (req, res) => {
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

module.exports = {
  getSettings,
};
