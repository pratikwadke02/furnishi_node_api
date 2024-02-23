const All_Models = require('../../utils/allModels');

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

const updateProfile = async (req, res) => {
    try{
        const {userId} = req.user;
        let profile;
        if(req.files){
          const files = req.files;
          if(!files || !files.profile){
            return res.status(400).json({error: "No files selected"});
          }
          const file = files.profile;
          const uploadPath = path.join("../../private/wp/profile" + file.name);
          await saveFile(file, uploadPath);
          profile = path.join("/au/profile", file.name);
        }
        const {
            firstName,
            lastName,
            emailId,
            type
        } = req.body;
        const workPartner = await All_Models.WorkPartner_Model.findOne({
            where: {
                id: userId
            }
        });
        if(!workPartner){
            return res.status(400).json({
                message: "Work Partner not found"
            });
        }
        workPartner.firstName = firstName || workPartner.firstName;
        workPartner.lastName = lastName || workPartner.lastName;
        workPartner.emailId = emailId || workPartner.emailId;
        workPartner.type = type || workPartner.type;
        workPartner.profile = profile || workPartner.profile;
        await workPartner.save();
        res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            workPartner
        });

    }catch(error){
        res.status(500).json({
            error: error.message,
        });
    }
}

const getProfile = async (req, res) => {
    try{
        const {userId} = req.user;
        const workPartner = await All_Models.WorkPartner_Model.findOne({
            where: {
                id: userId
            }
        });
        if(!workPartner){
            return res.status(400).json({
                message: "Work Partner not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Profile",
            workPartner
        });
    }catch(error){
        res.status(500).json({
            error: error.message,
        });
    }
}

module.exports = {
    updateProfile,
    getProfile
}