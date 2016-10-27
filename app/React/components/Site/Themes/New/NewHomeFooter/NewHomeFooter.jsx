/**
* NewHomeFooter.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* NewHomeFooter
*
* @module NewHomeFooter
*/
class NewHomeFooter extends React.Component {

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
    * Settings for: _address
    *
    * @function _address
    * @return {object}
    */
    _address() {
        return {
            style: {
                margin: "0 0 3vh 0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                fontWeight: "400",
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
    _container() {
        return {
            style: {
                margin: "0 0 1.5vh 0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    margin: "0 0 0 0"
                },
                "@media (min-width: 64em)": {
                    margin: "0 0 0 0"
                }
            }
        }
    }

    /**
    * Settings for: _contact
    *
    * @function _contact
    * @return {object}
    */
    _contact() {
        return {
            style: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    alignItems: "flex-start"
                },
                "@media (min-width: 64em)": {
                    display: "none",
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
                order: "5",
                padding: "5vh 0 0 0",
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Lato, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.1vw",
                backgroundColor: "rgba(250,250,250,1)",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    padding: "2vh 0 0 0",
                    flexDirection: "row",
                    justifyContent: "space-around"
                },
                "@media (min-width: 64em)": {
                    order: "4",
                    padding: "2vh 0 0 0",
                    flexDirection: "row",
                    justifyContent: "space-around",
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
    * Settings for: _name
    *
    * @function _name
    * @return {object}
    */
    _name(name) {
        return {
            style: {
                margin: "0 0 3vh 0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                fontSize: "6vw",
                fontWeight: "900",
                textTransform: "uppercase",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    fontSize: "3.5vw"
                },
                "@media (min-width: 64em)": {
                    fontSize: "2.5vw"
                }
            },
            text: name
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
    * Settings for: _region
    *
    * @function _region
    * @return {object}
    */
    _region(city, state, zip) {
        return {
            style: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
            },
            text: city + ", " + state + " " + zip
        }
    }

    /**
    * Settings for: _street
    *
    * @function _street
    * @return {object}
    */
    _street(address) {
        return {
            style: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
            },
            text: address
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
                "@media (min-width: 48em) and (max-width: 64em)": {
                    margin: "0 0 0 1.5vw",
                },
                "@media (min-width: 64em)": {
                    margin: "0 0 0 0",
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
        let seed = site.seed;
        let _address = this._address();
        let _contact = this._contact(); 
        let _container = this._container(); 
        let _div = this._div(); 
        let _email = this._email(seed.email[0]); 
        let _emailLogo = this._emailLogo(); 
        let _logo = this._logo(); 
        let _name = this._name(seed.name); 
        let _phone = this._phone(seed.phone); 
        let _phoneLogo = this._phoneLogo(); 
        let _street = this._street(seed.address);
        let _region = this._region(seed.city, seed.state, seed.zip);
        let _text = this._text(); 
        return (
            <div id="contact" className="div" style={_div.style}>
                <div className="name" style={_name.style}>{_name.text}</div>
                <div className="address" style={_address.style}>
                    <div className="street" style={_street.style}>{_street.text}</div>
                    <div className="region" style={_region.style}>{_region.text}</div>
                </div>
                <div className="contact" style={_address.style}>
                    <a href={"tel:" + _phone.text}>
                        <div className="container" style={_container.style}>
                            <div className="phoneText" style={_text.style}>{_phone.text}</div> 
                        </div>
                    </a>
                    <a href={"mailto:" + _email.text}>
                        <div className="container" style={_container.style}>
                            <div className="emailText" style={_text.style}>{_email.text}</div> 
                        </div>
                    </a>
                </div>
            </div>
        )
    }    
}
// Export
module.exports = Radium(NewHomeFooter);