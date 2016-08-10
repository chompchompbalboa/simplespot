/**
* appActions.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires actions
*/
var actions = require('./actions');

/**
* This module defines the actions that the app can call.
*
* @module appActions
*/
var appActions = {

    /**
    * Change nested content within the store
    * 
    * @function changeContent
    * @param {object} change - The desired changes
    */
    changeContent: function(change){
        actions.dispatchAction("CHANGE_APP", change);
    },

    /**
    * Process a login request
    * 
    * @function doesUserExist
    * @param {object} change - The desired changes
    */
    doesUserExist: function(email){
        let data = JSON.stringify({
            email: email
        });
        actions.ajax("/react/app/user", data, "CHANGE_DISPLAY");
    },

    /**
    * Fetch the initial app content from the server
    * 
    * @function fetchContent
    */
    fetchContent: function(){
        actions.fetchContent("UPDATE_APP", "react/app");
    },

    /**
    * Fetch a new site from the server (called by the app)
    * 
    * @function fetchNew
    */
    fetchNewSite: function(theme, url){
        let data = JSON.stringify({
            theme: theme,
            url: url
        });
        actions.ajax("react/app/new", data, "CHANGE_SITE");
    },

    /**
    * Process a login request
    * 
    * @function loginRequest
    * @param {object} change - The desired changes
    */
    loginRequest: function(email, password){
        let data = JSON.stringify({
            email: email,
            password: password
        });
        actions.ajax("/react/app/login", data, "CHANGE_DISPLAY");
    },

    /**
    * Process a logout request
    * 
    * @function logoutRequest
    * @param {object} change - The desired changes
    */
    logoutRequest: function(){
        let changes = [
            {key: "user.loggedIn", value: "false"},
            {key: "user.email", value: "false"}
        ];
        actions.dispatchAction("CHANGE_APP", changes);
        let data = JSON.stringify({});
        actions.ajax("/react/app/logout", data, "CHANGE_DISPLAY");
    },

    /**
    * Process a registration request
    * 
    * @function registerRequest
    * @param {object} change - The desired changes
    */
    registerRequest: function(email, password){
        let data = JSON.stringify({
            email: email,
            password: password
        });
        actions.ajax("/react/app/register", data, "CHANGE_DISPLAY");
    },
};
module.exports = appActions;