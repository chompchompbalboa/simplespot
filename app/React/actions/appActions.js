//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
var React = require('react');

var ContentDispatcher = require('../dispatcher/ContentDispatcher');
var appConstants = require('../constants/appConstants');

//-----------------------------------------------------------------------------
// Module
//-----------------------------------------------------------------------------

var appActions = {

    //-----------------------------------------------------------------------------
    // "Public" functions
    //-----------------------------------------------------------------------------

    changeContent: function(change){
        this._action("CHANGE_APP", change);
    },

    fetchApp: function(){
        this._ajax("react/app", {}, "UPDATE_APP");
    },

    //-----------------------------------------------------------------------------
    // "Private" functions
    //-----------------------------------------------------------------------------

    _action: function(action, data) {
        switch(action){
            case "CHANGE_APP":
                ContentDispatcher.handleAction({
                    actionType: appConstants.CHANGE_APP,
                    data: data
                });
            break;

            case "UPDATE_APP":
                ContentDispatcher.handleAction({
                    actionType: appConstants.UPDATE_APP,
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
module.exports = appActions;