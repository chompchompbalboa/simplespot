/**
* modulesStore.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires ContentDispatcher
* @requires objectAssign
* @requires EventEmitter
* @requires store
*/
var ContentDispatcher = require('../dispatcher/ContentDispatcher');
var objectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var store = require('./store');

/**
* Set the initial store value
* 
* @type {object}
*/
var _store = {
    content: null
};

/**
* Set the constant identifying change events
* 
* @constant
* @type {string}
*/
var CHANGE_EVENT = 'change';

/**
* Change any nested content within the store object
* 
* @function changeContent
* @param {object} changes - The changes to be made within the store object
*/
var changeContent = function(changes){
    _store.content = store.changeContent(changes, _store.content);
};

/**
* Change the path variable held by the store object
* 
* @function changePath
* @param {string} path - The new path
*/
var changePath = function(path){
    _store.content.display.path = path;
};

/**
* Update the store by changing it in its entireity
* 
* @function updateContent
* @param {object} content - The new store
*/
var updateContent = function(content) {
    _store.content = content;
};

/**
* Set the methods that track changes to the store and emit events to the
* the registered listeners
*/
var modulesStore = objectAssign({}, EventEmitter.prototype, {

    addChangeListener: function(callback){
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
        this.removeListener(CHANGE_EVENT, callback);
    },

    getContent: function(){
        return _store.content;
    }

});

/**
* Register the store with the dispatcher.
*/
modulesStore.dispatchToken = ContentDispatcher.register(function(payload){

    var action = payload.action;

    switch(action.actionType){
        case "UPDATE_MODULES":
            updateContent(action.data);
            modulesStore.emit(CHANGE_EVENT);
        break;
        default:
            return true;
    }
});
module.exports = modulesStore;