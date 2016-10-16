/**
* AppHomeMarketingItem.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';


/**
* AppHomeMarketingItem
*
* @module AppHomeMarketingItem
*/
class AppHomeMarketingItem extends React.Component {

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
        align: React.PropTypes.string.isRequired,
        largeText: React.PropTypes.string.isRequired,
        smallText: React.PropTypes.string.isRequired,
        image: React.PropTypes.shape({
            url: React.PropTypes.string.isRequired,
            height: React.PropTypes.shape({
                "0em": React.PropTypes.string.isRequired,
                "48em": React.PropTypes.string.isRequired
            }).isRequired,
            width: React.PropTypes.shape({
                "0em": React.PropTypes.string.isRequired,
                "48em": React.PropTypes.string.isRequired
            }).isRequired
        }).isRequired
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        align: "left",
        largeText: "",
        smallText: "",
        image: {
            url: "stock/examples/1.png",
            height: {
                "0em": "33vw",
                "48em": "26vw",
                "64em": "26vw"
            },
            width: {
                "0em": "85vw",
                "48em": "70vw",
                "48em": "45vw"
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
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    flexDirection: "row",
                    justifyContent: "space-around"
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
    _image(image) {
        return {
            style: {
                margin: "7.5vh 0 5vh 0",
                width: image.width['0em'],
                height: image.height['0em'],
                backgroundPosition: "center center",
                backgroundRepeat: "no repeat",
                backgroundSize: "cover",
                backgroundImage: "url(" + image.url + ")",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    margin: "5vh 0 2.5vh 0",
                    width: image.width['48em'],
                    height: image.height['48em']
                },
                "@media (min-width: 64em)": {
                    order: (this.props.align === "left" ? "2" : "1"),
                    margin: "5vh 0 2.5vh 0",
                    width: image.width['64em'],
                    height: image.height['64em']
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
    * Settings for: _textContainer
    *
    * @function _textContainer
    * @return {object}
    */
    _textContainer() {
        return {
            style: {
                margin: "7.5vh 0 0 0",
                width: "85vw",
                display: "flex",
                textAlign: (this.props.align === "left" ? "left" : "right"),
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: (this.props.align === "left" ? "flex-start" : "flex-end"),
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    order: (this.props.align === "left" ? "1" : "2"),
                    width: "35vw"
                }
            }
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
        let {largeText, smallText, image, ...other} = this.props;
        let _div = this._div();
        let _image = this._image(image);
        let _largeText = this._largeText(largeText);
        let _smallText = this._smallText(smallText);
        let _textContainer = this._textContainer();
        let _textDivider = this._textDivider();
        let _textDividerContainer = this._textDividerContainer();

        return (
            <div style={_div.style}>
                <div className="textContainer" style={_textContainer.style}>
                    <div className="largeText" style={_largeText.style}>{_largeText.text}</div>
                    <div className="textDividerContainer" style={_textDividerContainer.style}>
                        <div className="textDivider" style={_textDivider.style}></div>
                    </div>
                    <div className="smallText" style={_smallText.style}>{_smallText.text}</div>
                </div>
                <div className="image" style={_image.style}></div>
            </div>
        )
    }    
}
module.exports = Radium(AppHomeMarketingItem);