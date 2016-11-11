/**
* NorthwestAireContainerOne.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const NorthwestAireLogo = require('../NorthwestAireLogo/NorthwestAireLogo.jsx');

/**
* The top level app component
*
* @module NorthwestAireContainerOne
*/
class NorthwestAireContainerOne extends React.Component {

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
                height: "90vh",
                display: "flex",
                flexFlow: "column wrap",
                justifyContent: "flex-start",
                alignItems: "center",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(/uploads/57b35f928bcb76f5d65e79fa/needle.jpg)",
                "@media (min-width: 48em)": {
                    height: "100vh",
                    alignItems: "flex-start"
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
                margin: "37.5vh 0 0 10vw",
                padding: "3.5vh 2.25vh",
                display: "flex",
                fontFamily: "Lato, sans-serif",
                fontWeight: "700",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                backgroundColor: "rgba(27,48,42,0.25)",
                color: "white",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    fontFamily: "Josefin Sans, sans-serif",
                    margin: "37.5vh 0 0 20vw",
                    padding: "2vh 3.5vw"
                },
                "@media (min-width: 64em)": {
                    margin: "27.5vh 0 0 15vw",
                    padding: "5vh 3vw"
                }
            }
        }
    }

    /**
    * Settings for: _containerLine
    *
    * @function _containerLine
    * @return {object}
    */
    _containerLine() {
        return {
            style: {
                margin: "1vh 0 0 2vw",
                letterSpacing: "0.5vw",
                textAlign: "left",
                whiteSpace: "nowrap",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    margin: "1vh 0 0 1vw",
                },
                "@media (min-width: 64em)": {
                    margin: "1vh 0 0 0.5vw",
                }
            }
        }
    }

    /**
    * Settings for: _containerLineBottom
    *
    * @function _containerLineBottom
    * @return {object}
    */
    _containerLineBottom() {
        return {
            style: {
                fontSize: "10vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    fontSize: "6.5vw",
                },
                "@media (min-width: 64em)": {
                    fontSize: "4.5vw",
                }
            }
        }
    }

    /**
    * Settings for: _containerLineTop
    *
    * @function _containerLineTop
    * @return {object}
    */
    _containerLineTop() {
        return {
            style: {
                fontSize: "6vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    fontSize: "4vw",
                },
                "@media (min-width: 64em)": {
                    fontSize: "4vw",
                }
            }
        }
    }

    /**
    * Settings for: _logoContainer
    *
    * @function _logoContainer
    * @return {object}
    */
    _logoContainer() {
        return {
            style: {
                padding: "1vh 3vh",
                backgroundColor: "rgb(27,48,42)",
                color: "white",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    margin: "0 0 0 10vw",
                },
                "@media (min-width: 64em)": {
                    margin: "0 0 0 15vw",
                    width: "32.5vw",
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
        let _containerLine = this._containerLine();
        let _containerLineBottom = this._containerLineBottom();
        let _containerLineTop = this._containerLineTop();
        let _div = this._div();
        let _logoContainer = this._logoContainer();
        return (
            <div className="div" style={_div.style}>
                <div className="logoContainer" style={_logoContainer.style}>
                    <NorthwestAireLogo />
                </div>
                <div className="container" style={_container.style}>
                    <div className="containerLine" style={[_containerLine.style, _containerLineTop.style]}>WE'RE HERE FOR ALL</div>
                    <div className="containerLine" style={[_containerLine.style, _containerLineTop.style]}>YOUR HVAC NEEDS</div>
                </div>
            </div>
        )
    }    
}
module.exports = Radium(NorthwestAireContainerOne);