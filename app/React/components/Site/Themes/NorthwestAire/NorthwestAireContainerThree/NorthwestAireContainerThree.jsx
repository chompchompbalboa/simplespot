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
                color: "rgb(45,62,82)",
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
        let _servicesContainer = this._servicesContainer();
        let _servicesIntro = this._servicesIntro();
        return (
            <div className="div" style={_div.style}>
                <div className="servicesContainer" style={_servicesContainer.style}>
                    <div className="servicesIntro" style={_servicesIntro.style}>OUR SERVICES</div>
                </div>
            </div>
        )
    }    
}
module.exports = Radium(NorthwestAireContainerThree);