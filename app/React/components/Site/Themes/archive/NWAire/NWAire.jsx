/**
* NWAire.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

var NWAireContainer = require('./NWAireContainer/NWAireContainer.jsx');
var NWAireMenu = require('./NWAireMenu/NWAireMenu.jsx');

/**
* The theme for Northwest Aire Services
*
* @module NWAire
*/
var NWAire = React.createClass({

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
    * Settings for: _section
    *
    * @function _section
    * @return {object}
    */
    _section: function() {
        return {
            style: {
                width: "100vw"
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
        var {site, ...other} = this.props;
        let _section = this._section();
        return (
            <section className="section" style={_section.style}>
                <NWAireMenu site={site} />
                <NWAireContainer site={site} />
            </section>
        )
    }    
});
module.exports = Radium(NWAire);