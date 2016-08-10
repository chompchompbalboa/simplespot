/**
* App.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

/**
* The top level app component
*
* @module App
*/
var App = React.createClass({

    /**
    * Verify user access
    *
    * @function style
    * @return {object}
    */
    guard: function(app, path) {
        if (path !== "/" && app.user.loggedIn === "false") {
            // redirect to /
            window.location = '/';
        }
        else if (path === "/" && app.user.loggedIn === "true") {
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
        var {app, display, modules, site, utils, ...other} = this.props;
        // Guard the path so only authenticated users are allowed permission to
        // the app
        if(this.guard(app, display.app.path)) {
            var path = display.app.path;
            var page = utils.loader.loadModules(app, display, path, app.versions.active.pages[path], site, utils);
            var style = this.style();
            return (
                <section id="app" style={style.section}>
                    {page}
                </section>
            )
        } 
        else {
            return (
                <section id="app-catcher">
                </section>
            )
        }  
    }    
});
module.exports = Radium(App);