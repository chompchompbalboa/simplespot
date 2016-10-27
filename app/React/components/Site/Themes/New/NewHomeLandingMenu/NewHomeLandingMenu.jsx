/**
* NewHomeLandingMenu.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* NewHomeLandingMenu
*
* @module NewHomeLandingMenu
*/
class NewHomeLandingMenu extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
    }

    /**
    * Validate the prop types
    *
    * @prop propTypes
    */
    static propTypes = {
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
    }

    /**
    * Settings for: _div
    *
    * @function _div
    * @return {object}
    */
    _div() {
        return {
            style: {
                display: "none",
                fontFamily: "Lato, sans-serif",
                fontWeight: "300",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    width: "100vw",
                    height: "10vh",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center"
                },
                "@media (min-width: 64em)": {
                    margin: "0 0 0 30vw",
                    width: "60vw",
                    height: "30vh",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    letterSpacing: "0.125vw"
                }
            }
        }
    }

    /**
    * Settings for: _container
    *
    * @function _container
    * @return {object}
    */
    _container() {
        return {
            style: {
                display: "none",
                color: "rgb(213,180,101)",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    padding: "1vh 1vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                },
                "@media (min-width: 64em)": {
                    padding: "1.5vh 3vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }
            }
        }
    }

    /**
    * Settings for: _divider
    *
    * @function _divider
    * @return {object}
    */
    _divider() {
        return {
            style: {
                "@media (min-width: 48em) and (max-width: 64em)": {
                    margin: "0 -3vw",
                    width: "1px",
                    height: "3vh",
                    backgroundColor: "white",
                    opacity: "0.25"
                },
                "@media (min-width: 64em)": {
                    width: "1px",
                    height: "3vh",
                    backgroundColor: "white",
                    opacity: "0.25"
                }
            }
        }
    }

    /**
    * Settings for: _home
    *
    * @function _home
    * @return {object}
    */
    _home(active) {
        return {
            style: {
                border: (active === "home" ? "1px solid rgb(213,180,101)" : "none")
            }
        }
    }

    /**
    * Settings for: _about
    *
    * @function _about
    * @return {object}
    */
    _about(active) {
        return {
            style: {
                border: (active === "about" ? "1px solid rgb(213,180,101)" : "none")
            }
        }
    }

    /**
    * Settings for: _menu
    *
    * @function _menu
    * @return {object}
    */
    _menu(active) {
        return {
            style: {
                border: (active === "menu" ? "1px solid rgb(213,180,101)" : "none")
            }
        }
    }

    /**
    * Settings for: _contact
    *
    * @function _contact
    * @return {object}
    */
    _contact(active) {
        return {
            style: {
                border: (active === "contact" ? "1px solid rgb(213,180,101)" : "none")
            }
        }
    }

    /**
    * Settings for: _location
    *
    * @function _location
    * @return {object}
    */
    _location(active) {
        return {
            style: {
                border: (active === "location" ? "1px solid rgb(213,180,101)" : "none")
            }
        }
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        var {activeModule, site, ...other} = this.props;
        let _container = this._container(); 
        let _div = this._div();
        let _divider = this._divider();
        let _home = this._home(activeModule);
        let _about = this._about(activeModule);
        let _menu = this._menu(activeModule);
        let _contact = this._contact(activeModule);
        let _location = this._location(activeModule);
        return (
            <div className="div" style={_div.style}>
                <a href="/">
                    <div className="container" style={[_container.style, _home.style]}>
                        HOME
                    </div>
                </a>
                <div className="divider" style={_divider.style}></div>
                <a href="#about">
                    <div className="container" style={[_container.style, _about.style]}>
                        ABOUT
                    </div>
                </a>
                <div className="divider" style={_divider.style}></div>
                <a href="#menu">
                    <div className="container" style={[_container.style, _menu.style]}>
                        MENU
                    </div>
                </a>
                <div className="divider" style={_divider.style}></div>
                <a href="#about">
                    <div className="container" style={[_container.style, _contact.style]}>
                        CONTACT
                    </div>
                </a>
                <div className="divider" style={_divider.style}></div>
                <a href="#location">
                    <div className="container" style={[_container.style, _location.style]}>
                        LOCATION
                    </div>
                </a>
            </div>
        )
    }    
}
// Export
module.exports = Radium(NewHomeLandingMenu);