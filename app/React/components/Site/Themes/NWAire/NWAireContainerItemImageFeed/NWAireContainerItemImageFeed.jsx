/**
* NWAireContainerItemImageFeed.jsx
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
* @module NWAireContainerItemImageFeed
*/
var NWAireContainerItemImageFeed = React.createClass({

    /**
    * Validate props types
    *
    * @prop propTypes
    * @return {object}
    */
    propTypes: {
        images: React.PropTypes.object.isRequired
    },

    /**
    * Get the default props
    *
    * @function getDefaultProps
    * @return {object}
    */
    getDefaultProps: function() {
        return {
            images: {}
        }
    },

    /**
    * Settings for: _container
    *
    * @function _container
    * @return {object}
    */
    _container: function(images) {
        let length = Object.keys(images).length;
        return {
            style: {
                width: "100%",
                height: (length > 0 ? "12vh" : "0vh"),
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }
        }
    },

    /**
    * Settings for: __images
    *
    * @function __images
    * @return {object}
    */
    __images: function(images) {
        let payload = [];
        let length = Object.keys(images).length;
        let width = 100 / length + "%";
        for (let i in images) {
            let style = {
                margin: "0.5vh 0 0 0",
                width: width,
                height: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url(" + images[i] + ")"
            }
            payload.push(
                <div key={i} style={style}></div>
            )
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
        var {images, ...other} = this.props;
        let _container = this._container(images);
        let __images = this.__images(images);
        return (
            <div className="container" style={_container.style}>
                {__images}
            </div>
        )
    }    
});
module.exports = Radium(NWAireContainerItemImageFeed);