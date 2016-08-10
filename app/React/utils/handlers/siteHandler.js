/**
* siteHandler.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires handler
* @requires siteActions
*/
var handler = require('./handler');
var siteActions = require('../../actions/siteActions');

/**
* This module builds all of the handler functions for the end sites. 
*
* @module siteHandler
*/
var siteHandler = {

    /**
    * Handle a change in a controlled value
    * 
    * @function controlledValueChange
    * @param {SyntheticEvent} e - The event
    */
    controlledValueChange: function(e, keychain) {
        switch (typeof keychain) {
            case "object":
                keychain = keychain.map(function(item) {
                    return "versions.active.pages." + item;
                });
            break;
            case "string":
                keychain = "versions.active.pages." + keychain;
            break;
        }
        handler.controlledValueChange(siteActions, e, keychain);
    }
};
module.exports = siteHandler;