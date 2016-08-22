/**
* NWAireMenu.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

var NWAireMenuLogo = require('../NWAireMenuLogo/NWAireMenuLogo.jsx');

/**
* The theme for Northwest Aire Services
*
* @module NWAireMenu
*/
var NWAireMenu = React.createClass({

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
    * Set the initial state
    *
    * @function getInitialState
    * @return {object}
    */
    getInitialState: function() {
        return {
            active: "logo"
        }
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
                zIndex: "2",
                position: "absolute",
                top: "0vh",
                left: "0vw",
                width: "100vw",
                height: (this.state.active === "logo" ? "10vh" : "100vh")
            }
        }
    },

    /**
    * Settings for: __menu
    *
    * @function __menu
    * @return {object}
    */
    __menu: function() {
        return (<NWAireMenuLogo />)
    },

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render: function() {
        var {...other} = this.props;
        let _section = this._section();
        let __menu = this.__menu()
        return (
            <section className="section" style={_section.style}>
                {__menu}
            </section>
        )
    }    
});
module.exports = Radium(NWAireMenu);