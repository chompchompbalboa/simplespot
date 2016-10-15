/**
* NextIntroText.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';


/**
* NextIntroText
*
* @module NextIntroText
*/
class NextIntroText extends React.Component {

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
        div: React.PropTypes.object.isRequired,
        smallText: React.PropTypes.object.isRequired,
        largeText: React.PropTypes.object.isRequired
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        div: {},
        largeText: {
            text: "Next is a digital agency specializing in revamping your online presence."
        },
        smallText: {
            text: "We're experts at making sure your brand stays as innovative as you are. When you're ready for a refresh, we're here to help."
        }
    }

    /**
    * Settings for: _div
    *
    * @function _div
    * @return {object}
    */
    _div(div) {
        return {
            style: {
                margin: "10vh 0 0 2.5vw",
                width: "90vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                fontFamily: "Lusitana, serif",
                letterSpacing: "0.5vw",
                lineHeight: "1.8",
                "@media (min-width: 40em)": {
                    margin: "0 0 0 8vw",
                    width: "65vw",
                    letterSpacing: "0.25vw"
                },
                "@media (min-width: 56em)": {
                    margin: "0 10vw 0 0",
                    width: "45vw",
                    letterSpacing: "0.25vw"
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
    _largeText(largeText) {
        return {
            style: {
                fontSize: "6.25vw",
                fontWeight: "400",
                "@media (min-width: 40em)": {
                    fontSize: "4.25vw",
                    fontWeight: "700",
                },
                "@media (min-width: 48em)": {
                    fontSize: "4vw",
                    fontWeight: "700",
                },
                "@media (min-width: 56em)": {
                    fontSize: "2.25vw",
                    fontWeight: "700",
                }
            },
            text: largeText.text
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
                margin: "5vh 0 0 0",
                fontSize: "4.25vw",
                fontWeight: "400",
                "@media (min-width: 40em)": {
                    fontSize: "3.25vw"
                },
                "@media (min-width: 48em)": {
                    fontSize: "3vw"
                },
                "@media (min-width: 56em)": {
                    fontSize: "1.25vw",
                    letterSpacing: "0.125vw"
                }
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
        var {div, largeText, smallText, ...other} = this.props;
        let _div = this._div(div);
        let _largeText = this._largeText(largeText);
        let _smallText = this._smallText(smallText);
        return (
            <div className="div" style={_div.style}>
                <div className="largeText" style={_largeText.style}>{_largeText.text}</div>
                <div className="smallText" style={_smallText.style}>{_smallText.text}</div>
            </div>
        )
    }    
}
// Export
module.exports = Radium(NextIntroText);