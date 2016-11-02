/**
* NWAireContainerOne.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* NWAireContainerOne
*
* @module NWAireContainerOne
*/
class NWAireContainerOne extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
        this.state = {
            containerActive: "one"
        }
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
    * Settings for: _background
    *
    * @function _background
    * @return {object}
    */
    _background() {
        let backgroundImage = "linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(/uploads/57b35f928bcb76f5d65e79fa/needle2.jpg)";
        return {
            style: {
                zIndex: "-1",
                position: "absolute",
                width: "100vw",
                height: "100vh",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: backgroundImage,
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    width: "77.5vw"
                }
            }
        }
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
                margin: "0 0 0 0",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
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
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    width: "77.5vw"
                }
            }
        }
    }

    /**
    * Settings for: _mainText
    *
    * @function _mainText
    * @return {object}
    */
    _mainText() {
        return {
            style: {
                margin: "15vh 0 0 0",
                padding: "2vh 3vw",
                width: "80%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                backgroundColor: "rgba(0,0,0,0.5)",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
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
    _divider() {
        return {
            style: {
                height: "1px",
                width: "30vw",
                backgroundColor: "white",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
            },
            text: "For all your HVAC needs"
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
                margin: "0 0 3vh 0",
                width: "100%",
                fontFamily: "Lato, sans-serif",
                fontSize: "8vw",
                fontWeight: "900",
                letterSpacing: "0.5vw",
                textTransform: "uppercase",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
            },
            text: "For all your HVAC needs"
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
                fontFamily: "Open Sans, sans-serif",
                fontSize: "4vw",
                fontWeight: "300",
                letterSpacing: "0.25vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
            },
            text: "We are proud to service the Pacific Northwest, offering a wide variety of commercial HVAC services. From the most complex installations to routine service and maintenance, Northwest Aire Services, Inc. has the resources and motivation to provide an industry-leading solution."
        }
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        var {...other} = this.props;
        let _background = this._background(); 
        let _container = this._container(); 
        let _div = this._div();  
        let _divider = this._divider(); 
        let _mainText = this._mainText();
        let _largeText = this._largeText();
        let _smallText = this._smallText();
        return (
            <div className="div" style={_div.style}>
                <div className="background" style={_background.style}></div>
                <div className="container" style={_container.style}>
                    <div className="mainText" style={_mainText.style}>
                        <div className="largeText" style={_largeText.style}>{_largeText.text}</div>
                        <div className="divider" style={_divider.style}></div>
                        <div className="smallText" style={_smallText.style}>{_smallText.text}</div>
                    </div>
                </div>
            </div>
        )
    }    
}
// Export
module.exports = Radium(NWAireContainerOne);