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
var NWAireMenuLinks = require('../NWAireMenuLinks/NWAireMenuLinks.jsx');

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
    * Change active
    *
    * @function getInitialState
    * @return {object}
    */
    changeActive: function(e, active) {
        e.preventDefault();
        let newActive = (active === "logo" ? "menu" : "logo");
        this.setState({
            active: newActive
        });
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
                zIndex: "2"
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
        var {...other} = this.props;
        let _section = this._section();
        return (
            <section className="section" style={_section.style}>
                <NWAireMenuLogo active={this.state.active} changeActive={this.changeActive}/>
                <NWAireMenuLinks active={this.state.active}/>
            </section>
        )
    }    
});
module.exports = Radium(NWAireMenu);