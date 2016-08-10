/**
* OneCanvasImage.jsx
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
* @module OneCanvasImage
*/
var OneCanvasImage = React.createClass({

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
    _section: function(backgroundColor, height, marginTop) {
        return {
            style: {
                width: "100vw",
                height: height + "vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: backgroundColor,
                "@media (min-width: 64em)": {
                    marginTop: marginTop + "vh",
                    width: "50vw"
                }
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
        var {backgroundColor, height, marginTop, ...other} = this.props;
        let _section = this._section(backgroundColor, height, marginTop);
        return (
            <section className="section" style={_section.style}>
            </section>
        )
    }    
});
module.exports = Radium(OneCanvasImage);