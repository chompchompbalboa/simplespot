/**
* NWAireContainerItemText.jsx
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
* @module NWAireContainerItemText
*/
var NWAireContainerItemText = React.createClass({

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
                display: "flex",
                flexFlow: "column wrap",
                justifyContent: "center",
                alignItems: "flex-start",
                textAlign: "center",
                fontFamily: "Muli, sans-serif",
                fontSize: "2vh",
                letterSpacing: "1px",
                color: "rgba(0,0,0,0.75)",
                "@media (min-width: 64em)": {
                    fontSize: "2.25vh"
                }
            }
        }
        if (itemWidth.lg === "100vw") {
            container.style["@media (min-width: 64em)"].width = "66%";
            container.style["@media (min-width: 64em)"].height = "100%";
            container.style["@media (min-width: 64em)"].overflowX = "hidden";
        }
        return container;
    },

    /**
    * Settings for: __text
    *
    * @function __text
    * @return {object}
    */
    __text: function(itemWidth, text) {
        let payload = [];
        let style = {
                margin: "2vh 0 0 0",
                width: "100%"
        }
        if (itemWidth.lg === "100vw") {
            style["@media (min-width: 64em)"] = {
                margin: "2vh 1.5% 0 1.5%",
                width: "47%"
            }
        }
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
        var {itemWidth, text, ...other} = this.props;
        let _container = this._container(itemWidth);
        let __text = this.__text(itemWidth, text)
        return (
            <div className="container" style={_container.style}>
                {__text}
            </div>
        )
    }    
});
module.exports = Radium(NWAireContainerItemText);