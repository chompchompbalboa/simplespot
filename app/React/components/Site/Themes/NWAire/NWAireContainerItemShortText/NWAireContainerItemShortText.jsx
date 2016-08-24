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
    _a: function(itemWidth) {
        let a = {
            style: {
                width: "100%"
            }
        }
        if (itemWidth.lg === "100vw") {
            a.style["@media (min-width: 64em)"] = {
                width: "30%"
            }
        }
        return a;

    },

    /**
    * Settings for: _container
    *
    * @function _container
    * @return {object}
    */
    _container: function(itemWidth) {
        let container =  {
            style: {
                margin: "1vh 0 0 0",
                width: "100%",
                textAlign: "center",
                fontFamily: "Muli, sans-serif",
                fontSize: "2vh",
                letterSpacing: "1px",
                color: "rgba(0,0,0,0.75)"
            }
        }
        return container;
    },

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render: function() {
        var {fullTextVisible, handleFullTextLinkClick, itemWidth, text, ...other} = this.props;
        let _a = this._a(itemWidth);
        let _container = this._container(itemWidth);
        return (
            <a href="" className="a" style={_a.style} onClick={(e) => handleFullTextLinkClick(e, fullTextVisible)}>
                <div className="container" style={_container.style}>
                    {text}
                </div>
            </a>
        )
    }    
});
module.exports = Radium(NWAireContainerItemShortText);