/**
* NWAireContainerItemFullText.jsx
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
* @module NWAireContainerItemFullText
*/
var NWAireContainerItemFullText = React.createClass({

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
            text: ""
        }
    },

    /**
    * Settings for: _container
    *
    * @function _container
    * @return {object}
    */
    _container: function(itemWidth, visible) {
        let container = {
            style: {
                width: "100%",
                display: (visible ? "flex" : "none"),
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }
        }
        if (itemWidth.lg === "100vw") {
            container.style["@media (min-width: 64em)"] = {
                width: "33%",
                height: "40%"
            }
        }
        return container;
    },

    /**
    * Settings for: __text
    *
    * @function __text
    * @return {object}
    */
    __text: function(text) {
        let payload = [];
        let style = {
            margin: "1vh 0 0 0",
            width: "100%",
            textAlign: "center",
            fontFamily: "Muli, sans-serif",
            fontSize: "2vh",
            letterSpacing: "1px",
            color: "rgba(0,0,0,0.75)"
        };
        for (let i in text) {
            payload.push(
                <div key={i} style={style}>{text[i]}</div>
            );
        }
        return payload;
    },

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render: function() {
        var {fullTextVisible, itemWidth, text, ...other} = this.props;
        let _container = this._container(itemWidth, fullTextVisible);
        let __text = this.__text(text);
        return (
            <div className="container" style={_container.style}>
                {__text}
            </div>
        )
    }    
});
module.exports = Radium(NWAireContainerItemFullText);