//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
var React = require('react');
var Radium = require('radium');

var appLoader = require('../../loaders/appLoader');
//-----------------------------------------------------------------------------
// Module
//-----------------------------------------------------------------------------
var App = React.createClass({

    //-------------------------------------------------------------------------
    // Style
    //-------------------------------------------------------------------------

    style: function() {
        var style = {
            section: {
                zIndex: '1',
                position: 'fixed',
                backfaceVisibility: 'hidden',
                top: '0',
                left: '75vw',
                width: '25vw',
                height: '100vh',
                backgroundColor: 'green',
            }
        };

        return style;
    },

    //-------------------------------------------------------------------------
    // Render
    //-------------------------------------------------------------------------

    render: function() {
        var {app, modules, seed, site, ...other} = this.props;
        var page = appLoader.load(app.pages, app.display.path);
        var style = this.style();

        return (
            <section id="app" style={style.section}>
                {page}
            </section>
        )
    }
    
});
    
//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
module.exports = Radium(App);