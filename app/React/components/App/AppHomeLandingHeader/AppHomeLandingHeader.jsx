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
    * Settings for: _a
    *
    * @function _a
    * @return {object}
    */
    _a() {
        return {
            style: {
                color: "white"
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
                backgroundImage: "url(assets/App/icons/logo.png)",
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
    * Settings for: _loginLinkContainer
    *
    * @function _loginLinkContainer
    * @return {object}
    */
    _loginLinkContainer() {
        return {
            style: {
            }
        }
    }

    /**
    * Settings for: _loginLink
    *
    * @function _loginLink
    * @return {object}
    */
    _loginLink() {
        return {
            style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "color 0.25s, background-color 0.25s, font-weight 0.25s",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    padding: "1vw 2vw 1vw 2vw",
                    border: "1px solid white",
                    fontSize: "1.25vh"
                },
                "@media (min-width: 64em)": {
                    padding: "0.75vw 1.5vw 0.75vw 1.5vw",
                    border: "1px solid white",
                    fontSize: "1.5vh"
                },
                ":hover": {
                    backgroundColor: "white",
                    color: "black",
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
        let _loginLinkContainer = this._loginLinkContainer();
        let _loginLink = this._loginLink();

        return (
            <div className="div" style={_div.style}>
                <div className="logoContainer" style={_logoContainer.style}>
                    <div className="logoImage" style={_logoImage.style}></div>
                    <div className="logoText" style={_logoText.style}>SIMPLESPOT</div>
                </div>
                <div className="loginLinkContainer" style={_loginLinkContainer.style}>
                    <a href="/login" style={_a.style}>
                        <div className="loginLink" style={_loginLink.style}>LOGIN</div>
                    </a>
                </div>
            </div>
        )
    }    
}
module.exports = Radium(AppHomeLandingHeader);