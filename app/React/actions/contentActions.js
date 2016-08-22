/**
* contentActions.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires ContentDispatcher
*/

var ContentDispatcher = require('../dispatcher/ContentDispatcher');
import randomGeneratorImport from '../utils/randomGenerator';
const randomGenerator = new randomGeneratorImport();

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
    * @param {object} changes - The desired changes
    */
    changeContent: function(changes){
        ContentDispatcher.handleAction({
            actionType: "CHANGE_CONTENT",
            data: changes
        });
    },

    /**
    * Fetch the initial content from the server
    * 
    * @function fetchContent
    */
    fetchContent: function(request){
        this._ajax(request);
    },

    /**
    * Generate a new set of inputs for a given site type and theme
    * 
    * @function generateRandom
    */
    generateRandom: function(type){
        let changes = [
            {key: "site.pages", value: randomGenerator.generate(type)}
        ];
        ContentDispatcher.handleAction({
            actionType: "CHANGE_CONTENT",
            data: changes
        });
    },

    /**
    * Fully replace the stored content with a different content object
    * 
    * @function replaceContent
    * @param {object} changes - The desired changes
    */
    replaceContent: function(content){
        ContentDispatcher.handleAction({
            actionType: "REPLACE_CONTENT",
            data: content
        });
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
              console.error(status, err.toString());
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