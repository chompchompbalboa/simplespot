/**
* modulesActions.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires actions
*/
var actions = require('./actions');

/**
* This module defines the actions that the modules can call.
*
* @module modulesActions
*/
var modulesActions = {
    /**
    * Fetch the initial modules content from the server
    * 
    * @function fetchContent
    */
    fetchContent: function(){
        actions.fetchContent("UPDATE_MODULES", "react/modules");
    }
};
module.exports = modulesActions;