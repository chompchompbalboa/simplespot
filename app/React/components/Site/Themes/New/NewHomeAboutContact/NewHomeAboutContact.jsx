/**
* NewHomeAboutContact.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* NewHomeAboutContact
*
* @module NewHomeAboutContact
*/
class NewHomeAboutContact extends React.Component {

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
    * Settings for: _container
    *
    * @function _container
    * @return {object}
    */
    _container() {
        return {
            style: {
                margin: "0 0 1.5vh 0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "@media (min-width: 48em) and (max-width: 64em)": {
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
                margin: "5vh 0 0 0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    margin: "10vh 0 0 5vw",
                    width: "40vw",
                    justifyContent: "center",
                    alignItems: "center",
                },
                "@media (min-width: 64em)": {
                    justifyContent: "center",
                    alignItems: "flex-start",
                    margin: "20vh 0 0 -3vw",
                    order: "3",
                    width: "17.5vw"
                }
            }
        }
    }

    /**
    * Settings for: _email
    *
    * @function _email
    * @return {object}
    */
    _email(email) {
        return {
            style: {
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
            },
            text: (typeof email !== "undefined" ? email : "info@simplespot.co")
        }
    }

    /**
    * Settings for: _emailLogo
    *
    * @function _emailLogo
    * @return {object}
    */
    _emailLogo() {
        return {
            style: {
                width: "5.12vw",
                height: "3.44vw",
                backgroundImage: "url(/stock/New/email.png)",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    width: "2.56vw",
                    height: "1.77vw",
                },
                "@media (min-width: 64em)": {
                    width: "1.81vw",
                    height: "1.15vw",
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
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
            }
        }
    }

    /**
    * Settings for: _phone
    *
    * @function _phone
    * @return {object}
    */
    _phone(phone) {
        return {
            style: {
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
            },
            text: (typeof phone !== "undefined" ? phone : "2065550100")
        }
    }

    /**
    * Settings for: _phoneLogo
    *
    * @function _phoneLogo
    * @return {object}
    */
    _phoneLogo() {
        return {
            style: {
                width: "4.5vw",
                height: "4.5vw",
                backgroundImage: "url(/stock/New/phone.png)",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    width: "2.25vw",
                    height: "2.25vw",
                },
                "@media (min-width: 64em)": {
                    width: "1.6vw",
                    height: "1.6vw",
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
                margin: "0 0 0 3vw",
                color: "black",
                fontFamily: "Lato, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.2vw", 
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                margin: "0 0 0 1.25vw",
                letterSpacing: "0.05vw", 
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
        let _container = this._container(); 
        let _div = this._div(); 
        let _email = this._email(site.seed.email[0]); 
        let _emailLogo = this._emailLogo(); 
        let _logo = this._logo(); 
        let _phone = this._phone(site.seed.phone); 
        let _phoneLogo = this._phoneLogo(); 
        let _text = this._text(); 
        return (
            <div className="div" style={_div.style}>
                <a href={"tel:" + _phone.text}>
                    <div className="container" style={_container.style}>
                        <div className="phoneLogo" style={[_logo.style, _phoneLogo.style]}></div>
                        <div className="phoneText" style={_text.style}>{_phone.text}</div> 
                    </div>
                </a>
                <a href={"mailto:" + _email.text}>
                    <div className="container" style={_container.style}>
                        <div className="emailLogo" style={[_logo.style, _emailLogo.style]}></div>
                        <div className="emailText" style={_text.style}>Email Us</div> 
                    </div>
                </a>
            </div>
        )
    }    
}
// Export
module.exports = Radium(NewHomeAboutContact);