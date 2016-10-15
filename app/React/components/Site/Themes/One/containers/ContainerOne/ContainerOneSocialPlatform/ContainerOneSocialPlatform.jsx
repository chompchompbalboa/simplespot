/**
* OneContainerSocialPlatform.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* OneContainerSocialPlatform
*
* @module OneContainerSocialPlatform
*/
class OneContainerSocialPlatform extends React.Component {

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
        color: React.PropTypes.string.isRequired,
        fontFamily: React.PropTypes.string.isRequired,
        fontSize: React.PropTypes.shape({
            "0em": React.PropTypes.string.isRequired,
            "48em": React.PropTypes.string.isRequired,
            "64em": React.PropTypes.string.isRequired
        }).isRequired,
        fontWeight: React.PropTypes.shape({
            "0em": React.PropTypes.string.isRequired,
            "48em": React.PropTypes.string.isRequired,
            "64em": React.PropTypes.string.isRequired
        }).isRequired,
        href: React.PropTypes.string.isRequired,
        letterSpacing: React.PropTypes.shape({
            "0em": React.PropTypes.string.isRequired,
            "48em": React.PropTypes.string.isRequired,
            "64em": React.PropTypes.string.isRequired
        }).isRequired,
        logoHeight: React.PropTypes.shape({
            "0em": React.PropTypes.string.isRequired,
            "48em": React.PropTypes.string.isRequired,
            "64em": React.PropTypes.string.isRequired
        }).isRequired,
        logoWidth: React.PropTypes.shape({
            "0em": React.PropTypes.string.isRequired,
            "48em": React.PropTypes.string.isRequired,
            "64em": React.PropTypes.string.isRequired
        }).isRequired,
        type: React.PropTypes.string.isRequired
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        color: "0,0,0",
        fontFamily: "Open Sans, sans-serif",
        fontSize: {
            "0em": "3.75vw",
            "48em": "1.5vw",
            "64em": "1.5vw"
        },
        fontWeight: {
            "0em": "400",
            "48em": "400",
            "64em": "400"
        },
        letterSpacing: {
            "0em": "0.5vw",
            "48em": "0.35vw",
            "64em": "0.25vw"
        },
        logoHeight: {
            "0em": "5vw",
            "48em": "3vw",
            "64em": "2vw"
        },
        logoWidth: {
            "0em": "5vw",
            "48em": "3vw",
            "64em": "2vw"
        },
        href: "https://www.facebook.com",
        type: "facebook"
    }

    /**
    * Settings for: _a
    *
    * @function _a
    * @return {object}
    */
    _a(href) {
        return {
            href: href,
            style: {
                margin: "1vh 0 0 0",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center"
            }
        }
    }

    /**
    * Settings for: _logo
    *
    * @function _logo
    * @return {object}
    */
    _logo(logoHeight, logoWidth, type) {
        return {
            style: {
                width: logoWidth['0em'],
                height: logoHeight['0em'],
                backgroundPosition: "center center",
                backgroundRepeat: "no repeat",
                backgroundSize: "cover",
                backgroundImage: "url(/stock/logos/" + type + ".png)",
                "@media (min-width: 48em) and (max-width: 64em)": {    
                    width: logoWidth['48em'],
                    height: logoHeight['48em']
                },
                "@media (min-width: 64em)": {    
                    width: logoWidth['64em'],
                    height: logoHeight['64em']
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
    _text(color, fontFamily, fontSize, fontWeight, letterSpacing, type) {
        let text = "";
        switch(type) {
            case "facebook":
                text = "Facebook"
            break;
            case "email":
                text = "Email Us"
            break;
            case "phone":
                text = "Call Us"
            break;
        }
        return {
            style: {
                margin: "0 0 0 2vw",
                color: "rgb(" + color + ")",
                fontFamily: fontFamily,
                fontSize: fontSize['0em'],
                fontWeight: fontWeight['0em'],
                letterSpacing: letterSpacing['0em'],
                textTransform: "uppercase",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    margin: "0 0 0 1vw",
                    fontSize: fontSize['48em'],
                    fontWeight: fontWeight['48em'],
                    letterSpacing: letterSpacing['48em']
                },
                "@media (min-width: 64em)": {
                    margin: "0 0 0 1vw",
                    fontSize: fontSize['64em'],
                    fontWeight: fontWeight['64em'],
                    letterSpacing: letterSpacing['64em']

                }
            },
            text: text
        }
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        var {color, fontFamily, fontSize, fontWeight, href, letterSpacing, logoHeight, logoWidth, type, ...other} = this.props;
        let _a = this._a(href);
        let _logo = this._logo(logoHeight, logoWidth, type);
        let _text = this._text(color, fontFamily, fontSize, fontWeight, letterSpacing, type);
        return (
            <a href={_a.href} style={_a.style}>
                <div className="logo" style={_logo.style}></div>
                <div className="text" style={_text.style}>{_text.text}</div>
            </a>
        )
    }    
}
// Export
module.exports = Radium(OneContainerSocialPlatform);