//-----------------------------------------------------------------------------
// Admin
//-----------------------------------------------------------------------------
// The base component for the Admin dashboard
//
//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
var React = require('react');
var Radium = require('radium');

var adminLoader = require('../../loaders/adminLoader');
//-----------------------------------------------------------------------------
// Module
//-----------------------------------------------------------------------------
var Admin = React.createClass({

    //-------------------------------------------------------------------------
    // Style
    //-------------------------------------------------------------------------

    style: function() {
        var style = {
            section: {
                zIndex: '2',
                position: 'fixed',
                backfaceVisibility: 'hidden',
                top: '0',
                left: '0',
                width: '25vw',
                height: '100vh',
                backgroundColor: 'rgba(255,255,255,0.5)',
                display: 'flex',
                flexDirection: 'column',
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
        var {admin, app, modules, seed, site, ...other} = this.props;
        var page = adminLoader.load(admin.pages, admin.display.path);
        var style = this.style();

        return (
            <section id="admin" style={style.section}>
                {page}
            </section>
        )
    }
    
});
    
//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
module.exports = Radium(Admin);