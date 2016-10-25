/**
* NewHomeLandingContentMain.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* NewHomeLandingContentMain
*
* @module NewHomeLandingContentMain
*/
class NewHomeLandingContentMain extends React.Component {

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
    * Settings for: _div
    *
    * @function _div
    * @return {object}
    */
    _div() {
        return {
            style: {
                order: "1",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    order: "2"
                },
                "@media (min-width: 64em)": {
                    order: "2"
                }
            }
        }
    }

    /**
    * Settings for: _name
    *
    * @function _name
    * @return {object}
    */
    _name(name) {
        return {
            style: {
                margin: "0 0 3vh 0",
                fontFamily: "Lato, sans-serif",
                fontSize: "8vw",
                fontWeight: "900",
                textTransform: "uppercase",
                letterSpacing: "0.5vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
            },
            text: (typeof name !== "undefined" ? name : "Your Restaurant")
        }
    }

    /**
    * Settings for: _about
    *
    * @function _about
    * @return {object}
    */
    _about(about) {
        return {
            style: {
                margin: "0 0 5vh 0",
                fontFamily: "Alegreya, sans-serif",
                fontSize: "5vw",
                fontStyle: "italic",
                fontWeight: "400",
                letterSpacing: "0.125vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
            },
            text: (typeof about !== "undefined" ? about : "Fresh, beautiful and delicious sushi in a setting perfect for any occasion.")
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
                },
                "@media (min-width: 64em)": {
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
                    width: (this.state.menuLinkArrow === "left" ? "7vw" : "3vw"),
                    margin: (this.state.menuLinkArrow === "left" ? "0 0 0 0" : "0 0 0 4vw")
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
        let _div = this._div(); 
        let _name = this._name(site.seed.name); 
        let _about = this._about(site.seed.about);
        let _menuLink = this._menuLink();
        let _menuLinkArrow = this._menuLinkArrow(); 
        return (
            <div className="div" style={_div.style}>
                <div className="name" style={_name.style}>{_name.text}</div>
                <div className="about" style={_about.style}>{_about.text}</div>
                <a href="#menu">
                    <div className="menuLink" style={_menuLink.style} onMouseEnter={this.moveMouseLinkArrow} onMouseLeave={this.moveMouseLinkArrow}>
                        View Menu <div className="menuLinkArrow" style={_menuLinkArrow.style}>&rarr;</div>
                    </div>
                </a>
            </div>
        )
    }    
}
// Export
module.exports = Radium(NewHomeLandingContentMain);