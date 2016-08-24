/**
* NWAireMenuLinks.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

var NWAireBusinessInfo = require('../NWAireBusinessInfo/NWAireBusinessInfo.jsx');
/**
* The theme for Northwest Aire Services
*
* @module NWAireMenuLinks
*/
var NWAireMenuLinks = React.createClass({

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
    * Settings for: _container
    *
    * @function _container
    * @return {object}
    */
    _container: function(active) {
        return {
            style: {
                zIndex: "1",
                padding: "10vh 0 0 0",
                position: "fixed",
                backfaceVisibility: "hidden",
                top: "0vh",
                left: (active === "menu" ? "0vw" : "-75vw"),
                width: "75vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                backgroundColor: "rgba(255,255,255,0.85)",
                transition: "left 0.25s",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    width: "60vw"
                },
                "@media (min-width: 64em)": {
                    width: "50vw"
                }
            }
        }
    },

    /**
    * Settings for: _divider
    *
    * @function _divider
    * @return {object}
    */
    _divider: function() {
        return {
            style: {
                margin: "2vh 0 2vh 10vw",
                width: "25vw",
                height: "1px",
                backgroundColor: "black"
            }
        }
    },

    /**
    * Settings for: __info
    *
    * @function __info
    * @return {object}
    */
    __info: function() {
        return (
            <NWAireBusinessInfo />
        )
    },

    /**
    * Settings for: __links
    *
    * @function __links
    * @return {object}
    */
    __links: function() {
        let links = [
            {path: "#about", text: "Services"},
            {path: "#about", text: "Contact"}
        ];
        let style = {
            margin: "2vh 0 0 10vw",
            color: "black",
            fontFamily: "Monda, sans-serif",
            fontSize: "20px"
        };
        return links.map(function(item, index) {
            return (
                <a key={index} href={item.path} style={style}>{item.text}</a>
            )
        });
    },

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render: function() {
        var {active, ...other} = this.props;
        let _container = this._container(active);
        let _divider = this._divider();
        let __links = this.__links();
        let __info = this.__info();
        /*return (
            <div className="container" style={_container.style}>
                {__links}
                <div className="divider" style={_divider.style}></div>
                {__info}
            </div>
        )*/
        return (
            <div className="container" style={_container.style}>
                {__info}
            </div>
        )
    }    
});
module.exports = Radium(NWAireMenuLinks);