/**
* HoursOne.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

/**
* Let's throw a party
*
* @module HoursOne
*/
var HoursOne = React.createClass({

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
    _section: function(colors, fonts) { 
        return {
            style: {
                color: colors.primary,
                height: "100vh",
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
        var {colors, fonts, random, ...other} = this.props;
        let _section = this._section(colors, fonts);
        return (
            <section className="section" style={_section.style}>
                HoursOne
            </section>
        )
    }    
});
module.exports = Radium(HoursOne);