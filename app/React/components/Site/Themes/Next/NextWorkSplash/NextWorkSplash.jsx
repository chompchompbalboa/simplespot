/**
* NextWorkSplash.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* NextWorkSplash
*
* @module NextWorkSplash
*/
class NextWorkSplash extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
        this.state = {
            inView: false
        };
    }

    /**
    * Validate the prop types
    *
    * @prop propTypes
    */
    static propTypes = {
        item: React.PropTypes.object.isRequired
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        item: {
            backgroundImage: "/uploads/5776dd982cb85ae0b1b350e7/projects/one/placeholder.jpg",
            backgroundText: "P",
            href: "/one",
            largeText: "Project One",
            smallText: "A brief description of Project One"
        }
    }

    /**
    * Component did mount
    *
    * @function componentDidMount
    */
    componentDidMount() {
        this.setState({
            inView: true
        });
    }

    /**
    * Settings for: _div
    *
    * @function _div
    * @return {object}
    */
    _div(item) {
        return {
            style: {
                position: "relative",
                top: "10vh",
                left: "0vw",
                margin: (this.state.inView ? "0 0 0 0" : "5vh 0 0 0"),
                opacity: (this.state.inView ? "1" : "0"),
                width: "100%",
                height: "65vh",
                color: "white",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(" + item.backgroundImage + ")",
                transition: "all 1s ease",
                "@media (min-width: 40em)": {
                    top: "14vh",
                },
                "@media (min-width: 56em)": {
                    top: (this.props.dockHeader ? "22vh" : "8vh"),
                    margin: (this.state.inView ? "0 0 0 0" : "15vh 0 0 0"),
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
    _largeText(item) {
        return {
            style: {
                margin: "1.5vh 0 0 0",
                paddingTop: (this.state.inView ? "0" : "25%"),
                fontFamily: "Lato, sans-serif",
                fontSize: "6.5vw",
                letterSpacing: "1vw",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                transition: "padding 1s ease",
                "@media (min-width: 40em) and (max-width: 56em)": {
                    fontSize: "4.5vw"
                },
                "@media (min-width: 56em)": {
                    fontSize: "2vw",
                    letterSpacing: "0.5vw"
                }
            },
            text: item.largeText
        }
    }

    /**
    * Settings for: _overlayContainer
    *
    * @function _overlayContainer
    * @return {object}
    */
    _overlayContainer(item) {
        return {
            style: {
                width: "100%",
                height: "100%"
            }
        }
    }

    /**
    * Settings for: _overlayContainerBackground
    *
    * @function _overlayContainerBackground
    * @return {object}
    */
    _overlayContainerBackground(item) {
        return {
            style: {
                position: "relative",
                top: "0vh",
                left: "0vw",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }
        }
    }

    /**
    * Settings for: _overlayContainerBackgroundText
    *
    * @function _overlayContainerBackgroundText
    * @return {object}
    */
    _overlayContainerBackgroundText(item) {
        return {
            style: {
                paddingBottom: (this.state.inView ? "0" : "25%"),
                fontFamily: "Raleway, sans-serif",
                fontSize: "40vw",
                color: "rgba(255,255,255,0.2)",
                transition: "all 1s ease",
                "@media (min-width: 40em) and (max-width: 56em)": {
                    fontSize: "25vw"
                },
                "@media (min-width: 56em)": {
                    fontSize: "12.5vw"
                }
            },
            text: item.backgroundText
        }
    }

    /**
    * Settings for: _overlayContainerText
    *
    * @function _overlayContainerText
    * @return {object}
    */
    _overlayContainerText(item) {
        return {
            style: {
                position: "relative",
                top: "-100%",
                left: "0vw",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }
        }
    }

    /**
    * Settings for: _smallText
    *
    * @function _smallText
    * @return {object}
    */
    _smallText(item) {
        return {
            style: {
                fontFamily: "Josefin Sans, serif",
                paddingTop: (this.state.inView ? "0" : "50%"),
                fontSize: "5vw",
                letterSpacing: "0.5vw",
                transition: "all 1s ease",
                "@media (min-width: 40em) and (max-width: 56em)": {
                    fontSize: "3vw"
                },
                "@media (min-width: 56em)": {
                    fontSize: "2vw"
                }
            },
            text: item.smallText
        }
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        var {item, ...other} = this.props;
        let _div = this._div(item);
        let _largeText = this._largeText(item);
        let _overlayContainer = this._overlayContainer(item);
        let _overlayContainerBackground = this._overlayContainerBackground(item);
        let _overlayContainerBackgroundText = this._overlayContainerBackgroundText(item);
        let _overlayContainerText = this._overlayContainerText(item);
        let _smallText = this._smallText(item);
        return (
            <div ref={(c) => this.item = c} className="div" style={_div.style}>
                <div className="overlayContainer" style={_overlayContainer.style}>
                    <div className="overlayContainerBackground" style={_overlayContainerBackground.style}>
                        <div className="overlayContainerBackgroundText" style={_overlayContainerBackgroundText.style}>
                            {_overlayContainerBackgroundText.text}
                        </div>
                    </div>
                    <div className="overlayContainerText" style={_overlayContainerText.style}>
                        <div className="smallText" style={_smallText.style}>{_smallText.text}</div>
                        <div className="largeText" style={_largeText.style}>{_largeText.text}</div>
                    </div>
                </div>
            </div>
        )
    }    
}
// Export
module.exports = Radium(NextWorkSplash);