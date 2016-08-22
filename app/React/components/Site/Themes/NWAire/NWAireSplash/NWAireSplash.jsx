/**
* NWAireSplash.jsx
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
* @module NWAireSplash
*/
var NWAireSplash = React.createClass({

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
    * Settings for: _imageContainer
    *
    * @function _imageContainer
    * @return {object}
    */
    _imageContainer: function() {
        return {
            style: {
                width: "90%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url(uploads/57b35f928bcb76f5d65e79fa/seattle.jpg)"
            }
        }
    },

    /**
    * Settings for: _section
    *
    * @function _section
    * @return {object}
    */
    _section: function() {
        return {
            style: {
                width: "100%",
                height: "60vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
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
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render: function() {
        var {...other} = this.props;
        let _imageContainer = this._imageContainer();
        let _section = this._section();
        let _textContainer = this._textContainer();
        return (
            <section className="section" style={_section.style}>
                <div className="imageContainer" style={_imageContainer.style}>
                    <div className="textContainer" style={_textContainer.style}>
                        <div>Northwest</div>
                        <div>Aire</div>
                        <div>Services</div>
                    </div>
                </div>
            </section>
        )
    }    
});
module.exports = Radium(NWAireSplash);