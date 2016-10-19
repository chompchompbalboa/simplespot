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
                backgroundColor: "rgb(250,250,250)",
                color: "rgba(45,62,82)",
                "@media (min-width: 48em) and (max-width: 64em)": {
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
                margin: "5vh 0 5vh 0",
                width: "85%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Lato, sans-serif",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
            }
        }
    }

    /**
    * Settings for: _servicesIntro
    *
    * @function _servicesIntro
    * @return {object}
    */
    _servicesIntro() {
        return {
            style: {
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                color: "black",
                fontWeight: "700",
                fontSize: "6vw",
                letterSpacing: "0.6vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
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
                height: "60vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: "url(/uploads/57b35f928bcb76f5d65e79fa/hvac.jpg)",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
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
                backgroundColor: "rgba(40,40,99,0.9)",
                color: "white",
                fontWeight: "700",
                fontSize: "6vw",
                letterSpacing: "0.6vw",
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
        let _service = this._service();
        let _serviceName = this._serviceName();
        let _servicesContainer = this._servicesContainer();
        let _servicesIntro = this._servicesIntro();
        return (
            <div className="div" style={_div.style}>
                <div className="servicesContainer" style={_servicesContainer.style}>
                    <div className="servicesIntro" style={_servicesIntro.style}>OUR SERVICES</div>
                    <div className="service" style={_service.style}>
                        <div className="serviceName" style={_serviceName.style}>AIR CONDITIONING + HEATING</div>
                    </div>
                    <div className="service" style={_service.style}>
                        <div className="serviceName" style={_serviceName.style}>INSTALLATION</div>
                    </div>
                    <div className="service" style={_service.style}>
                        <div className="serviceName" style={_serviceName.style}>MAINTENANCE + SERVICE</div>
                    </div>
                    <div className="service" style={_service.style}>
                        <div className="serviceName" style={_serviceName.style}>REFRIGERATION</div>
                    </div>
                </div>
            </div>
        )
    }    
}
module.exports = Radium(NorthwestAireContainerThree);