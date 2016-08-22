/**
* NWAireAbout.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');
import randomImport from '../../../../../utils/random';
const random = new randomImport();
/**
* The theme for Northwest Aire Services
*
* @module NWAireAbout
*/
var NWAireAbout = React.createClass({

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
        return {}
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
                width: "100%",
                height: "30vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }
        }
    },

    /**
    * Settings for: _textContainer
    *
    * @function _textContainer
    * @return {object}
    */
    _textContainer: function() {
        return {
            style: {
                width: "90%",
                height: "90%",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                color: "black",
                fontFamily: random.fontFamily(),
                fontSize: "18px"
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
        let _textContainer = this._textContainer();
        return (
            <section className="section" style={_section.style}>
                <div className="textContainer" style={_textContainer.style}>
                </div>
            </section>
        )
    }    
});
module.exports = Radium(NWAireAbout);