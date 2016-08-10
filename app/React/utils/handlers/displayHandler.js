/**
* displayHandler.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires displayActions
*/
var handler = require('./handler');
var displayActions = require('../../actions/displayActions');

/**
* This module builds the handlers for anything display related 
*
* @module displayHandler
*/
var displayHandler = {

    /**
    * Handle a user clicking a link that points to an internal path
    * 
    * @function internalLinkClick
    * @param actions - The action module handling the change (i.e. siteActions)
    * @param {SyntheticEvent} e - The event
    * @param {path} change - The path the internal link points to
    */
    internalLinkClick: function(e, changes) {
        e.preventDefault();
        displayActions.changeDisplay(changes);
    },

    /**
    * Handle a change in pop state (user navigating forward or backward)
    * 
    * @function popStateChange
    * @param actions - The action module handling the change (i.e. siteActions)
    * @param {SyntheticEvent} e - The event
    */
    popStateChange: function(e) {
        displayActions.updateDisplay(e.state.display, "pop");
    }
};
module.exports = displayHandler;