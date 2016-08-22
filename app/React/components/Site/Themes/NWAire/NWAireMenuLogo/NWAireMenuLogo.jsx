/**
* NWAireMenuLogo.jsx
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
* @module NWAireMenuLogo
*/
var NWAireMenuLogo = React.createClass({

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
    * Settings for: _a
    *
    * @function _a
    * @return {object}
    */
    _a: function() {
        return {
            style: {
            }
        }
    },

    /**
    * Settings for: _container
    *
    * @function _container
    * @return {object}
    */
    _container: function() {
        return {
            style: {
                zIndex: "1",
                position: "fixed",
                top: "0vh",
                left: "0vw",
                width: "100vw",
                height: "10vh",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                backgroundColor: "transparent"
            }
        }
    },

    /**
    * Settings for: _logo
    *
    * @function _logo
    * @return {object}
    */
    _logo: function(active) {
        let backgroundImage = (active === "logo" ? "url(uploads/57b35f928bcb76f5d65e79fa/menuLogo.png)" : "url(uploads/57b35f928bcb76f5d65e79fa/menuBack.png)")
        return {
            style: {
                margin: "0 0 0 3vh",
                width: "4vh",
                height: "4vh",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundImage: backgroundImage
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
        var {active, changeActive, ...other} = this.props;
        let _a = this._a();
        let _container = this._container(active);
        let _logo = this._logo(active);
        return (
            <div className="container" style={_container.style}>
                <a href="" style={_a.style} onClick={(e) => changeActive(e, active)}>
                    <div className="logo" style={_logo.style}></div>
                </a>
            </div>
        )
    }    
});
module.exports = Radium(NWAireMenuLogo);