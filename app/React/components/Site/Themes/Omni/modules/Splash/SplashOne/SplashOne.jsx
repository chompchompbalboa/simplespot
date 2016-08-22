/**
* SplashOne.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* SplashOne
*
* @module SplashOne
*/
class SplashOne extends React.Component {

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
        backgroundImage: React.PropTypes.string.isRequired,
        largeText: React.PropTypes.object.isRequired,
        smallText: React.PropTypes.object.isRequired
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url(stock/2.jpg)",
        largeText: {
            font: {
                color: "white",
                fontFamily: "Cuprum, sans-serif",
                fontSize: "54px",
                fontWeight: "300",
                letterSpacing: "10px",
                textTransform: "uppercase"
            },
            text: "Your Name Here"
        },
        smallText: {
            font: {
                "color": "white",
                fontFamily: "Cuprum, sans-serif",
                fontSize: "24px",
                fontWeight: "200",
                letterSpacing: "3px",
                textTransform: ""
            },
            text: "Here is where a brief description would go"
        }
    }

    /**
    * Settings for: _largeText
    *
    * @function _largeText
    * @return {object}
    */
    _largeText(largeText) {
        return {
            style: {
                color: largeText.font.color,
                fontFamily: largeText.font.fontFamily,
                fontSize: largeText.font.fontSize,
                fontWeight: largeText.font.fontWeight,
                textTransform: largeText.font.textTransform,
                letterSpacing: largeText.font.letterSpacing
            },
            text: largeText.text
        }
    }

    /**
    * Settings for: _section
    *
    * @function _section
    * @return {object}
    */
    _section(backgroundImage) {
        return {
            style: {
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundImage: backgroundImage
            }
        }
    }

    /**
    * Settings for: _smallText
    *
    * @function _smallText
    * @return {object}
    */
    _smallText(smallText) {
        return {
            style: {
                color: smallText.font.color,
                fontFamily: smallText.font.fontFamily,
                fontSize: smallText.font.fontSize,
                fontWeight: smallText.font.fontWeight,
                textTransform: smallText.font.textTransform,
                letterSpacing: smallText.font.letterSpacing,
                textAlign: "center"
            },
            text: smallText.text
        }
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        let {backgroundImage, largeText, smallText, ...other} = this.props;
        let _largeText = this._largeText(largeText);
        let _section = this._section(backgroundImage);
        let _smallText = this._smallText(smallText);
        return (
            <section className="section" style={_section.style}>
                <div className="largeText" style={_largeText.style}>
                    {_largeText.text}
                </div>
                <div className="smallText" style={_smallText.style}>
                    {_smallText.text}
                </div>
            </section>
        )
    }    
}
// Export
module.exports = Radium(SplashOne);