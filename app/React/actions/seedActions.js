//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
var React = require('react');

var actions = require('./actions');

//-----------------------------------------------------------------------------
// Module
//-----------------------------------------------------------------------------

var seedActions = {

    changeContent: function(change){
        actions.changeContent("CHANGE_SEED", change);
    },

    changePath: function(path){
        actions.changePath("CHANGE_SEED_PATH", path);
    },

    fetchContent: function(){
        actions.fetchContent("UPDATE_SEED", "react/seed");
    }
};

//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
module.exports = seedActions;