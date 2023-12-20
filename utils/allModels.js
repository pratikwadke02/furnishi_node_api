const Models = {
    //factory Manager   
    
    //master
    Source_Model: require('../model/source.model'),
    CordinatorType: require('../model/cordinator.Type.model'),
    Cordinator_Model: require('../model/cordinator.model'),
    Product_Model: require('../model/product.model'),
    Factory_Model: require('../model/factory.model'),
    StatusAction_Model: require('../model/status.action.model'),
    Status_Model: require('../model/status.model'),
    SnagIssue_Model: require('../model/snag.issue.model'),
    SnagSolution_Model: require('../model/snag.solution.model'),
    SnagAction_Model: require('../model/snag.action.model'),
    SnagCost_Model: require('../model/snag.cost.model'),
    Location_Model: require('../model/location.model'),
    Carcass_Model: require('../model/carcass.model'),
    Shutter_Model: require('../model/shutter.model'),
    SalesPerson_Model: require('../model/sales.person.model'),
    Designer_Model: require('../model/designer.model'),
    Planner_Model: require('../model/planner.model'),
    SiteSurveryor_Model: require('../model/final.site.surveyor.model'),
    FactoryEngineer_Model: require('../model/factory.engineer.model'),
    Panel_Model: require('../model/panel.model'),
    WorkType_Model: require('../model/work.type.model'),

    //panel control
    PanelControl_Model: require('../model/panel.control.model'),
    DefaultPanelControl_Model: require('../model/default.panel.control.model'),

    //assistant user
    AssistantUser_Model: require('../model/assistant.user.model'),
}

module.exports = Models;