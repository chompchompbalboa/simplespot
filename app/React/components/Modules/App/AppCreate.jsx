/**
* AppCreate.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

var AppCreateHome = require('./AppCreateHome.jsx');
var AppCreateNew = require('./AppCreateNew.jsx');

/**
* This module renders the the welcome message the app editor
*
* @module AppCreate
*/
var AppCreate = React.createClass({

    /**
    * Validate props types
    *
    * @prop propTypes
    * @return {object}
    */
    propTypes: {
    },

    /**
    * Get the default props
    *
    * @function getDefaultProps
    * @return {object}
    */
    getDefaultProps: function() {
        return {
        }
    },

    /**
    * Settings for: __active
    *
    * @function __active
    * @return {array}
    */
    __active: function(active, app, display, site, utils) {
        var payload = [];
        payload.push(
            React.createElement(
                // TO DO - Whitelist
                eval(active),
                {
                    key: "active",
                    app: app,
                    display: display,
                    site: site,
                    utils: utils
                },
            )
        );
        return payload;
    },

    /**
    * Settings for: _section
    *
    * @function _section
    * @return {object}
    */
    _section: function() {
        return {
            style: {
                position: "fixed",
                top: "60vh",
                left: "0vw",
                width: "100vw",
                height: "40vh",
                backgroundColor: "rgba(225,225,225,1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }
        }
    },

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render: function() {
        var {app, display, site, utils, ...other} = this.props;
        let _section = this._section();
        let __active = this.__active(display.app.AppCreate.active, app, display, site, utils);
        return (
            <section className="section" style={_section.style}>
                {__active}
            </section>
        )
    }    
});
module.exports = Radium(AppCreate);