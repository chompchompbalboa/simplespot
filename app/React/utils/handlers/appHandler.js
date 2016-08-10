/**
* appHandler.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires handler
* @requires siteActions
*/
var handler = require('./handler');
var appActions = require('../../actions/appActions');

/**
* This module builds all of the handler functions for the app 
*
* @module appHandler
*/
var appHandler = {

    /**
    * Handle a change in a controlled value
    * 
    * @function controlledValueChange
    * @param {SyntheticEvent} e - The event
    */
    controlledValueChange: function(e, keychain) {
        keychain = "versions.active.pages." + keychain;
        handler.controlledValueChange(appActions, e, keychain);
    },

    /**
    * Process a login request
    * 
    * @function doesUserExist
    * @param {SyntheticEvent} e - The event
    */
    doesUserExist: function(e, email) {
        appActions.doesUserExist(email);
    },

    /**
    * Fetch a new site from the server
    * 
    * @function controlledValueChange
    * @param {SyntheticEvent} e - The event
    */
    fetchNewSite: function(e, theme, url) {
        e.preventDefault();
        appActions.fetchNewSite(theme, url);
    },

    /**
    * Process a login request
    * 
    * @function loginRequest
    * @param {SyntheticEvent} e - The event
    */
    loginRequest: function(e, email, password) {
        e.preventDefault();
        appActions.loginRequest(email, password);
    },

    /**
    * Process a logout request
    * 
    * @function logoutRequest
    * @param {SyntheticEvent} e - The event
    */
    logoutRequest: function(e) {
        e.preventDefault();
        appActions.logoutRequest();
    },

    /**
    * Process a registration request
    * 
    * @function registerRequest
    * @param {SyntheticEvent} e - The event
    */
    registerRequest: function(e, email, password) {
        e.preventDefault();
        appActions.registerRequest(email, password);
    }
};
module.exports = appHandler;