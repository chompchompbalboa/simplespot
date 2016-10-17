/**
* AppHomeContentText.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* AppHomeContentText
*
* @module AppHomeContentText
*/
class AppHomeContentText extends React.Component {

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
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
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
                margin: "7.5vh 0 7.5vh 0",
                width: "85vw",
                display: "flex",
                textAlign: (this.props.align === "left" ? "left" : "right"),
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: (this.props.align === "left" ? "flex-start" : "flex-end"),
                "@media (min-width: 48em) and (max-width: 64em)": {
                    margin: "5vh 0 5vh 0",
                },
                "@media (min-width: 64em)": {
                    margin: "5vh 0 5vh 0",
                    order: this.props.order,
                    width: "40vw",
                    padding: (this.props.padding ? "20vh 0 0 0" : "0")
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
                fontSize: "6vw",
                fontWeight: "300",
                letterSpacing: "0.5vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    width: "60vw",
                    fontSize: "4vw"
                },
                "@media (min-width: 64em)": {
                    width: "35vw",
                    fontSize: "2vw",
                    letterSpacing: "0.25vw"
                }
            },
            text: largeText
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
                "@media (min-width: 48em) and (max-width: 64em)": {
                    width: "65vw",
                },
                "@media (min-width: 64em)": {
                    width: "35vw",
                }
            },
            text: smallText
        }
    }

    /**
    * Settings for: _textDivider
    *
    * @function _textDivider
    * @return {object}
    */
    _textDivider() {
        return {
            style: {
                width: "30vw",
                height: "1px",
                backgroundColor: "black",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    width: "22.5vw"
                },
                "@media (min-width: 64em)": {
                    width: "12.5vw"
                }
            }
        }
    }

    /**
    * Settings for: _textDividerContainer
    *
    * @function _textDividerContainer
    * @return {object}
    */
    _textDividerContainer() {
        return {
            style: {
                margin: "3.5vh 0 3.5vh 0",
                width: "85vw",
                display: "flex",
                justifyContent: (this.props.align === "left" ? "flex-start" : "flex-end"),
                alignItems: "center",
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
        let {largeText, smallText, ...other} = this.props;
        let _div = this._div();
        let _largeText = this._largeText(largeText);
        let _smallText = this._smallText(smallText);
        let _textDivider = this._textDivider();
        let _textDividerContainer = this._textDividerContainer();
        return (
            <div style={_div.style}>
                <div className="largeText" style={_largeText.style}>{_largeText.text}</div>
                <div className="textDividerContainer" style={_textDividerContainer.style}>
                    <div className="textDivider" style={_textDivider.style}></div>
                </div>
                <div className="smallText" style={_smallText.style}>{_smallText.text}</div>
            </div>
        )
    }    
}
module.exports = Radium(AppHomeContentText);