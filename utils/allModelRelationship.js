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

    Models.DefaultRoleManager_Model.belongsTo(Models.User_Model);
    Models.User_Model.hasMany(Models.DefaultRoleManager_Model);

    // Cordinator has Cordiantor Type
    // Cordinator has Source
    Models.Cordinator_Model.belongsTo(Models.CordinatorType);
    Models.CordinatorType.hasMany(Models.Cordinator_Model);

    Models.Cordinator_Model.belongsTo(Models.Source_Model);
    Models.Source_Model.hasMany(Models.Cordinator_Model);

    // Product has Factory
    Models.Product_Model.belongsTo(Models.Factory_Model);
    Models.Factory_Model.hasMany(Models.Product_Model);

    // assistant user has panel control
    // assistant user has default role
    // assistant user belongs to user
    Models.AssistantUser_Model.belongsTo(Models.DefaultRoleManager_Model);
    Models.DefaultRoleManager_Model.hasMany(Models.AssistantUser_Model);

    Models.AssistantUser_Model.belongsTo(Models.PanelControl_Model);
    Models.PanelControl_Model.hasMany(Models.AssistantUser_Model);

    Models.AssistantUser_Model.belongsTo(Models.User_Model);
    Models.User_Model.hasMany(Models.AssistantUser_Model);

    //panel has default panel
    Models.Panel_Model.belongsTo(Models.DefaultPanelControl_Model);
    Models.DefaultPanelControl_Model.hasMany(Models.Panel_Model);

    //role has default panel
    Models.DefaultRoleManager_Model.belongsTo(Models.DefaultPanelControl_Model);
    Models.DefaultPanelControl_Model.hasMany(Models.DefaultRoleManager_Model);

    //order belongs to user
    //order belongs to location
    //order belongs to cordinator as customer cordinator
    //order belongs to cordinator as factory cordinator
    //order belongs to cordinator as source cordinator
    //order belongs to status
    //order belongs to product
    //order has many order history and order history belongs to order
    
    Models.Order_Model.belongsTo(Models.User_Model);
    Models.User_Model.hasMany(Models.Order_Model);

    Models.Order_Model.belongsTo(Models.Location_Model);
    Models.Location_Model.hasMany(Models.Order_Model);

    Models.Order_Model.belongsTo(Models.Cordinator_Model, {
        as: "customerCordinator",
    });

    Models.Order_Model.belongsTo(Models.Cordinator_Model, {
        as: "factoryCordinator",
    });

    Models.Order_Model.belongsTo(Models.Cordinator_Model, {
        as: "sourceCordinator",
    });

    Models.Order_Model.belongsTo(Models.Status_Model);
    Models.Status_Model.hasMany(Models.Order_Model);

    Models.Order_Model.belongsTo(Models.Product_Model);
    Models.Product_Model.hasMany(Models.Order_Model);

    Models.Order_Model.hasMany(Models.OrderHistory_Model);
    Models.OrderHistory_Model.belongsTo(Models.Order_Model);

    //make another table and relate assistant user with order as one order can be assigned to multiple assistant user and one assistant user can have multiple orders

    Models.Order_Model.belongsToMany(Models.AssistantUser_Model, {
        through: "assistantUserOrder",
    });
    Models.AssistantUser_Model.belongsToMany(Models.Order_Model, {
        through: "assistantUserOrder",
    });

    //order history belongs to user as updated by
    
    Models.OrderHistory_Model.belongsTo(Models.User_Model, {
        as: "updatedBy",
    });
    
    //enquiry belongs to user
    //enquiry belongs to status
    //enquiry belongs to carcass
    //enquiry belongs to shutter
    //enquiry belongs to status action
    //enquiry belongs to product

    Models.Enquiry_Model.belongsTo(Models.User_Model);
    Models.User_Model.hasMany(Models.Enquiry_Model);

    Models.Enquiry_Model.belongsTo(Models.Status_Model);
    Models.Status_Model.hasMany(Models.Enquiry_Model);

    Models.Enquiry_Model.belongsTo(Models.Carcass_Model);
    Models.Carcass_Model.hasMany(Models.Enquiry_Model);

    Models.Enquiry_Model.belongsTo(Models.Shutter_Model);
    Models.Shutter_Model.hasMany(Models.Enquiry_Model);

    Models.Enquiry_Model.belongsTo(Models.StatusAction_Model);
    Models.StatusAction_Model.hasMany(Models.Enquiry_Model);

    Models.Enquiry_Model.belongsTo(Models.Product_Model);
    Models.Product_Model.hasMany(Models.Enquiry_Model);

    //snaglist belongs to user
    //snaglist belongs to location
    //snaglist belongs to cordinator as customer cordinator
    //snaglist belongs to cordinator as factory cordinator
    //snaglist belongs to cordinator as source cordinator
    //snaglist belongs to product
    //snaglist belongs to snag issue
    //snaglist belongs to snag solution
    //snaglist belongs to snag action
    //snaglist belongs to snag cost
    //snaglist belongs to status
    //snaglist belongs to snaglist history and snaglist history belongs to snaglist

    Models.Snaglist_Model.belongsTo(Models.User_Model);
    Models.User_Model.hasMany(Models.Snaglist_Model);

    Models.Snaglist_Model.belongsTo(Models.Location_Model);
    Models.Location_Model.hasMany(Models.Snaglist_Model);

    Models.Snaglist_Model.belongsTo(Models.Cordinator_Model, {
        as: "customerCordinator",
    });

    Models.Snaglist_Model.belongsTo(Models.Cordinator_Model, {
        as: "factoryCordinator",
    });

    Models.Snaglist_Model.belongsTo(Models.Cordinator_Model, {
        as: "sourceCordinator",
    });

    Models.Snaglist_Model.belongsTo(Models.Product_Model);
    Models.Product_Model.hasMany(Models.Snaglist_Model);    

    Models.Snaglist_Model.belongsTo(Models.SnagIssue_Model);
    Models.SnagIssue_Model.hasMany(Models.Snaglist_Model);

    Models.Snaglist_Model.belongsTo(Models.SnagSolution_Model);
    Models.SnagSolution_Model.hasMany(Models.Snaglist_Model);

    Models.Snaglist_Model.belongsTo(Models.SnagAction_Model);
    Models.SnagAction_Model.hasMany(Models.Snaglist_Model);

    Models.Snaglist_Model.belongsTo(Models.SnagCost_Model);
    Models.SnagCost_Model.hasMany(Models.Snaglist_Model);

    Models.Snaglist_Model.belongsTo(Models.Status_Model);
    Models.Status_Model.hasMany(Models.Snaglist_Model);

    Models.Snaglist_Model.hasMany(Models.SnaglistHistory_Model);
    Models.SnaglistHistory_Model.belongsTo(Models.Snaglist_Model);

    //snaglist history belongs to user as updated by

    Models.SnaglistHistory_Model.belongsTo(Models.User_Model, {
        as: "updatedBy",
    });

    
    try {

        await sequelize.sync();
        console.log('Set Relation Sync Database');


    } catch(e){
        console.log("error");
    }
}