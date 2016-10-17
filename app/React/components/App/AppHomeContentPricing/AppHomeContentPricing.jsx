/**
* AppHomeContentPricing.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* AppHomeContentPricing
*
* @module AppHomeContentPricing
*/
class AppHomeContentPricing extends React.Component {

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
    * Settings for: _container
    *
    * @function _container
    * @return {object}
    */
    _container() {
        return {
            style: {
                margin: "0 0 5vh 0",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    flexDirection: "row"
                },
                "@media (min-width: 64em)": {
                    flexDirection: "row"
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
                width: "100vw",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    order: this.props.order
                }
            }
        }
    }

    /**
    * Settings for: _header
    *
    * @function _header
    * @return {object}
    */
    _header() {
        return {
            style: {
                margin: "5vh 0 5vh 0",
                color: "black",
                fontFamily: "Lato, sans-serif",
                fontSize: "5vw",
                fontWeight: "700",
                letterSpacing: "0.5vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    fontSize: "3.5vw",
                    letterSpacing: "0.375vw"
                },
                "@media (min-width: 64em)": {
                    fontSize: "2.5vw",
                    letterSpacing: "0.25vw"
                }
            }
        }
    }

    /**
    * Settings for: _image
    *
    * @function _image
    * @return {object}
    */
    _image() {
        return {
            style: {
                width: "80vw",
                height: "31vw",
                backgroundPosition: "center center",
                backgroundRepeat: "no repeat",
                backgroundSize: "cover",
                backgroundImage: "url(stock/examples/3.png)",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    width: "40vw",
                    height: "15.5vw",
                },
                "@media (min-width: 64em)": {
                    width: "40vw",
                    height: "15.5vw",
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
    _largeText() {
        return {
            style: {
                fontSize: "8vw",
                fontWeight: "400",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    fontSize: "4.5vw"
                },
                "@media (min-width: 64em)": {
                    fontSize: "2.5vw"
                }
            }
        }
    }

    /**
    * Settings for: _smallText
    *
    * @function _smallText
    * @return {object}
    */
    _smallText() {
        return {
            style: {
                fontSize: "5vw",
                fontWeight: "300",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    fontSize: "2.5vw"
                },
                "@media (min-width: 64em)": {
                    fontSize: "2vw"
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
    _textContainer() {
        return {
            style: {
                fontFamily: "Open Sans, sans-serif",
                margin: "4vh 0 0 0",
                width: "80vw",
                height: "16vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    width: "25vw",
                    height: "16vw"
                },
                "@media (min-width: 64em)": {
                    width: "30vw",
                    height: "16vw"
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
        let {...other} = this.props;
        let _container = this._container();
        let _div = this._div();
        let _header = this._header();
        let _image = this._image();
        let _largeText = this._largeText();
        let _smallText = this._smallText();
        let _textContainer = this._textContainer();
        return (
            <div style={_div.style}>
                <div className="header" style={_header.style}>DATA DRIVEN DESIGN</div>
                <div className="container" style={_container.style}>
                    <div className="image" style={_image.style}></div>
                    <div className="textContainer" style={_textContainer.style}>
                        <div className="largeText" style={_largeText.style}>$100</div>
                        <div className="smallText" style={_smallText.style}>+ $10 / month</div>
                    </div>
                </div>
            </div>
        )
    }    
}
module.exports = Radium(AppHomeContentPricing);