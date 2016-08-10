/**
* displayActions.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires actions
*/
var actions = require('./actions');

/**
* This module defines the actions that deal with the current display state
*
* @module displayActions
*/
var displayActions = {

    /**
    * Change part of the display
    * 
    * @function changePath
    * @param {string} path - The new active path
    * @param {string} type - The origin of the request for the change
    */
    changeDisplay: function(changes) {
        actions.dispatchAction("CHANGE_DISPLAY", changes);
    },

    /**
    * Fetch the initial site content from the server
    * 
    * @function fetchContent
    */
    fetchContent: function() {
        actions.fetchContent("UPDATE_DISPLAY", "react/display");
    },

    /**
    * Update the entire display
    * 
    * @function changePath
    * @param {string} path - The new active path
    * @param {string} type - The origin of the request for the change
    */
    updateDisplay: function(display) {
        actions.dispatchAction("UPDATE_DISPLAY", display);
    }
};
module.exports = displayActions;