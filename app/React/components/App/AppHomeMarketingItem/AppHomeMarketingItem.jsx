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
        super(props);
        this.state = {
            inView: false
        }
    }

    /**
    * Validate the prop types
    *
    * @prop propTypes
    */
    static propTypes = {
        largeText: React.PropTypes.string.isRequired,
        smallText: React.PropTypes.string.isRequired,
        image: React.PropTypes.shape({
            url: React.PropTypes.string.isRequired,
            height: React.PropTypes.shape({
                "0em": React.PropTypes.string.isRequired
            }).isRequired,
            width: React.PropTypes.shape({
                "0em": React.PropTypes.string.isRequired
            }).isRequired
        }).isRequired
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        largeText: "",
        smallText: "",
        image: {
            url: "stock/examples/1.png",
            height: {
                "0em": "33vw"
            },
            width: {
                "0em": "85vw"
            }
        }
    }

    /**
    * Component did mount
    *
    * @function componentDidMount
    * @return {object}
    */
    componentDidMount() {
        let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let elementBox = this.div.getBoundingClientRect();
        if ((elementBox.top - (height * 0.01)) < height) {
            this.setState({
                inView: true
            })
        }
        else {
            window.addEventListener('scroll', this.handleScroll)
        }
    }

    /**
    * Settings for: handleScroll
    *
    * @function handleScroll
    * @return {object}
    */
    handleScroll() {
        let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let elementBox = this.container.getBoundingClientRect();
        if (elementBox.top < (height - (height * 0.01))) {
            window.removeEventListener('scroll', this.handleScroll);
            this.setState({
                inView: true
            });
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
                    flexDirection: "row"
                },
                "@media (min-width: 64em)": {
                    flexDirection: "row"
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
                margin: (this.state.inView ? "7.5vh 0 0 0" : "7.5vh 0 0 200vw"),
                width: image.width['0em'],
                height: image.height['0em'],
                backgroundPosition: "center center",
                backgroundRepeat: "no repeat",
                backgroundSize: "cover",
                backgroundImage: "url(" + image.url + ")",
                transition: "margin 0.75s ease",
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
    _largeText(largeText) {
        return {
            style: {
                margin: (this.state.inView ? "0 0 0 0" : "0 0 0 200vw"),
                fontSize: "6vw",
                fontWeight: "300",
                letterSpacing: "0.5vw",
                transition: "margin 0.5s ease",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
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
                margin: (this.state.inView ? "0 0 0 0" : "0 0 0 200vw"),
                transition: "margin 0.6s ease",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
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
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
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
                },
                "@media (min-width: 64em)": {
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
                margin: (this.state.inView ? "3.5vh 0 3.5vh 0" : "3.5vh 0 3.5vh 200vw"),
                transition: "margin 0.75s ease",
                width: "85vw",
                display: "flex",
                justifyContent: "flex-start",
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
            <div ref={(c) => this.div = c} style={_div.style}>
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