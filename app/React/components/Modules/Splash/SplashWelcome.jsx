/**
* SplashWelcome.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

/**
* This module renders the the welcome message the app editor
*
* @module SplashWelcome
*/
var SplashWelcome = React.createClass({

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
            section: {
                style: {}
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
                width: "100vw",
                height: "60vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(uploads/5776dd982cb85ae0b1b350e7/welcome_sm.jpg)",
                "@media (min-width: 64em)": {
                    width: "calc(100vw - 2vw)",
                    height: "calc(100vh - 2vw)",
                }
            }
        }
    },

    /**
    * Settings for: _formContainer
    *
    * @function _formContainer
    * @return {object}
    */
    _formContainer: function() {
        return {
            style: {
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "titilliumlight",
                "@media (min-width: 64em)": {
                    width: "40%"
                }
            }
        }
    },

    /**
    * Settings for: _header
    *
    * @function _header
    * @return {object}
    */
    _header: function() {
        return {
            style: {
                width: "100%",
                height: "10vh",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                "@media (min-width: 64em)": {
                    height: "15vh"
                }
            }
        }
    },

    /**
    * Settings for: _largeText
    *
    * @function _largeText
    * @return {object}
    */
    _largeText: function() {
        return {
            style: {
                margin: "0 0 1vh 0",
                fontSize: "3.5vh",
                whiteSpace: "nowrap",
                "@media (min-width: 64em)": {
                    margin: "0 0 1vh 10vw",
                    fontSize: "5vh"
                }
            },
            text: "Let's build you a better website"
        }
    },

    /**
    * Settings for: _logo
    *
    * @function _logo
    * @return {object}
    */
    _logo: function() {
        return {
            style: {
                width: "3.5vh",
                height: "3.5vh",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: "url(uploads/5776dd982cb85ae0b1b350e7/logo_black.png)",
                "@media (min-width: 64em)": {
                    width: "5vh",
                    height: "5vh"
                }
            }
        }
    },

    /**
    * Settings for: _logoContainer
    *
    * @function _logoContainer
    * @return {object}
    */
    _logoContainer: function() {
        return {
            style: {
                width: "10vh",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "@media (min-width: 64em)": {
                    width: "15vh"
                }
            }
        }
    },

    /**
    * Settings for: _splashContainer
    *
    * @function _splashContainer
    * @return {object}
    */
    _splashContainer: function() {
        return {
            style: {
                width: "100%",
                height: "50vh",
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "space-around",
                alignItems: "center",
                "@media (min-width: 64em)": {
                    height: "calc(85vh - 1vw)"
                }
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
                width: "100vw",
                height: "60vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "@media (min-width: 64em)": {
                    height: "100vh"
                }
            }
        }
    },

    /**
    * Settings for: _smallText
    *
    * @function _smallText
    * @return {object}
    */
    _smallText: function() {
        return {
            style: {
                margin: "0 0 3vh 0",
                fontSize: "2vh",
                "@media (min-width: 64em)": {
                    margin: "0 0 20vh 10vw",
                    width: "75%",
                    fontSize: "2.5vh"
                }
            },
            text: "We're a brand new digital design and development agency. Specializing in website redesign, we deliver beautiful products on budget and on time."
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
                width: "90%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-start",
                color: "white",
                fontFamily: "titilliumlight",
                "@media (min-width: 64em)": {
                    width: "60%"
                }
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
        let _container = this._container();
        let _formContainer = this._formContainer();
        let _header = this._header();
        let _largeText = this._largeText();
        let _logo = this._logo();
        let _logoContainer = this._logoContainer();
        let _section = this._section();
        let _smallText = this._smallText();
        let _splashContainer = this._splashContainer();
        let _textContainer = this._textContainer();
        return (
            <section className="section" style={_section.style}>
                <div className="container" style={_container.style}>
                    <div className="header" style={_header.style}>
                        <div className="logoContainer" style={_logoContainer.style}>
                            <div className="logo" style={_logo.style}></div>
                        </div>
                    </div>
                    <div className="splashContainer" style={_splashContainer.style}>
                        <div className="textContainer" style={_textContainer.style}>
                            <div className="largeText" style={_largeText.style}>{_largeText.text}</div>
                            <div className="smallText" style={_smallText.style}>{_smallText.text}</div>
                        </div>
                        <div className="formContainer" style={_formContainer.style}>
                        </div>
                    </div>
                </div>
            </section>
        )
    }    
});
module.exports = Radium(SplashWelcome);