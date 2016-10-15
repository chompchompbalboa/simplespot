/**
* AppComingSoon.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* The page a guest to our application sees
*
* @module AppComingSoon
*/
class AppComingSoon extends React.Component {

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
    * Settings for: _boldText
    *
    * @function _boldText
    * @return {object}
    */
    _boldText() {
        return {
            style: {
                fontWeight: "bold"
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
                width: "85vw",
                height: "1px",
                backgroundColor: "white",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    width: "75vw"
                },
                "@media (min-width: 64em)": {
                    width: "80vw"
                }
            }
        }
    }

    /**
    * Settings for: _dividerContainer
    *
    * @function _dividerContainer
    * @return {object}
    */
    _dividerContainer() {
        return {
            style: {
                width: "100vw",
                height: "10vh",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    height: "10vh"
                },
                "@media (min-width: 64em)": {
                    height: "10cvh"
                }
            }
        }
    }

    /**
    * Settings for: _largeText
    *
    * @function _largeText
    * @return {object}
    */
    _largeText() {
        return {
            style: {
                margin: "0 0 10vh 0",
                fontSize: "6vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    fontSize: "4vw"
                },
                "@media (min-width: 64em)": {
                    fontSize: "3vw"
                }
            }
        }
    }

    /**
    * Settings for: _logo
    *
    * @function _logo
    * @return {object}
    */
    _logo() {
        return {
            style: {
                width: "85vw",
                height: "25vh",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-end",
                fontFamily: "Josefin Sans, sans-serif",
                fontSize: "14vw",
                fontWeight: "100",
                letterSpacing: "0.5vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    height: "20vh",
                    fontSize: "10vw"
                },
                "@media (min-width: 64em)": {
                    fontSize: "5vw"
                }
            }
        }
    }

    /**
    * Settings for: _section
    *
    * @function _section
    * @return {object}
    */
    _section() {
        return {
            style: {
                position: "fixed",
                top: "0vh",
                left: "0vw",
                width: "100vw",
                height: "100vh",
                backgroundPosition: "center center",
                backgroundRepeat: "no repeat",
                backgroundSize: "cover",
                backgroundImage: "url(assets/App/AppComingSoon/background.jpg)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                color: "white"
            }
        }
    }

    /**
    * Settings for: _smallText
    *
    * @function _smallText
    * @return {object}
    */
    _smallText() {
        return {
            style: {
                margin: "0 0 3vh 0",
                width: "100%",
                fontSize: "3.5vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    fontSize: "2.5vw"
                },
                "@media (min-width: 64em)": {
                    letterSpacing: "0.15vw",
                    fontSize: "1.75vw"
                }
            }
        }
    }
    /**
    * Settings for: _textContainer
    *
    * @function _textContainer
    * @return {object}
    */
    _textContainer() {
        return {
            style: {
                width: "85vw",
                display: "flex",
                flexFlow: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                fontFamily: "Open Sans, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.5vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
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
        let _boldText = this._boldText();
        let _divider = this._divider();
        let _dividerContainer = this._dividerContainer();
        let _largeText = this._largeText();
        let _logo = this._logo();
        let _section = this._section();
        let _smallText = this._smallText();
        let _textContainer = this._textContainer();
        return (
            <section className="section" style={_section.style}>
                <div className="logo" style={_logo.style}>simplespot</div>
                <div className="dividerContainer" style={_dividerContainer.style}>
                    <div className="divider" style={_divider.style}></div>
                </div>
                <div className="textContainer" style={_textContainer.style}>
                    <div className="largeText" style={_largeText.style}>
                        Something <span style={_boldText.style}>really good</span><br /> is coming <span style={_boldText.style}>very soon</span>
                    </div>
                    <div className="smallText" style={_smallText.style}>
                        We are currently in an invitation-only beta phase.
                    </div>
                    <div className="smallText" style={_smallText.style}>
                        If you recieved an invite from us and have more questions, responding to the email is the fastest way to get in touch with us! We hope you love the site we built you!
                    </div>
                </div>
            </section>
        )
    }    
}
module.exports = Radium(AppComingSoon);