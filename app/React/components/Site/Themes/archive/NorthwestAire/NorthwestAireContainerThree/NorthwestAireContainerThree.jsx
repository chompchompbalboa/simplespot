/**
* NorthwestAireContainerThree.jsx
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
* @module NorthwestAireContainerThree
*/
class NorthwestAireContainerThree extends React.Component {

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
                backgroundColor: "rgb(225,225,225)",
                color: "rgba(45,62,82)",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    backgroundColor: "white",
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
                width: "85vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                fontFamily: "Lato, sans-serif",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    width: "90vw",
                    
                },
                "@media (min-width: 64em)": {
                    
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
                    
                    fontWeight: "900",
                    fontSize: "4vw",
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
                margin: "4vh 0 0 0",
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontWeight: "400",
                fontSize: "4vw",
                letterSpacing: "0.25vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    
                    margin: "2.5vh 0 0 0",
                    width: "75%",
                    fontSize: "2.5vw",
                    letterSpacing: "0.15vw"
                },
                "@media (min-width: 64em)": {
                    width: "60%",
                    justifyContent: "flex-end",
                    
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
                margin: "4vh 0 0 0",
                height: "2px",
                width: "35vw",
                backgroundColor: "black",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    margin: "2.5vh 0 0 0",
                    width: "22vw",
                },
                "@media (min-width: 64em)": {
                    width: "20vw"
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
                margin: "5vh 0 5vh 0",
                width: "87.5%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Lato, sans-serif",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    width: "90%",
                    flexFlow: "row wrap",
                    justifyContent: "space-between"
                },
                "@media (min-width: 64em)": {
                    margin: "7.5vh 0 7.5vh 0",
                    width: "85%",
                    flexFlow: "row wrap",
                    justifyContent: "space-between"
                }
            }
        }
    }

    /**
    * Settings for: _service
    *
    * @function _service
    * @return {object}
    */
    _service() {
        return {
            style: {
                margin: "4vh 0 0 0",
                width: "100%",
                height: "55vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    width: "47.5%",
                    height: "42.75vw",
                },
                "@media (min-width: 64em)": {
                    margin: "7.5vh 0 0 0",
                    width: "47.5%",
                    height: "30vw"
                }
            }
        }
    }

    /**
    * Settings for: _serviceOne
    *
    * @function _serviceOne
    * @return {object}
    */
    _serviceOne() {
        return {
            style: {
                backgroundImage: "url(/uploads/57b35f928bcb76f5d65e79fa/hvac2.jpg)",
            }
        }
    }

    /**
    * Settings for: _serviceTwo
    *
    * @function _serviceTwo
    * @return {object}
    */
    _serviceTwo() {
        return {
            style: {
                backgroundImage: "url(/uploads/57b35f928bcb76f5d65e79fa/installation.jpg)",
            }
        }
    }

    /**
    * Settings for: _serviceThree
    *
    * @function _serviceThree
    * @return {object}
    */
    _serviceThree() {
        return {
            style: {
                backgroundImage: "url(/uploads/57b35f928bcb76f5d65e79fa/maintenance.jpg)",
            }
        }
    }

    /**
    * Settings for: _serviceFour
    *
    * @function _serviceFour
    * @return {object}
    */
    _serviceFour() {
        return {
            style: {
                backgroundImage: "url(/uploads/57b35f928bcb76f5d65e79fa/refrigeration.jpg)",
            }
        }
    }

    /**
    * Settings for: _serviceName
    *
    * @function _serviceName
    * @return {object}
    */
    _serviceName() {
        return {
            style: {
                width: "80%",
                minHeight: "7vh",
                padding: "3vh 5% 3vh 5%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "rgba(40,40,65,0.6)",
                color: "white",
                fontWeight: "700",
                fontSize: "6vw",
                letterSpacing: "0.6vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    width: "70%",
                    minHeight: "5vh",
                    padding: "1.5vh 5% 1.5vh 5%",
                    fontSize: "3vw",
                    letterSpacing: "0.35vw",
                },
                "@media (min-width: 64em)": {
                    width: "60%",
                    minHeight: "7.5vh",
                    padding: "2vh 5% 2vh 5%",
                    fontSize: "2vw",
                    letterSpacing: "0.1875vw",
                }
            }
        }
    }

    /**
    * Settings for: _serviceList
    *
    * @function _serviceList
    * @return {object}
    */
    _serviceList() {
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
    * Settings for: _serviceListItem
    *
    * @function _serviceListItem
    * @return {object}
    */
    _serviceListItem() {
        return {
            style: {
                fontSize: "4vw",
                margin: "1vh 0 2vh 0",
                listStyle: "none",
                letterSpacing: "0.25vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    fontSize: "2.5vw",
                    letterSpacing: "0.15vw"
                },
                "@media (min-width: 64em)": {
                    fontSize: "1.15vw",
                    letterSpacing: "0.05vw"
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
                margin: "4vh 0 0 0",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    width: "47.5%",
                    height: "42.75vw",
                },
                "@media (min-width: 64em)": {
                    margin: "7.5vh 0 0 0",
                    width: "47.5%",
                    height: "30vw"
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
                fontWeight: "700",
                fontSize: "4vw",
                letterSpacing: "0.25vw",
                margin: "0 0 1.5vh 0",
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
        let {...other} = this.props;
        let _div = this._div();
        let _introContainer = this._introContainer();
        let _introDivider = this._introDivider();
        let _introLargeText = this._introLargeText();
        let _introSmallText = this._introSmallText();
        let _service = this._service();
        let _serviceOne = this._serviceOne();
        let _serviceTwo = this._serviceTwo();
        let _serviceThree = this._serviceThree();
        let _serviceFour = this._serviceFour();
        let _serviceName = this._serviceName();
        let _servicesContainer = this._servicesContainer();
        let _textContainer = this._textContainer();
        let _serviceList = this._serviceList();
        let _serviceListItem = this._serviceListItem();
        let _largeText = this._largeText();
        return (
            <div className="div" style={_div.style}>
                <div className="servicesContainer" style={_servicesContainer.style}>
                    <div className="introContainer" style={_introContainer.style}>
                        <div className="introLargeText" style={_introLargeText.style}>OUR SERVICES</div>
                        <div className="introSmallText" style={_introSmallText.style}>
                            From retro-fitting to new construction, small light commercial buildings to large multi-million dollar projects, we offer a wide a range of services
                        </div>
                        <div className="introDivider" style={_introDivider.style}></div>
                    </div>
                    <div className="service" style={[_service.style, _serviceOne.style]}>
                        <div className="serviceName" style={_serviceName.style}>AIR CONDITIONING + HEATING</div>
                    </div>
                    <div className="textContainer" style={_textContainer.style}>
                        <ul className="serviceList" style={_serviceList.style}>
                            <li className="serviceListItem" style={_serviceListItem.style}>Our highly trained and seasoned HVAC technicians can install, service, and repair any type of air conditioning or heating system that you need for your business.</li>
                            <li className="serviceListItem" style={_serviceListItem.style}>We design and recommend systems that maximize energy efficiency and keep your heating and cooling costs to a minimum.</li>

                        </ul>
                    </div>
                    <div className="service" style={[_service.style, _serviceTwo.style]}>
                        <div className="serviceName" style={_serviceName.style}>INSTALLATION</div>
                    </div>
                    <div className="textContainer" style={_textContainer.style}>
                        <ul className="serviceList" style={_serviceList.style}>
                            <li className="serviceListItem" style={_serviceListItem.style}></li>
                            <li className="serviceListItem" style={_serviceListItem.style}></li>
                        </ul>
                    </div>
                    <div className="service" style={[_service.style, _serviceThree.style]}>
                        <div className="serviceName" style={_serviceName.style}>MAINTENANCE + SERVICE</div>
                    </div>
                    <div className="textContainer" style={_textContainer.style}>
                        <ul className="serviceList" style={_serviceList.style}>
                            <li className="serviceListItem" style={_serviceListItem.style}></li>
                            <li className="serviceListItem" style={_serviceListItem.style}></li>
                        </ul>
                    </div>
                    <div className="service" style={[_service.style, _serviceFour.style]}>
                        <div className="serviceName" style={_serviceName.style}>REFRIGERATION</div>
                    </div>
                    <div className="textContainer" style={_textContainer.style}>
                        <ul className="serviceList" style={_serviceList.style}>
                            <li className="serviceListItem" style={_serviceListItem.style}></li>
                            <li className="serviceListItem" style={_serviceListItem.style}></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }    
}
module.exports = Radium(NorthwestAireContainerThree);