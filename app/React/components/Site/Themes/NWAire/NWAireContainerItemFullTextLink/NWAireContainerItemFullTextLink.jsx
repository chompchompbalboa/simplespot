/**
* NWAireContainerItemFullTextLink.jsx
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
* @module NWAireContainerItemFullTextLink
*/
var NWAireContainerItemFullTextLink = React.createClass({

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
            fullTextVisible: false,
            fullTextLinkVisible: true
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
                color: "rgba(0,0,0,0.75)"
            }
        }
    },

    /**
    * Settings for: _container
    *
    * @function _container
    * @return {object}
    */
    _container: function(visible) {
        return {
            style: {
                margin: "1vh 0 0 0",
                width: "100%",
                display: (visible ? "flex" : "none"),
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                fontFamily: "Muli, sans-serif",
                fontSize: "1.75vh",
                letterSpacing: "1px",
                color: "rgba(0,0,0,0.75)"
            }
        }
    },

    /**
    * Settings for: __text
    *
    * @function __text
    * @return {object}
    */
    __text: function(fullTextVisible) {
        return "... read " + (fullTextVisible ? "less" : "more");
    },

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render: function() {
        var {fullTextVisible, fullTextLinkVisible, handleFullTextLinkClick, ...other} = this.props;
        let _a = this._a();
        let _container = this._container(fullTextLinkVisible);
        let __text = this.__text(fullTextVisible);
        return (
            <a href="" className="a" style={_a.style} onClick={(e) => handleFullTextLinkClick(e, fullTextVisible)}>
                <div className="container" style={_container.style}>
                    {__text}
                </div>
            </a>
        )
    }    
});
module.exports = Radium(NWAireContainerItemFullTextLink);