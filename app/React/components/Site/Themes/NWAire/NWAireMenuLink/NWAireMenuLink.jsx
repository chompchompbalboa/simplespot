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

var contentActions = require('../../../../../actions/contentActions');

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
    handleClick: function(e, path) {
        e.preventDefault();
        let changes = [
            {key: "site.display.path", value: path}
        ];
        contentActions.changeContent(changes);
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
                justifyContent: "center",
                alignItems: "flex-start"
            }
        }
    },

    /**
    * Settings for: _image
    *
    * @function _image
    * @return {object}
    */
    _image: function() {
        return {
            style: {
                width: "100%",
                height: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundImage: "url(uploads/57b35f928bcb76f5d65e79fa/placeholder.jpg)",
            }
        }
    },

    /**
    * Settings for: _imageContainer
    *
    * @function _imageContainer
    * @return {object}
    */
    _imageContainer: function(side) {
        return {
            style: {
                order: (side === "left" ? "2" : "1"),
                width: "60%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
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
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "100%",
                height: (logo ? "28vh" : "18vh"),
                backgroundColor: (logo ? "rgba(26,51,0,1)" : "white"),
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
    * Settings for: _textContainer
    *
    * @function _textContainer
    * @return {object}
    */
    _textContainer: function(side) {
        return {
            style: {
                order: (side === "left" ? "1" : "2"),
                width: "40%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: (side === "left" ? "flex-start" : "flex-end")
            }
        }
    },

    /**
    * Settings for: _textLarge
    *
    * @function _textLarge
    * @return {object}
    */
    _textLarge: function(side) {
        return {
            style: {
                margin: (side === "left" ? "0 0 0 15%" : "0 15% 0 0"),
                color: "black",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "3vh",
                letterSpacing: "1px",
                textTransform: "uppercase"
            }
        }
    },

    /**
    * Settings for: _textSmall
    *
    * @function _textSmall
    * @return {object}
    */
    _textSmall: function(side) {
        return {
            style: {
                margin: (side === "left" ? "0 0 0 15%" : "0 15% 0 0"),
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
        var {active, image, path, side, texts, ...other} = this.props;
        let _a = this._a();
        let _image = this._image();
        let _imageContainer = this._imageContainer(side);
        let _li = this._li();
        let _text = this._text();
        let _textContainer = this._textContainer(side);
        let _textLarge = this._textLarge(side);
        let _textSmall = this._textSmall(side);
        return (
            <li style={_li.style}>
                <a href={path} style={_a.style} onClick={(e) => this.handleClick(e, path)}>
                    <div className="textContainer" style={_textContainer.style}>
                        <div className="textLarge" style={[_text.style, _textLarge.style]}>{texts.large}</div> 
                        <div className="textSmall" style={[_text.style, _textSmall.style]}>{texts.small}</div> 
                    </div>
                    <div className="imageContainer" style={_imageContainer.style}>
                        <div className="image" style={_image.style}>
                        </div>
                    </div>
                </a>
            </li>
        )
    }    
});
module.exports = Radium(NWAireMenuItem);