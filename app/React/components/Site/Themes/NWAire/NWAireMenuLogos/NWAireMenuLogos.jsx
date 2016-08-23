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
    * Settings for: _emailLogo
    *
    * @function _emailLogo
    * @return {object}
    */
    _emailLogo: function(active) {
        return {
            style: {
                margin: "0 3vh 0 0",
                width: "3.8vh",
                height: "2.25vh",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundImage: "url(uploads/57b35f928bcb76f5d65e79fa/emailLogo.png)"
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
                zIndex: "2",
                position: "fixed",
                backfaceVisibility: "hidden",
                top: "0vh",
                left: "0vw",
                width: "100vw",
                height: "10vh",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "white",
                transition: "top 0.25s"
            }
        }
    },

    /**
    * Settings for: _leftContainer
    *
    * @function _leftContainer
    * @return {object}
    */
    _leftContainer: function() {
        return {
            style: {
                width: "15%",
                height: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center"
            }
        }
    },

    /**
    * Settings for: _menuLogo
    *
    * @function _menuLogo
    * @return {object}
    */
    _menuLogo: function(active) {
        let backgroundImage = (active === "logo" ? "url(uploads/57b35f928bcb76f5d65e79fa/menuLogo.png)" : "url(uploads/57b35f928bcb76f5d65e79fa/menuBack.png)")
        return {
            style: {
                margin: "0 0 0 3.5vh",
                width: "3vh",
                height: "3vh",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundImage: backgroundImage
            }
        }
    },

    /**
    * Settings for: _phoneLogo
    *
    * @function _phoneLogo
    * @return {object}
    */
    _phoneLogo: function(active) {
        return {
            style: {
                margin: "0 3vh 0 0",
                width: "3vh",
                height: "3vh",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundImage: "url(uploads/57b35f928bcb76f5d65e79fa/phoneLogo.png)"
            }
        }
    },

    /**
    * Settings for: _rightContainer
    *
    * @function _rightContainer
    * @return {object}
    */
    _rightContainer: function() {
        return {
            style: {
                width: "30%",
                height: "100%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center"
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
        let _emailLogo = this._emailLogo(active);
        let _container = this._container();
        let _leftContainer = this._leftContainer(active);
        let _menuLogo = this._menuLogo(active);
        let _phoneLogo = this._phoneLogo(active);
        let _rightContainer = this._rightContainer(active);
        return (
            <div className="container" style={_container.style}>
                <div className="leftContainer" style={_leftContainer.style}>
                    <a href="" style={_a.style} onClick={(e) => changeActive(e, active)}>
                        <div className="menuLogo" style={_menuLogo.style}></div>
                    </a>
                </div>
                <div className="rightContainer" style={_rightContainer.style}>
                    <a href="" style={_a.style} onClick={(e) => changeActive(e, active)}>
                        <div className="emailLogo" style={_emailLogo.style}></div>
                    </a>
                    <a href="" style={_a.style} onClick={(e) => changeActive(e, active)}>
                        <div className="phoneLogo" style={_phoneLogo.style}></div>
                    </a>
                </div>
            </div>
        )
    }    
});
module.exports = Radium(NWAireMenuLogo);