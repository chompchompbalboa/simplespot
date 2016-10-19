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
                backgroundColor: "rgb(57,98,92)",
                color: "white",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
            }
        }
    }

    /**
    * Settings for: _introContainer
    *
    * @function _introContainer
    * @return {object}
    */
    _introContainer() {
        return {
            style: {
                margin: "5vh 0 0 0",
                width: "85vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-statrt",
                fontFamily: "Lato, sans-serif",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    margin: "10vh 0 5vh 0",
                }
            }
        }
    }

    /**
    * Settings for: _introLargeText
    *
    * @function _introLargeText
    * @return {object}
    */
    _introLargeText() {
        return {
            style: {
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontWeight: "700",
                fontSize: "6vw",
                letterSpacing: "0.6vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    fontSize: "3.75vw",
                    letterSpacing: "0.35vw"
                },
                "@media (min-width: 64em)": {
                    fontSize: "2vw",
                    letterSpacing: "0.1875vw"
                }
            }
        }
    }

    /**
    * Settings for: _introSmallText
    *
    * @function _introSmallText
    * @return {object}
    */
    _introSmallText() {
        return {
            style: {
                margin: "5vh 0 0 0",
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontWeight: "300",
                fontSize: "4vw",
                letterSpacing: "0.25vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    margin: "2.5vh 0 0 0",
                    width: "60%",
                    fontSize: "2.5vw",
                    letterSpacing: "0.15vw"
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
    * Settings for: _introDivider
    *
    * @function _introDivider
    * @return {object}
    */
    _introDivider() {
        return {
            style: {
                margin: "3.5vh 0 0 0",
                height: "2px",
                width: "35vw",
                backgroundColor: "white",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    margin: "2.5vh 0 0 0",
                    width: "22vw",
                },
                "@media (min-width: 64em)": {
                }
            }
        }
    }

    /**
    * Settings for: _servicesContainer
    *
    * @function _servicesContainer
    * @return {object}
    */
    _servicesContainer() {
        return {
            style: {
                margin: "10vh 0 5vh 0",
                width: "85vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-statrt",
                fontFamily: "Lato, sans-serif",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
            }
        }
    }

    /**
    * Settings for: _servicesLargeText
    *
    * @function _servicesLargeText
    * @return {object}
    */
    _servicesLargeText() {
        return {
            style: {
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontWeight: "400",
                fontSize: "4.5vw",
                letterSpacing: "0.5vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    fontSize: "2.5vw",
                    letterSpacing: "0.35vw"
                },
                "@media (min-width: 64em)": {
                    fontSize: "1.25vw",
                    letterSpacing: "0.1875vw"
                }
            }
        }
    }

    /**
    * Settings for: _servicesSmallText
    *
    * @function _servicesSmallText
    * @return {object}
    */
    _servicesSmallText() {
        return {
            style: {
                margin: "2.5vh 0 0 0",
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontWeight: "300",
                fontSize: "3.5vw",
                letterSpacing: "0.25vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    margin: "2.5vh 0 0 0",
                    width: "60%",
                    fontSize: "2.25vw",
                    letterSpacing: "0.15vw"
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
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        let {...other} = this.props;
        let _div = this._div();
        let _introContainer = this._introContainer();
        let _introDivider = this._introDivider();
        let _introLargeText = this._introLargeText();
        let _introSmallText = this._introSmallText();
        let _servicesContainer = this._servicesContainer();
        let _servicesLargeText = this._servicesLargeText();
        let _servicesSmallText = this._servicesSmallText();
        return (
            <div className="div" style={_div.style}>
                <div className="introContainer" style={_introContainer.style}>
                    <div className="introLargeText" style={_introLargeText.style}>ABOUT US</div>
                    <div className="introSmallText" style={_introSmallText.style}>
                    Northwest Aire Services, Inc. has been serving the Pacific Northwest since 2003.
                    </div>
                    <div className="introDivider" style={_introDivider.style}></div>
                </div>
                <div className="servicesContainer" style={_servicesContainer.style}>
                    <div className="servicesLargeText" style={_servicesLargeText.style}>WHO WE ARE</div>
                    <div className="servicesSmallText" style={_servicesSmallText.style}>
                    We are a full service commercial HVAC contractor with the resources and motivation to provide industry-leading solutions. Equipped to competitively bid any job, it is our hope to build lifelong relationships with our customers - relationships that will lead to an enduring and mutual satisfaction.
                    </div>
                </div>
            </div>
        )
    }    
}
module.exports = Radium(NorthwestAireContainerTwo);