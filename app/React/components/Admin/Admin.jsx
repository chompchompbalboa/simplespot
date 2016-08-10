/**
* Admin.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

/**
* The top level admin component
*
* @module Admin
*/
var Admin = React.createClass({

    /**
    * Verify user access
    *
    * @function style
    * @return {object}
    */
    guard: function(admin, path) {
        if (path !== "/" && admin.user.loggedIn === "false") {
            // redirect to /
            window.location = '/';
        }
        else if (path === "/" && admin.user.loggedIn === "true") {
            // redirect to dashboard
            window.location = '/dashboard';
        }
        else {
            return true;
        }
    },

    /**
    * Builds the style object for this component
    *
    * @function style
    * @return {object}
    */
    style: function() {
        var style = {
            section: {
                zIndex: '1',
                position: 'fixed',
                backfaceVisibility: 'hidden'
            }
        };
        return style;
    },

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render: function() {
        var {admin, app, display, modules, site, utils, ...other} = this.props;
        // Guard the path so only authenticated users are allowed permission to
        // the admin
        if(this.guard(admin, display.admin.path)) {
            var path = display.admin.path;
            var page = utils.loader.loadModules(admin, display, path, admin.versions.active.pages[path], site, utils);
            var style = this.style();
            return (
                <section id="admin" style={style.section}>
                    {page}
                </section>
            )
        } 
        else {
            return (
                <section id="admin-catcher">
                </section>
            )
        }  
    }    
});
module.exports = Radium(Admin);