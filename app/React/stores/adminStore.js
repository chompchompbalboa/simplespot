//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
var ContentDispatcher = require('../dispatcher/ContentDispatcher');
var objectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var store = require('./store');

//-----------------------------------------------------------------------------
// Module
//-----------------------------------------------------------------------------

    //-----------------------------------------------------------------------------
    // Initialize Store
    //-----------------------------------------------------------------------------

    var _store = {
        content: null
    };

    //-----------------------------------------------------------------------------
    // Set Change Event Constant
    //-----------------------------------------------------------------------------

    var CHANGE_EVENT = 'change';

    //-----------------------------------------------------------------------------
    // Change Content
    //-----------------------------------------------------------------------------

    var changeContent = function(changes){
        _store.content = store.changeContent(changes);
    };

    //-----------------------------------------------------------------------------
    // Change Path
    //-----------------------------------------------------------------------------

    var changePath = function(path){
        _store.content.display.path = path;
    };

    //-----------------------------------------------------------------------------
    // Update Content
    //-----------------------------------------------------------------------------

    var updateContent = function(content) {
        _store.content = content;
    };

    //-----------------------------------------------------------------------------
    // Store
    //-----------------------------------------------------------------------------

    var adminStore = objectAssign({}, EventEmitter.prototype, {

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

    //-----------------------------------------------------------------------------
    // Register with the Dispatcher
    //-----------------------------------------------------------------------------

    adminStore.dispatchToken = ContentDispatcher.register(function(payload){

        var action = payload.action;

        switch(action.actionType){
            case "CHANGE_ADMIN":
                changeContent(action.data);
                adminStore.emit(CHANGE_EVENT);
            break;
            case "CHANGE_ADMIN_PATH":
                changePath(action.data);
                adminStore.emit(CHANGE_EVENT);
            break;
            case "UPDATE_ADMIN":
                updateContent(action.data);
                adminStore.emit(CHANGE_EVENT);
            break;
            default:
                return true;
        }
    });

//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
module.exports = adminStore;