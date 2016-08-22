/**
* NWAireContainerItemShortText.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

var NWAireSplash = require('../NWAireSplash/NWAireSplash.jsx');
/**
* The theme for Northwest Aire Services
*
* @module NWAireContainerItemShortText
*/
var NWAireContainerItemShortText = React.createClass({

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
            text: "Here's some short text that probably contains a brief description of the longer text."
        }
    },

    /**
    * Settings for: _a
    *
    * @function _a
    * @return {object}
    */
    _a: function() {
        return {
            style: {
                width: "100%",
                height: "100%"
            }
        }
    },

    /**
    * Settings for: _container
    *
    * @function _container
    * @return {object}
    */
    _container: function() {
        return {
            style: {
                margin: "1vh 0 0 0",
                width: "100%",
                height: "100%",
                textAlign: "center",
                fontFamily: "Muli, sans-serif",
                fontSize: "1.75vh",
                letterSpacing: "1px",
                color: "rgba(0,0,0,0.75)"
            }
        }
    },

    /**
    * Settings for: __continued
    *
    * @function __continued
    * @return {object}
    */
    __continued: function(fullTextVisible) {
        return (fullTextVisible ? "" : "..");
    },

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render: function() {
        var {handleShortTextClick, text, fullTextVisible, ...other} = this.props;
        let _a = this._a();
        let _container = this._container();
        let __continued = this.__continued(fullTextVisible);
        return (
            <a href="" className="a" style={_a.style} onClick={(e) => handleShortTextClick(e, fullTextVisible)}>
                <div className="container" style={_container.style}>
                    {text}{__continued}
                </div>
            </a>
        )
    }    
});
module.exports = Radium(NWAireContainerItemShortText);