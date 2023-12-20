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

    // assistant user has panel
    // assistant user has panel control
    Models.AssistantUser_Model.belongsTo(Models.Panel_Model);
    Models.Panel_Model.hasMany(Models.AssistantUser_Model);

    Models.AssistantUser_Model.belongsTo(Models.PanelControl_Model);
    Models.PanelControl_Model.hasMany(Models.AssistantUser_Model);

    //panel has default panel
    Models.Panel_Model.belongsTo(Models.DefaultPanelControl_Model);
    Models.DefaultPanelControl_Model.hasMany(Models.Panel_Model);

    try {

        await sequelize.sync();
        console.log('Set Relation Sync Database');


    } catch(e){
        console.log("error");
    }
}