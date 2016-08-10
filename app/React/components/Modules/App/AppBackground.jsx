/**
* AppBackground.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

/**
* This module renders the a background for the app to overlay the site
*
* @module AppBackground
*/
var AppBackground = React.createClass({

    /**
    * Validate props types
    *
    * @prop propTypes
    * @return {object}
    */
    propTypes: {
        section: React.PropTypes.object.isRequired
    },

    /**
    * Get the default props
    *
    * @function getDefaultProps
    * @return {object}
    */
    getDefaultProps: function() {
        return {
            section: {
                style: {
                    backgroundColor: "rgba(225,225,225,1)"
                }
            }
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
                zIndex: "-1",
                position: "fixed",
                width: "100vw",
                height: "100vh"
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
        var {section, ...other} = this.props;
        let _section = this._section();
        return (
            <section className="section" style={[_section.style, section.style]}>
            </section>
        )
    }    
});
module.exports = Radium(AppBackground);