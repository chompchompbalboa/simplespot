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
                height: "100vh",
                display: "flex",
                flexFlow: "column wrap",
                justifyContent: "flex-start",
                alignItems: "center",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(/uploads/57b35f928bcb76f5d65e79fa/needle.jpg)",
                "@media (min-width: 48em)": {
                    alignItems: "flex-start"
                }
            }
        }
    }

    /**
    * Settings for: _header
    *
    * @function _header
    * @return {object}
    */
    _header() {
        return {
            style: {
                width: "80vw",
                height: "20vh",
                display: "flex",
                fontFamily: "Josefin Sans, sans-serif",
                fontSize: "8vw",
                fontWeight: "700",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgb(27,48,42)",
                color: "white",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    margin: "0 0 0 10vw",
                    width: "45vw",
                    height: "15vh",
                    fontSize: "3.75vw",
                },
                "@media (min-width: 64em)": {
                    margin: "0 0 0 15vw",
                    width: "32.5vw",
                    height: "20vh",
                    fontSize: "2.5vw",
                }
            }
        }
    }

    /**
    * Settings for: _headerLine
    *
    * @function _headerLine
    * @return {object}
    */
    _headerLine() {
        return {
            style: {
                margin: "1vh 0 0 0",
                letterSpacing: "0.5vw",
                width: "85%",
                textAlign: "justify",
                whiteSpace: "nowrap"
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
                padding: "5vh 5vw",
                display: "flex",
                fontFamily: "Josefin Sans, sans-serif",
                fontWeight: "700",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                backgroundColor: "rgba(27,48,42,0.25)",
                color: "white",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    margin: "37.5vh 0 0 20vw",
                    padding: "4vh 7vw"
                },
                "@media (min-width: 64em)": {
                    margin: "37.5vh 0 0 22.5vw",
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
                fontSize: "9vw",
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
                fontSize: "5vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    fontSize: "4vw",
                },
                "@media (min-width: 64em)": {
                    fontSize: "3vw",
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
        let _header = this._header();
        let _headerLine = this._headerLine();
        return (
            <div className="div" style={_div.style}>
                <div className="header" style={_header.style}>
                    <div className="headerLine" style={_headerLine.style}>NORTHWEST</div>
                    <div className="headerLine" style={_headerLine.style}>AIRE SERVICES</div>
                </div>
                <div className="container" style={_container.style}>
                    <div className="containerLine" style={[_containerLine.style, _containerLineTop.style]}>FOR ALL YOUR</div>
                    <div className="containerLine" style={[_containerLine.style, _containerLineBottom.style]}>HVAC NEEDS</div>
                </div>
            </div>
        )
    }    
}
module.exports = Radium(NorthwestAireContainerOne);