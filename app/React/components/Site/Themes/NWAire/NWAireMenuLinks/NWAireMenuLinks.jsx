/**
* NWAireMenuLinks.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* NWAireMenuLinks
*
* @module NWAireMenuLinks
*/
class NWAireMenuLinks extends React.Component {

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
    * Settings for: _a
    *
    * @function _a
    * @return {object}
    */
    _a() {
        return {
            style: {
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
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
    _container(active) {
        return {
            style: {
                width: "100%",
                height: "7vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderBottom: "1px solid gray",
                backgroundColor: (active ? "rgb(15,15,15)" : "transparent"),
                color: (active ? "rgb(37,133,251)" : "white"),
                ":hover": {
                    backgroundColor: "rgb(15,15,15)",
                    color: "rgb(37,133,251)",   
                }
            }
        }
    }

    /**
    * Settings for: _topContainer
    *
    * @function _topContainer
    * @return {object}
    */
    _topContainer() {
        return {
            style: {
                borderTop: "1px solid gray",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
            }
        }
    }

    /**
    * Settings for: _nav
    *
    * @function _nav
    * @return {object}
    */
    _nav() {
        return {
            style: {
                display: "none",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    margin: "10vh 0 0 0",
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                }
            }
        }
    }

    /**
    * Settings for: _text
    *
    * @function _text
    * @return {object}
    */
    _text() {
        return {
            style: {
                width: "85%",
                fontFamily: "Open Sans, sans-serif",
                fontSize: "1.25vw",
                fontWeight: "700",
                letterSpacing: "0.05vw",
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
        var {active, ...other} = this.props;
        let _a = this._a();
        let _home = this._container((active === "home" ? true : false));
        let _about = this._container((active === "about" ? true : false));
        let _services = this._container((active === "services" ? true : false));
        let _contact = this._container((active === "contact" ? true : false));
        let _topContainer = this._topContainer();
        let _nav = this._nav(); 
        let _text = this._text();
        return (
            <nav className="nav" style={_nav.style}>
                <a href="/" style={_a.style}>
                    <div key="home" className="container" style={[_home.style, _topContainer.style]}>
                        <div className="text" style={_text.style}>HOME</div>
                    </div>
                </a>
                <a href="/" style={_a.style}>
                    <div key="about" className="about" style={_about.style}>
                        <div className="text" style={_text.style}>ABOUT</div>
                    </div>
                </a>
                <a href="/" style={_a.style}>
                    <div key="services" className="services" style={_services.style}>
                        <div className="text" style={_text.style}>SERVICES</div>
                    </div>
                </a>
                <a href="/" style={_a.style}>
                    <div key="contact" className="contact" style={_contact.style}>
                        <div className="text" style={_text.style}>CONTACT</div>
                    </div>
                </a>
            </nav>
        )
    }    
}
// Export
module.exports = Radium(NWAireMenuLinks);