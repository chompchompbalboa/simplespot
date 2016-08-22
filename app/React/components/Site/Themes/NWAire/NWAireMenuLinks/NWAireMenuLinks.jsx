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
import randomImport from '../../../../../utils/random';
const random = new randomImport();
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
                zIndex: "0",
                padding: "10vh 0 0 0",
                position: "fixed",
                top: "0vh",
                left: (active === "menu" ? "0vw" : "-75vw"),
                width: "75vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                backgroundColor: "rgba(255,255,255,0.85)",
                transition: "left 0.25s"
            }
        }
    },

    /**
    * Settings for: __links
    *
    * @function __links
    * @return {object}
    */
    __links: function() {
        let links = [
            {path: "#about", text: "About Us"},
            {path: "#about", text: "Services"},
            {path: "#about", text: "Contact"}
        ];
        let style = {
            margin: "3vh 0 0 10vw",
            color: "black",
            fontFamily: "Monda, sans-serif",
            fontSize: "30px"
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
        let __links = this.__links();
        return (
            <div className="container" style={_container.style}>
                {__links}
            </div>
        )
    }    
});
module.exports = Radium(NWAireMenuLinks);