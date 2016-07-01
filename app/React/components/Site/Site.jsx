//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
var React = require('react');
var Radium = require('radium');

var handles = require('../../handles/siteHandles');
var siteLoader = require('../../loaders/siteLoader');
//-----------------------------------------------------------------------------
// Module
//-----------------------------------------------------------------------------
var Site = React.createClass({

    //-------------------------------------------------------------------------
    // Component Did Mount
    //-------------------------------------------------------------------------

    componentDidMount: function() {
        this.replaceURL(this.props.site.display.url);
        window.addEventListener('popstate', handles.popState);
    },

    //-------------------------------------------------------------------------
    // Component Did Update
    //-------------------------------------------------------------------------

    componentDidUpdate: function() {
        if(this.props.site.display.load !== "pop") {
            this.setURL(this.props.site.display.url);
        }    
    },

    //-------------------------------------------------------------------------
    // Set URL
    //-------------------------------------------------------------------------

    setURL: function(url) {
        window.history.pushState({url: url}, "", url);
    },

    //-------------------------------------------------------------------------
    // Replace URL
    //-------------------------------------------------------------------------

    replaceURL: function(url) {
        window.history.replaceState({url: url}, "", url);
    },

    //-------------------------------------------------------------------------
    // Style
    //-------------------------------------------------------------------------

    style: function() {
        var style = {
            section: {
                zIndex: '0',
                position: 'relative',
                width: '100vw',
                display: 'flex',
                flexFlow: 'row wrap',
                justifyContent: 'center',
                alignItems: 'center'
            }
        };

        return style;
    },

    //-------------------------------------------------------------------------
    // Render
    //-------------------------------------------------------------------------

    render: function() {
        var {site, ...other} = this.props;
        var page = siteLoader.load(site.pages, site.display.path);
        var style = this.style();

        return (
            <section id="site" style={style.section}>
                {page}
            </section>
        )
    }
    
});
    
//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
module.exports = Radium(Site);