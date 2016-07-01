//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------

var siteActions = require('../actions/siteActions');

//-----------------------------------------------------------------------------
// Module
//-----------------------------------------------------------------------------

var handles = {

    //-----------------------------------------------------------------------------
    // Internal Link Click
    //-----------------------------------------------------------------------------

    internalLinkClick: function(e, current, next) {
        e.preventDefault();
        if (next !== current) {
            var changes = [
                {"key": "display.url", "value": next},
                {"key": "display.load", "value": "link"}
            ];
            siteActions.changeContent(changes);
        }    
    },

    //-----------------------------------------------------------------------------
    // Pop State
    //-----------------------------------------------------------------------------

    popState: function(e) {
        var url;
        if (e.state !== null) {
            url = e.state.url
            var changes = [
                {"key": "display.url", "value": url},
                {"key": "display.load", "value": "pop"}
            ];
            siteActions.changeContent(changes);
        }
        return;
    }
};

//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
module.exports = handles;