/**
* AppHomeLandingHeader.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const contentActions = require('../../../actions/contentActions');

/**
* AppHomeLandingHeader
*
* @module AppHomeLandingHeader
*/
class AppHomeLandingHeader extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props)
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
    * Settings for: handleLogoutClick
    *
    * @function handleLogoutClick
    * @return {object}
    */
    handleLogoutClick(e) {
        e.preventDefault();
        let data = {};
        contentActions.fetchContent("LOGOUT_APP", data);
    }

    /**
    * Settings for: _a
    *
    * @function _a
    * @return {object}
    */
    _a() {
        return {
            style: {
                color: "black"
            }
        }
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
                width: "90vw",
                height: "10vh",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "2vh",
                letterSpacing: "0.25vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    letterSpacing: "0.1875vw"
                },
                "@media (min-width: 64em)": {
                    letterSpacing: "0.125vw"
                }
            }
        }
    }

    /**
    * Settings for: _logoContainer
    *
    * @function _logoContainer
    * @return {object}
    */
    _logoContainer() {
        return {
            style: {
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center"
            }
        }
    }

    /**
    * Settings for: _logoImage
    *
    * @function _logoImage
    * @return {object}
    */
    _logoImage() {
        return {
            style: {
                height: "2.5vh",
                width: "2.5vh",
                backgroundPosition: "center center",
                backgroundRepeat: "no repeat",
                backgroundSize: "cover",
                backgroundImage: "url(assets/App/icons/logo_black.png)",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    height: "2vh",
                    width: "2vh"
                },
                "@media (min-width: 64em)": {

                }
            }
        }
    }

    /**
    * Settings for: _logoText
    *
    * @function _logoText
    * @return {object}
    */
    _logoText() {
        return {
            style: {
                margin: "0 0 0 1.5vw",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    margin: "0 0 0 1vw",
                    fontSize: "1.75vh"
                },
                "@media (min-width: 64em)": {
                    margin: "0 0 0 0.75vw"
                }
            }
        }
    }

    /**
    * Settings for: _logoutLinkContainer
    *
    * @function _logoutLinkContainer
    * @return {object}
    */
    _logoutLinkContainer() {
        return {
            style: {
            }
        }
    }

    /**
    * Settings for: _logoutLink
    *
    * @function _logoutLink
    * @return {object}
    */
    _logoutLink() {
        return {
            style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "color 0.25s, background-color 0.25s, font-weight 0.25s",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    padding: "1vw 2vw 1vw 2vw",
                    border: "1px solid black",
                    fontSize: "1.25vh"
                },
                "@media (min-width: 64em)": {
                    padding: "0.75vw 1.5vw 0.75vw 1.5vw",
                    border: "1px solid black",
                    fontSize: "1.5vh"
                },
                ":hover": {
                    backgroundColor: "black",
                    color: "white",
                    fontWeight: "400"
                }
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
        let {...other} = this.props;
        let _a = this._a();
        let _div = this._div();
        let _logoContainer = this._logoContainer();
        let _logoImage = this._logoImage();
        let _logoText = this._logoText();
        let _logoutLinkContainer = this._logoutLinkContainer();
        let _logoutLink = this._logoutLink();

        return (
            <div className="div" style={_div.style}>
                <div className="logoContainer" style={_logoContainer.style}>
                    <div className="logoImage" style={_logoImage.style}></div>
                    <div className="logoText" style={_logoText.style}>SIMPLESPOT</div>
                </div>
                <div className="logoutLinkContainer" style={_logoutLinkContainer.style}>
                    <a href="/logout" style={_a.style} onClick={(e) => this.handleLogoutClick(e)}>
                        <div className="logoutLink" style={_logoutLink.style}>LOGOUT</div>
                    </a>
                </div>
            </div>
        )
    }    
}
module.exports = Radium(AppHomeLandingHeader);