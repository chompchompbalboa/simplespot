/**
* NewHomeAboutWelcome.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* NewHomeAboutWelcome
*
* @module NewHomeAboutWelcome
*/
class NewHomeAboutWelcome extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
        this.state = {
            menuLinkArrow: "left"
        }
        this.moveMouseLinkArrow = this.moveMouseLinkArrow.bind(this);
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
    * Move Mouse Link Arrow
    *
    * @function moveMouseLinkArrow
    * @return {object}
    */
    moveMouseLinkArrow() {
        this.setState({
            menuLinkArrow: (this.state.menuLinkArrow === "left" ? "right" : "left")
        });
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
                "@media (min-width: 48em) and (max-width: 64em)": {
                    margin: "0 0 0 5vw",
                    width: "25vw"
                },
                "@media (min-width: 64em)": {
                }
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
                width: "85vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    flexFlow: "row wrap"
                },
                "@media (min-width: 64em)": {
                    alignItems: "flex-start",
                    order: "2",
                    width: "47.5vw",
                    borderLeft: "1px solid rgba(0,0,0,0.1)",
                    padding: "0 0 0 7.5vw",
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
                margin: "5vh 0 3vh 0",
                fontFamily: "Lato, sans-serif",
                fontSize: "8vw",
                fontWeight: "900",
                textTransform: "uppercase",
                letterSpacing: "0.5vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    textAlign: "center",
                    width: "90vw",
                    fontSize: "6vw"
                },
                "@media (min-width: 64em)": {
                    fontSize: "4vw"
                }
            },
        }
    }

    /**
    * Settings for: _smallText
    *
    * @function _smallText
    * @return {object}
    */
    _smallText(about) {
        return {
            style: {
                fontFamily: "Open Sans, sans-serif",
                fontSize: "4vw",
                fontWeight: "300",
                letterSpacing: "0.1vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    width: "45vw",
                    fontSize: "2.125vw"
                },
                "@media (min-width: 64em)": {
                    width: "40vw",
                    fontSize: "1.25vw",
                    letterSpacing: "none",
                    color: "gray"
                }
            },
            text: (typeof about !== "undefined" ? about : "Our mission is simple: offer excellent yet affordable Japanese cuisine. Every menu item is proudly prepared right here in our kitchen - we believe in serving our customers food that we are proud to eat ourselves; a blend of our childhood memories growing up and some favorite dishes along the way. We are looking forward to seeing you soon!")
        }
    }

    /**
    * Settings for: _menuLink
    *
    * @function _menuLink
    * @return {object}
    */
    _menuLink() {
        return {
            style: {
                margin: "5vh 0 5vh 0",
                cursor: "pointer",
                padding: "1.1vh 3.5vw",
                fontFamily: "Open Sans, sans-serif",
                fontSize: "4vw",
                fontWeight: "400",
                letterSpacing: "0.25vw",
                textTransform: "uppercase",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                border: "1px solid rgb(213,180,101)",
                color: "rgb(213,180,101)",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    fontSize: "2.125vw",
                    width: "25vw",
                },
                "@media (min-width: 64em)": {
                    padding: "1.25vh 2vh",
                    fontSize: "1.25vw"
                }
            }
        }
    }

    /**
    * Settings for: _menuLinkArrow
    *
    * @function _menuLinkArrow
    * @return {object}
    */
    _menuLinkArrow() {
        return {
            style: {
                margin: "0 0 0 3vw",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                transition: "margin 0.35s ease, width 0.35s ease",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    margin: (this.state.menuLinkArrow === "left" ? "0 0 0 1vw" : "0 0 0 2vw")
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
        var {site, ...other} = this.props;
        let _a = this._a(); 
        let _div = this._div(); 
        let _largeText = this._largeText(); 
        let _smallText = this._smallText(site.seed.aboutLong);
        let _menuLink = this._menuLink();
        let _menuLinkArrow = this._menuLinkArrow(); 
        return (
            <div className="div" style={_div.style}>
                <div className="largeText" style={_largeText.style}>WELCOME!</div>
                <div className="smallText" style={_smallText.style}>{_smallText.text}</div>
                <a href="#location" style={_a.style}>
                    <div className="menuLink" style={_menuLink.style} onMouseEnter={this.moveMouseLinkArrow} onMouseLeave={this.moveMouseLinkArrow}>
                        Our Location <div className="menuLinkArrow" style={_menuLinkArrow.style}>&rarr;</div>
                    </div>
                </a>
            </div>
        )
    }    
}
// Export
module.exports = Radium(NewHomeAboutWelcome);