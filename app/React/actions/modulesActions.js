//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
var React = require('react');

var ContentDispatcher = require('../dispatcher/ContentDispatcher');
var modulesConstants = require('../constants/modulesConstants');

//-----------------------------------------------------------------------------
// Module
//-----------------------------------------------------------------------------

var modulesActions = {

    //-----------------------------------------------------------------------------
    // "Public" functions
    //-----------------------------------------------------------------------------

    changeContent: function(change){
        this._action("CHANGE_MODULES", change);
    },

    fetchModules: function(){
        this._ajax("react/modules", JSON.stringify({url: window.location.pathname}), "UPDATE_MODULES");
    },

    //-----------------------------------------------------------------------------
    // "Private" functions
    //-----------------------------------------------------------------------------

    _action: function(action, data) {
        switch(action){
            case "CHANGE_MODULES":
                ContentDispatcher.handleAction({
                    actionType: modulesConstants.CHANGE_MODULES,
                    data: data
                });
            break;

            case "UPDATE_MODULES":
                ContentDispatcher.handleAction({
                    actionType: modulesConstants.UPDATE_MODULES,
                    data: data
                });
            break;
            
            default:
                return true;
        }
    },

    _ajax: function(url, data, action) {
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
                this._action(action, value);
            }.bind(this),
            error: function(xhr, status, err) {
              console.error(url, status, err.toString());
            }.bind(this)
        });
    },

    _token: function() {
        var token = $('meta[name="_token"]').attr('content');
        return token;
    }
};

//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
module.exports = modulesActions;