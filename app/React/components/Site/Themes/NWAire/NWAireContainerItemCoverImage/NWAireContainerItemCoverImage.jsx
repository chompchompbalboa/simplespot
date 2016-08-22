/**
* NWAireContainerItemCoverImage.jsx
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
* @module NWAireContainerItemCoverImage
*/
var NWAireContainerItemCoverImage = React.createClass({

    /**
    * Validate props types
    *
    * @prop propTypes
    * @return {object}
    */
    propTypes: {
        height: React.PropTypes.string.isRequired,
        image: React.PropTypes.string.isRequired,
        text: React.PropTypes.object.isRequired,
    },

    /**
    * Get the default props
    *
    * @function getDefaultProps
    * @return {object}
    */
    getDefaultProps: function() {
        return {
            image: "uploads/57b35f928bcb76f5d65e79fa/seattle.jpg",
            height: "40vh",
            text: {
            }
        }
    },

    /**
    * Settings for: _imageContainer
    *
    * @function _imageContainer
    * @return {object}
    */
    _imageContainer: function(height, image) {
        return {
            style: {
                width: "100%",
                height: height,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url(" + image + ")"
            }
        }
    },

    /**
    * Settings for: _textContainer
    *
    * @function _textContainer
    * @return {object}
    */
    _textContainer: function() {
        return {
            style: {
                width: "95%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end",
                fontFamily: "Play, sans-serif",
                fontSize: "48px",
                color: "white"
            }
        }
    },

    /**
    * Settings for: __text
    *
    * @function __text
    * @return {object}
    */
    __text: function(text) {
        let payload = [];
        for (let i in text) {
            payload.push(
                <div key={i}>{text[i]}</div>
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
        var {height, image, text, ...other} = this.props;
        let _imageContainer = this._imageContainer(height, image);
        let _textContainer = this._textContainer();
        let __text = this.__text(text);
        return (
            <div className="imageContainer" style={_imageContainer.style}>
                <div className="textContainer" style={_textContainer.style}>{__text}</div>
            </div>
        )
    }    
});
module.exports = Radium(NWAireContainerItemCoverImage);