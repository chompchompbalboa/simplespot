/**
* NWAireContainerItemSection.jsx
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
* @module NWAireContainerItemSection
*/
var NWAireContainerItemSection = React.createClass({

    /**
    * Validate props types
    *
    * @prop propTypes
    * @return {object}
    */
    propTypes: {
        dot: React.PropTypes.object.isRequired,
        text: React.PropTypes.string.isRequired
    },

    /**
    * Get the default props
    *
    * @function getDefaultProps
    * @return {object}
    */
    getDefaultProps: function() {
        return {
            dot: {
                text: "A"
            },
            text: "Section"
        }
    },

    /**
    * Settings for: _container
    *
    * @function _container
    * @return {object}
    */
    _container: function(itemWidth) {
        let container = {
            style: {
                margin: "1.5vh 0 0 0",
                width: "100%",
                height: "5vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }
        };
        if(itemWidth.lg === "100vw") {
            container.style["@media (min-width: 64em)"] = {
                margin: "0 0 1% 0",
                width: "33%",
                height: "50%",
                alignItems: "flex-end"
            }
        }
        return container;
    },

    /**
    * Settings for: _dot
    *
    * @function _dot
    * @return {object}
    */
    _dot: function(dot) {
        return {
            style: {
                width: "2vh",
                height: "2vh",
                borderRadius: "50%",
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Monda, sans-serif",
                fontSize: "1.25vh",
                color: "white",
                "@media (min-width: 64em)": {
                    width: "2.25vh",
                    height: "2.25vh"
                }
            },
            text: dot.text
        }
    },

    /**
    * Settings for: _text
    *
    * @function _text
    * @return {object}
    */
    _text: function(text) {
        return {
            style: {
                margin: "0 0 0 2vw",
                fontFamily: "PT Sans Caption, sans-serif",
                fontSize: "2vh",
                color: "rgba(0,0,0,0.25)",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                "@media (min-width: 64em)": {
                    margin: "0 0 0 1vw"
                }
            },
            text: text
        }
    },

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render: function() {
        var {dot, itemWidth, text, ...other} = this.props;
        let _container = this._container(itemWidth);
        let _dot = this._dot(dot);
        let _text = this._text(text);
        return (
            <div className="container" style={_container.style}>
                <div className="dot" style={_dot.style}>{_dot.text}</div>
                <div className="text" style={_text.style}>{_text.text}</div>
            </div>
        )
    }    
});
module.exports = Radium(NWAireContainerItemSection);