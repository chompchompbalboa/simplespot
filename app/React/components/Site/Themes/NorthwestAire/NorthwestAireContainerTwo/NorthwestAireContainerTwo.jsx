/**
* NorthwestAireContainerTwo.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* The top level app component
*
* @module NorthwestAireContainerTwo
*/
class NorthwestAireContainerTwo extends React.Component {

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
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(250,250,250,1)",
                color: "black",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    flexFlow: "row wrap"
                }
            }
        }
    }

    /**
    * Settings for: _imageContainer
    *
    * @function _imageContainer
    * @return {object}
    */
    _imageContainer() {
        return {
            style: {
                display: "none",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    margin: "5vh 0 5vh 0",
                    width: "45vw",
                    height: "55vw",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }
            }
        }
    }

    /**
    * Settings for: _imageOne
    *
    * @function _imageOne
    * @return {object}
    */
    _imageOne() {
        return {
            style: {
                width: "25vw",
                height: "37vw",
                margin: "-25% -25% 0 0",
                backgroundImage: "url(/uploads/57b35f928bcb76f5d65e79fa/hvac.jpg)"
            }
        }
    }

    /**
    * Settings for: _imageTwo
    *
    * @function _imageTwo
    * @return {object}
    */
    _imageTwo() {
        return {
            style: {
                width: "20vw",
                height: "30vw",
                margin: "25% 25% 0 0",
                backgroundImage: "url(/uploads/57b35f928bcb76f5d65e79fa/northwest.jpg)"
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
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
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
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontWeight: "700",
                fontSize: "6vw",
                letterSpacing: "0.5vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    fontSize: "2vw",
                    letterSpacing: "0.1875vw"
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
                margin: "3vh 0 0 0",
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontWeight: "300",
                fontSize: "4vw",
                letterSpacing: "0.25vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    width: "85%",
                    fontSize: "1.15vw",
                    letterSpacing: "0.125vw"
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
                margin: "5vh 0 5vh 0",
                width: "85vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Open Sans, sans-serif",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    width: "45vw",
                    height: "55vh",
                    alignItems: "flex-start"
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
        let _div = this._div();
        let _image = this._image();
        let _imageContainer = this._imageContainer();
        let _imageOne = this._imageOne();
        let _imageTwo = this._imageTwo();
        let _largeText = this._largeText();
        let _smallText = this._smallText();
        let _textContainer = this._textContainer();
        return (
            <div className="div" style={_div.style}>
                <div className="textContainer" style={_textContainer.style}>
                    <div className="largeText" style={_largeText.style}>WELCOME</div>
                    <div className="smallText" style={_smallText.style}>
                    We are Northwest Aire Services, a full service commercial HVAC contractor with the resources and motivation to provide industry-leading solutions. Equipped to competitively bid any job, it is our hope to build lifelong relationships with our customers - relationships that will lead to an enduring and mutual satisfaction.
                    </div>
                </div>
                <div className="imageContainer" style={_imageContainer.style}>
                    <div className="imageOne" style={[_image.style, _imageOne.style]}></div>
                    <div className="imageTwo" style={[_image.style, _imageTwo.style]}></div>
                </div>
            </div>
        )
    }    
}
module.exports = Radium(NorthwestAireContainerTwo);