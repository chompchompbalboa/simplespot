/**
* NWAireMenuItem.jsx
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
* @module NWAireMenuItem
*/
var NWAireMenuItem = React.createClass({

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
            active: false,
            logo: false,
            path: "/",
            texts: {
                large: "Link",
                small: "NWAireMenuLink"
            }
        }
    },

    /**
    * Settings for: handleClick
    *
    * @function handleClick
    * @return {object}
    */
    handleClick: function(e) {
        e.preventDefault();
        console.log('click');
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
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start"
            }
        }
    },

    /**
    * Settings for: _li
    *
    * @function _li
    * @return {object}
    */
    _li: function(logo) {
        return {
            style: {
                display: "inline",
                width: "100%",
                height: (logo ? "28vh" : "18vh"),
                backgroundColor: (logo ? "rgba(45,69,113,1)" : "white"),
                borderBottom: "1px solid grey"
            }
        }
    },

    /**
    * Settings for: _text
    *
    * @function _text
    * @return {object}
    */
    _text: function() {
        return {
            style: {
            }
        }
    },

    /**
    * Settings for: _textLarge
    *
    * @function _textLarge
    * @return {object}
    */
    _textLarge: function(active, logo) {
        return {
            style: {
                margin: "-3vh 0 0 10%",
                color: (logo ? "white" : (active ? "rgba(62,49,117,1)" : "black")),
                fontFamily: "Montserrat, sans-serif",
                fontSize: "3vh",
                letterSpacing: "1px"
            }
        }
    },

    /**
    * Settings for: _textSmall
    *
    * @function _textSmall
    * @return {object}
    */
    _textSmall: function(logo) {
        return {
            style: {
                margin: "0 0 0 10%",
                color: "rgba(175,175,175,1)",
                fontFamily: "Raleway, sans-serif",
                fontSize: "1.5vh",
                letterSpacing: "1px",
                whiteSpace: "nowrap"
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
        var {active, logo, path, texts, ...other} = this.props;
        let _a = this._a();
        let _li = this._li(logo);
        let _text = this._text();
        let _textLarge = this._textLarge(active, logo);
        let _textSmall = this._textSmall(logo);
        return (
            <li style={_li.style}>
                <a href={path} style={_a.style} onClick={(e) => this.handleClick(e, path)}>
                    <div className="textLarge" style={[_text.style, _textLarge.style]}>{texts.large}</div> 
                    <div className="textSmall" style={[_text.style, _textSmall.style]}>{texts.small}</div>  
                </a>
            </li>
        )
    }    
});
module.exports = Radium(NWAireMenuItem);