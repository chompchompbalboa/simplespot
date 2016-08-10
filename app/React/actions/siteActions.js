/**
* siteActions.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires actions
*/
var actions = require('./actions');

/**
* This module defines the actions that the site can call.
*
* @module siteActions
*/
var siteActions = {

    /**
    * Change nested content within the store
    * 
    * @function changeContent
    * @param {object} change - The desired changes
    */
    changeContent: function(change){
        actions.dispatchAction("CHANGE_SITE", change);
    },

    /**
    * Fetch the initial site content from the server
    * 
    * @function fetchContent
    */
    fetchContent: function(){
        actions.fetchContent("UPDATE_SITE", "react/site");
    }
};
module.exports = siteActions;