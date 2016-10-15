/**
* OneContainerText.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';


/**
* OneContainerText
*
* @module OneContainerText
*/
class OneContainerText extends React.Component {

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
        backgroundColor: React.PropTypes.string.isRequired,
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
        height: React.PropTypes.shape({
            "0em": React.PropTypes.number.isRequired,
            "48em": React.PropTypes.number.isRequired,
            "64em": React.PropTypes.number.isRequired
        }).isRequired,
        letterSpacing: React.PropTypes.shape({
            "0em": React.PropTypes.string.isRequired,
            "48em": React.PropTypes.string.isRequired,
            "64em": React.PropTypes.string.isRequired
        }).isRequired,
        lineHeight: React.PropTypes.shape({
            "0em": React.PropTypes.string.isRequired,
            "48em": React.PropTypes.string.isRequired,
            "64em": React.PropTypes.string.isRequired
        }).isRequired,
        text: React.PropTypes.string.isRequired,
        textContainerWidth: React.PropTypes.shape({
            "0em": React.PropTypes.string.isRequired,
            "48em": React.PropTypes.string.isRequired,
            "64em": React.PropTypes.string.isRequired
        }).isRequired,
        width: React.PropTypes.shape({
            "0em": React.PropTypes.number.isRequired,
            "48em": React.PropTypes.number.isRequired,
            "64em": React.PropTypes.number.isRequired
        }).isRequired,
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        backgroundColor: "255,255,255",
        color: "0,0,0",
        fontFamily: "Open Sans, sans-serif",
        fontSize: {
            "0em": "3.5vw",
            "48em": "1.75vw",
            "64em": "1.05vw"
        },
        fontWeight: {
            "0em": "400",
            "48em": "400",
            "64em": "400"
        },
        height: {
            "0em": 50,
            "48em": 50,
            "64em": 50
        },
        letterSpacing: {
            "0em": "0.5vw",
            "48em": "0.35vw",
            "64em": "0.25vw"
        },
        lineHeight: {
            "0em": "1.5",
            "48em": "1.4",
            "64em": "1.4"
        },
        text: "Write some text here",
        textContainerWidth: {
            "0em": "90%",
            "48em": "85%",
            "64em": "90%"
        },
        width: {
            "0em": 100,
            "48em": 100,
            "64em": 50
        },
    }

    /**
    * Settings for: _div
    *
    * @function _div
    * @return {object}
    */
    _div(backgroundColor, height, item, marginTops, width) {
        return {
            style: {
                marginTop: marginTops['0em'][item],
                width: width['0em'] + "vw",
                height: height['0em'] + "vh",
                backgroundColor: "rgb(" + backgroundColor + ")",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    marginTop: marginTops['48em'][item],
                    width: width['48em'] + "vw",
                    height: height['48em'] + "vh"
                },
                "@media (min-width: 64em)": {
                    marginTop: marginTops['64em'][item],
                    width: width['64em'] + "vw",
                    height: height['64em'] + "vh"
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
    _textContainer(color, fontFamily, fontSize, fontWeight, letterSpacing, lineHeight, textContainerWidth) {
        return {
            style: {
                width: textContainerWidth['0em'],
                color: "rgb(" + color + ")",
                fontFamily: fontFamily,
                fontSize: fontSize['0em'],
                fontWeight: fontSize['0em'],
                letterSpacing: letterSpacing['0em'],
                lineHeight: lineHeight['0em'],
                textAlign: "justify",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    width: textContainerWidth['48em'],
                    fontSize: fontSize['48em'],
                    fontWeight: fontSize['48em'],
                    letterSpacing: letterSpacing['48em'],
                    lineHeight: lineHeight['48em']
                },
                "@media (min-width: 64em)": {
                    width: textContainerWidth['64em'],
                    fontSize: fontSize['64em'],
                    fontWeight: fontSize['64em'],
                    letterSpacing: letterSpacing['64em'],
                    lineHeight: lineHeight['64em']
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
        var {backgroundColor, color, fontFamily, fontSize, fontWeight, height, item, letterSpacing, lineHeight, marginTops, text, textContainerWidth, width, ...other} = this.props;
        let _div = this._div(backgroundColor, height, item, marginTops, width);
        let _textContainer = this._textContainer(color, fontFamily, fontSize, fontWeight, letterSpacing, lineHeight, textContainerWidth);
        return (
            <div className="div" style={_div.style}>
                <div className="textContainer" style={_textContainer.style}>
                    {text}
                </div>
            </div>
        )
    }    
}
// Export
module.exports = Radium(OneContainerText);