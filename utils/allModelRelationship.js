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
    Models.CordinatorType.hasMany(Models.Cordinator_Model);

    Models.Cordinator_Model.belongsTo(Models.Source_Model);
    Models.Source_Model.hasMany(Models.Cordinator_Model);

    // Product has Factory
    Models.Product_Model.belongsTo(Models.Factory_Model);
    Models.Factory_Model.hasMany(Models.Product_Model);

    try {

        await sequelize.sync();
        console.log('Set Relation Sync Database')


    } catch(e){
        console.log("error")
    }
}