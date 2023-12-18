const sequelize = require("./dbConnection");
const Models = require("./allModels");
const { Model } = require("sequelize");

exports.All_Table_Relationship = async () => {
  /**
   *
   * Defing Relations between Tables
   *
   */

    // Cordinator has Cordiantor Type
    // Cordinator has Source
    Models.Cordinator_Model.belongsTo(Models.CordinatorType);
    Models.Cordinator_Model.belongsTo(Models.Source_Model);

    try {

        await sequelize.sync();
        console.log('Set Relation Sync Database')


    } catch(e){
        console.log("error")
    }
}