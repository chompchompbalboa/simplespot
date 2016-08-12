/**
* contentActions.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires ContentDispatcher
*/

var ContentDispatcher = require('../dispatcher/ContentDispatcher');

/**
* Define the actions that shape the content
*
* @module contentActions
*/
var contentActions = {

    /**
    * Change nested content within the store
    * 
    * @function changeContent
    * @param {object} change - The desired changes
    */
    changeContent: function(change){
        //actions.dispatchAction("CHANGE_SITE", change);
    },

    /**
    * Fetch the initial content content from the server
    * 
    * @function fetchContent
    */
    fetchContent: function(request){
        this._ajax(request);
    },

    /**
    * Send a request to the server via AJAX
    * 
    * @function _ajax
    * @param {string} request
    */
    _ajax: function(request) {
        $.ajax({
            method: "POST",
            url: "/react",
            headers: {
                'X-CSRF-TOKEN': this._token()
            },
            data: {
                request: request,
                url: this._currentURL()
            },
            dataType: 'json',
            cache: false,
            success: function(response) {
                ContentDispatcher.handleAction({
                    actionType: "CHANGE_CONTENT",
                    data: response
                });
            }.bind(this),
            error: function(xhr, status, err) {
              console.error(url, status, err.toString());
            }.bind(this)
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
module.exports = contentActions;