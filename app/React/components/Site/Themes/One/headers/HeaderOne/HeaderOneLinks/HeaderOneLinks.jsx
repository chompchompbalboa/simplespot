/**
* HeaderOneLinks.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const contentActions = require('../../../../../../../actions/contentActions');

/**
* HeaderOneLinks
*
* @module HeaderOneLinks
*/
class HeaderOneLinks extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
        this._locationText = this._locationText.bind(this);
    }

    /**
    * Validate the prop types
    *
    * @prop propTypes
    */
    static propTypes = {
        location: React.PropTypes.shape({
            address: React.PropTypes.string.isRequired,
            locality: React.PropTypes.string.isRequired,
            name: React.PropTypes.string.isRequired,
            postalCode: React.PropTypes.string.isRequired,
            region: React.PropTypes.string.isRequired,
        }).isRequired,
        phone: React.PropTypes.string.isRequired
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = { 
        location: {
            address: "400 Broad St.",
            locality: "Seattle",
            name: "Space Needle",
            postalCode: "98109",
            region: "WA"
        },
        phone: "206-905-2100"
    }

    /**
    * Get Location Href
    *
    * @function getLocationHref
    * @return string
    */
    getLocationHref(address, locality, name, postalCode, region) {
        // Build Google Maps link
        let query = (
            name.replace(/ /g, "+") + "," +  
            address.replace(/ /g, "+") + "," +  
            locality.replace(/ /g, "+") + "," +  
            region.replace(/ /g, "+") + "," +  
            postalCode.replace(/ /g, "+")
        );
        if (/Mobi/.test(navigator.userAgent)) { 
            return "http://maps.apple.com/?address=" + query;
        }
        else {
            return "https://www.google.com/maps/place/" + query;
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
                margin: "0 0 0 2vw",
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
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
            }
        }
    }

    /**
    * Settings for: _locationLogo
    *
    * @function _locationLogo
    * @return {object}
    */
    _locationLogo() {
        return {
            style: {
                backgroundImage: "url(/stock/logos/location.png)",
                display: "none",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    display: "none"
                },
                "@media (min-width: 64em)": {
                    display: "block"
                }   
            }
        }
    }

    /**
    * Settings for: _locationText
    *
    * @function _locationText
    * @return {object}
    */
    _locationText(location) {
        return {
            href: this.getLocationHref(location.address, location.locality, location.name, location.postalCode, location.region),
            style: {
                display: "none",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    display: "none"
                },
                "@media (min-width: 64em)": {
                    display: "block"
                }
            },
            text: location.address
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
                margin: "0 1.5vh 0 0",
                width: "3vh",
                height: "3vh",
                backgroundPosition: "center center",
                backgroundRepeat: "no repeat",
                backgroundSize: "cover",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    width: "2vh",
                    height: "2vh"
                },
                "@media (min-width: 64em)": {
                    width: "3vh",
                    height: "3vh"
                }
            }
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
                backgroundImage: "url(/stock/logos/phone.png)",
                display: "none",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    display: "block"
                },
                "@media (min-width: 64em)": {
                    display: "block"
                }
            }
        }
    }

    /**
    * Settings for: _phoneText
    *
    * @function _phoneText
    * @return {object}
    */
    _phoneText(phoneText) {
        return {
            href: "tel:" + phoneText,
            style: {
                display: "none",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    display: "block"
                },
                "@media (min-width: 64em)": {
                    display: "block"
                }
            },
            text: phoneText
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
                color: "black",
                fontFamily: "Open Sans, sans-serif",
                letterSpacing: "0.25vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    letterSpacing: "0.15vw"
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
        var {phone, location, ...other} = this.props;
        let _container = this._container();
        let _div = this._div();
        let _locationLogo = this._locationLogo();
        let _locationText = this._locationText(location);
        let _logo = this._logo();
        let _phoneLogo = this._phoneLogo();
        let _phoneText = this._phoneText(phone);
        let _text = this._text();
        return (
            <div className="div" style={_div.style}>
                <a href={_phoneText.href}>
                    <div className="phoneContainer" style={_container.style}>
                        <div className="phoneLogo" style={[_logo.style, _phoneLogo.style]}></div>
                        <div className="phoneText" style={[_text.style, _phoneText.style]}>{_phoneText.text}</div>
                    </div>
                </a>
                <a href={_locationText.href}>
                    <div className="locationContainer" style={_container.style}>
                        <div className="locationLogo" style={[_logo.style, _locationLogo.style]}></div>
                        <div className="locationText" style={[_text.style, _locationText.style]}>{_locationText.text}</div>
                    </div>
                </a>
            </div>
        )
    }    
}
// Export
module.exports = Radium(HeaderOneLinks);