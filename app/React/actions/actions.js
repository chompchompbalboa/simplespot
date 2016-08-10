/**
* actions.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires ContentDispatcher
*/
var ContentDispatcher = require('../dispatcher/ContentDispatcher');

/**
* This module implements shared actions between the bundles
*
* @module actions
*/
var actions = {

    /**
    * Send an AJAX request
    * 
    * @function _ajax
    * @param {string} action - Reference to the action registered in the store
    * @param {string} data - The data attached to the action
    * @param {string} url - The backend location to fetch from
    */
    ajax: function(url, data, action) {
        $.ajax({
            method: "POST",
            url: url,
            headers: {
                'X-CSRF-TOKEN': this._token()
            },
            data: {
                data: data
            },
            dataType: 'json',
            cache: false,
            success: function(value) {
                this.dispatchAction(action, value);
            }.bind(this),
            error: function(xhr, status, err) {
              console.error(url, status, err.toString());
            }.bind(this)
        });
    },

    /**
    * Fetch the initial content from the server
    * 
    * @function fetchContent
    * @param {string} action - Reference to the action registered in the store
    * @param {string} url - The backend location to fetch from
    */
    fetchContent: function(action, url){
        this.ajax(url, this._currentURL(), action);
    },

    /**
    * Dispatch an action
    * 
    * @function _action
    * @param {string} action - Reference to the action registered in the store
    * @param {string} data - The data attached to the action
    */
    dispatchAction: function(action, data) {
        ContentDispatcher.handleAction({
            actionType: action,
            data: data
        });
    },

    /**
    * Get information about the current url
    * 
    * @function _currentURL
    * @return {string}
    */
    _currentURL: function() {
        var currentURL = {
            domain: window.location.hostname,
            path: window.location.pathname
        };
        return JSON.stringify(currentURL);
    },

    /**
    * Get the current XSRF token
    * 
    * @function _token
    * @return {string}
    */
    _token: function() {
        var token = $('meta[name="_token"]').attr('content');
        return token;
    }
};

//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
module.exports = actions;