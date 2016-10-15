/**
* NextIntroSummary.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';


/**
* NextIntroSummary
*
* @module NextIntroSummary
*/
class NextIntroSummary extends React.Component {

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
        div: React.PropTypes.object.isRequired
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        div: {},
        divider: {},
        textContainer: {
            text: "01 Work"
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
                margin: "0 0 0 5vw",
                width: "95vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                "@media (min-width: 0em) and (max-width: 40em)": {
                    display: "none"
                },
                "@media (min-width: 40em)": {
                    margin: "0 0 0 8vw",
                    width: "12vw",
                    height: "50vh"
                },
                "@media (min-width: 56em)": {
                    margin: "0 0 0 10vw",
                    width: "25vw",
                    height: "50vh"
                }
            }
        }
    }

    /**
    * Settings for: _divider
    *
    * @function _divider
    * @return {object}
    */
    _divider(divider) {
        return {
            style: {
                width: "8vw",
                height: "2px",
                backgroundColor: "rgba(0,0,0,0.35)",
                "@media (min-width: 40em)": {
                    width: "6vw"
                },
                "@media (min-width: 56em)": {
                    width: "4vw"
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
    _textContainer(textContainer) {
        return {
            style: {
                margin: "1vh 0 0 0",
                fontFamily: "Merriweather, serif",
                fontSize: "2vw",
                textTransform: "uppercase",
                color: "rgba(187,187,187,1)",
                "@media (min-width: 56em)": {
                    fontSize: "1.5vw"
                },
                "@media (min-width: 64em)": {
                    fontSize: "1.25vw"
                }
            },
            text: textContainer.text
        }
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        var {div, divider, textContainer, ...other} = this.props;
        let _div = this._div(div);
        let _divider = this._divider(divider);
        let _textContainer = this._textContainer(textContainer);
        return (
            <div className="div" style={_div.style}>
                <div className="divider" style={_divider.style}></div>
                <div className="textContainer" style={_textContainer.style}>{_textContainer.text}</div>
            </div>
        )
    }    
}
// Export
module.exports = Radium(NextIntroSummary);