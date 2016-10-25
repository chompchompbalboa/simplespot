/**
* NewHomeLandingContentSide.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* NewHomeLandingContentSide
*
* @module NewHomeLandingContentSide
*/
class NewHomeLandingContentSide extends React.Component {

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
    * Settings for: _div
    *
    * @function _div
    * @return {object}
    */
    _div() {
        return {
            style: {
                order: "2",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    order: "1",
                    height: "40vw",
                    transform: "rotate(90deg)",
                    justifyContent: "flex-start"
                }
            }
        }
    }

    /**
    * Settings for: _line
    *
    * @function _line
    * @return {object}
    */
    _line() {
        return {
            style: {
                display: "none",
                backgroundColor: "white",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    display: "block",
                    width: "5vw",
                    height: "1vh",
                }
            }
        }
    }

    /**
    * Settings for: _number
    *
    * @function _number
    * @return {object}
    */
    _number(activeNumber) {
        let text = "01";
        switch (activeNumber) {
            case 2:
                text = "02"
            break;
            case 3:
                text = "03"
            break;
        }
        return {
            style: {
                margin: "0 0 0 4vw",
                fontFamily: "Lato, sans-serif",
                fontSize: "6vw",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "0.25vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    fontSize: "4vw"
                },
                "@media (min-width: 64em)": {
                    margin: "0 0 0 2vw",
                    fontSize: "3vw"
                }
            },
            text: text
        }
    }

    /**
    * Settings for: _dot
    *
    * @function _dot
    * @return {object}
    */
    _dot() {
        return {
            style: {
                margin: "0 0 0 3vw",
                fontSize: "6vw",
                transition: "color 0.5s ease",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    fontSize: "4vw"
                },
                "@media (min-width: 64em)": {
                    margin: "0 0 0 2vw",
                    fontSize: "3vw"
                }
            }
        }
    }

    /**
    * Settings for: _dot1
    *
    * @function _dot1
    * @return {object}
    */
    _dot1(activeNumber) {
        return {
            style: {
                color: (activeNumber === 1 ? "rgb(213,180,101)" : "white")
            }
        }
    }

    /**
    * Settings for: _dot2
    *
    * @function _dot2
    * @return {object}
    */
    _dot2(activeNumber) {
        return {
            style: {
                color: (activeNumber === 2 ? "rgb(213,180,101)" : "white")
            }
        }
    }

    /**
    * Settings for: _dot3
    *
    * @function _dot3
    * @return {object}
    */
    _dot3(activeNumber) {
        return {
            style: {
                color: (activeNumber === 3 ? "rgb(213,180,101)" : "white")
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
        var {activeNumber, site, ...other} = this.props;
        let _div = this._div(); 
        let _line = this._line();
        let _number = this._number(activeNumber);
        let _dot = this._dot();
        let _dot1 = this._dot1(activeNumber);
        let _dot2 = this._dot2(activeNumber);
        let _dot3 = this._dot3(activeNumber);
        return (
            <div className="div" style={_div.style}>
                <div className="line" style={_line.style}></div>
                <div className="number" style={_number.style}>{_number.text}</div>
                <div className="dot" style={[_dot.style, _dot1.style]}>&bull;</div>
                <div className="dot" style={[_dot.style, _dot2.style]}>&bull;</div>
                <div className="dot" style={[_dot.style, _dot3.style]}>&bull;</div>
            </div>
        )
    }    
}
// Export
module.exports = Radium(NewHomeLandingContentSide);