const sequelize = require("./dbConnection");
const Models = require("./allModels");
const { Model } = require("sequelize");

exports.All_Table_Relationship = async () => {
  /**
   *
   * Defing Relations between Tables
   *
   */

    // Factory manager has all master tables
    Models.Source_Model.belongsTo(Models.User_Model);
    Models.User_Model.hasMany(Models.Source_Model);

    Models.CordinatorType.belongsTo(Models.User_Model);
    Models.User_Model.hasMany(Models.CordinatorType);

    Models.Cordinator_Model.belongsTo(Models.User_Model);
    Models.User_Model.hasMany(Models.Cordinator_Model);

    Models.Product_Model.belongsTo(Models.User_Model);
    Models.User_Model.hasMany(Models.Product_Model);

    Models.Factory_Model.belongsTo(Models.User_Model);
    Models.User_Model.hasMany(Models.Factory_Model);

    Models.StatusAction_Model.belongsTo(Models.User_Model);
    Models.User_Model.hasMany(Models.StatusAction_Model);

    Models.Status_Model.belongsTo(Models.User_Model);
    Models.User_Model.hasMany(Models.Status_Model);

    Models.SnagIssue_Model.belongsTo(Models.User_Model);
    Models.User_Model.hasMany(Models.SnagIssue_Model);

    Models.SnagSolution_Model.belongsTo(Models.User_Model);
    Models.User_Model.hasMany(Models.SnagSolution_Model);

    Models.SnagAction_Model.belongsTo(Models.User_Model);
    Models.User_Model.hasMany(Models.SnagAction_Model);

    Models.SnagCost_Model.belongsTo(Models.User_Model);
    Models.User_Model.hasMany(Models.SnagCost_Model);

    Models.Location_Model.belongsTo(Models.User_Model);
    Models.User_Model.hasMany(Models.Location_Model);

    Models.Carcass_Model.belongsTo(Models.User_Model);
    Models.User_Model.hasMany(Models.Carcass_Model);

    Models.Shutter_Model.belongsTo(Models.User_Model);
    Models.User_Model.hasMany(Models.Shutter_Model);

    Models.SalesPerson_Model.belongsTo(Models.User_Model);
    Models.User_Model.hasMany(Models.SalesPerson_Model);

    Models.Designer_Model.belongsTo(Models.User_Model);
    Models.User_Model.hasMany(Models.Designer_Model);

    Models.Planner_Model.belongsTo(Models.User_Model);
    Models.User_Model.hasMany(Models.Planner_Model);

    Models.SiteSurveryor_Model.belongsTo(Models.User_Model);
    Models.User_Model.hasMany(Models.SiteSurveryor_Model);

    Models.FactoryEngineer_Model.belongsTo(Models.User_Model);
    Models.User_Model.hasMany(Models.FactoryEngineer_Model);

    Models.Panel_Model.belongsTo(Models.User_Model);
    Models.User_Model.hasMany(Models.Panel_Model);

    Models.WorkType_Model.belongsTo(Models.User_Model);
    Models.User_Model.hasMany(Models.WorkType_Model);

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