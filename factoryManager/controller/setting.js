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

const factoryName = async (req, res) => {
  try {
    const { userId } = req.user;
    const { factoryName } = req.body;
    await All_Models.Setting_Model.update(
      { factoryName },
      { where: { userId } }
    );
    res.status(200).json({ message: "Factory Name updated successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const logo = async (req, res) => {
  try {
    const { userId } = req.user;
    if(!req.files){
      return res.status(400).json({error: "No files selected"});
    }
    const files = req.files;
    if(!files || !files.logo){
      return res.status(400).json({error: "No files selected"});
    }
    const file = files.logo;
    let logo;
    const uploadPath = path.join("../../private/fm/setting" + file.name);
    await saveFile(file, uploadPath);
    logo = path.join("/fm/setting", file.name);
    await All_Models.Setting_Model.update({ logo }, { where: { userId } });
    res.status(200).json({ message: "Logo updated successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const colors = async (req, res) => {
  try {
    const { userId } = req.user;
    const { colors } = req.body;
    await All_Models.Setting_Model.update({ colors }, { where: { userId } });
    res.status(200).json({ message: "Colors updated successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const fontSize = async (req, res) => {
  try {
    const { userId } = req.user;
    const { fontSize } = req.body;
    await All_Models.Setting_Model.update({ fontSize }, { where: { userId } });
    res.status(200).json({ message: "Font Size updated successfully" });
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
      { where: { userId } }
    );
    res.status(200).json({ message: "Notification updated successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  factoryName,
  logo,
  colors,
  fontSize,
  notification,
};
