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
        largeText: React.PropTypes.string.isRequired,
        smallText: React.PropTypes.string.isRequired,
        desktopImage: React.PropTypes.string.isRequired,
        tabletImage: React.PropTypes.string.isRequired,
        mobileImage: React.PropTypes.string.isRequired
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        largeText: "",
        smallText: "",
        desktopImage: "",
        tabletImage: "",
        mobileImage: ""
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
                height: "70vw",
                display: "flex",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
            }
        }
    }

    /**
    * Settings for: _desktopImage
    *
    * @function _desktopImage
    * @return {object}
    */
    _desktopImage() {
        return {
            style: {
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
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
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
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
                width: "50%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
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
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
            }
        }
    }

    /**
    * Settings for: _mobileImage
    *
    * @function _mobileImage
    * @return {object}
    */
    _mobileImage() {
        return {
            style: {
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
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
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
            }
        }
    }

    /**
    * Settings for: _tabletImage
    *
    * @function _tabletImage
    * @return {object}
    */
    _tabletImage() {
        return {
            style: {
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
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
                width: "50%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
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
        let {largeText, smallText, desktopImage, tabletImage, mobileImage, ...other} = this.props;
        let _div = this._div();
        let _desktopImage = this._desktopImage(desktopImage);
        let _image = this._image();
        let _imageContainer = this._imageContainer();
        let _largeText = this._largeText(largeText);
        let _mobileImage = this._mobileImage(mobileImage);
        let _smallText = this._smallText(smallText);
        let _tabletImage = this._tabletImage(tabletImage);
        let _textContainer = this._textContainer();
        return (
            <div style={_div.style}>
                <div className="textContainer" style={_textContainer.style}>
                    <div className="largeText" style={_largeText.style}>{_largeText.text}</div>
                    <div className="smallText" style={_smallText.style}>{_smallText.text}</div>
                </div>
                <div className="imageContainer" style={_imageContainer.style}>
                    <div className="desktopImage" style={[_image.style, _desktopImage.style]}></div>
                    <div className="tabletImage" style={[_image.style, _tabletImage.style]}></div>
                    <div className="mobileImage" style={[_image.style, _mobileImage.style]}></div>
                </div>
            </div>
        )
    }    
}
module.exports = Radium(AppHomeMarketingItem);