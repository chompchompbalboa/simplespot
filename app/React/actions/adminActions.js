//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
var React = require('react');

var actions = require('./actions');

//-----------------------------------------------------------------------------
// Module
//-----------------------------------------------------------------------------

var adminActions = {

    changeContent: function(change){
        actions.changeContent("CHANGE_ADMIN", change);
    },

    changePath: function(path, type){
        actions.changePath("CHANGE_ADMIN_PATH", path, type);
    },

    fetchContent: function(){
        actions.fetchContent("UPDATE_ADMIN", "react/admin");
    }
};

//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
module.exports = adminActions;