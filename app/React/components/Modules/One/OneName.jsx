/**
* OneName.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

/**
* This module renders the the welcome message the app editor
*
* @module OneName
*/
var OneName = React.createClass({

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
            name: "One Name"
        }
    },    

    /**
    * Settings for: _name
    *
    * @function _name
    * @return {object}
    */
    _name: function(name) {
        return name;
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
                position: "absolute",
                top: "0vh",
                left: "0vw",
                width: "100vw",
                height: "20vh",
                fontSize: "10vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "amblebold",
                textTransform: "uppercase",
                whiteSpace: "nowrap"
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
        var {name, ...other} = this.props;
        let _name = this._name(name);
        let _section = this._section();
        return (
            <section className="section" style={_section.style}>
                {_name}
            </section>
        )
    }    
});
module.exports = Radium(OneName);