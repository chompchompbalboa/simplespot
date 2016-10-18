/**
* AppDashboardSidebarHeader.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const contentActions = require('../../../actions/contentActions');

/**
* AppDashboardSidebarHeader
*
* @module AppDashboardSidebarHeader
*/
class AppDashboardSidebarHeader extends React.Component {

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
                width: "10vw",
                height: "10vh",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontSize: "2vh",
                letterSpacing: "0.25vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    letterSpacing: "0.1875vw"
                },
                "@media (min-width: 64em)": {
                    width: "80%",
                    letterSpacing: "0.125vw"
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
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center"
            }
        }
    }

    /**
    * Settings for: _logoImage
    *
    * @function _logoImage
    * @return {object}
    */
    _logoImage() {
        return {
            style: {
                height: "2.5vh",
                width: "2.5vh",
                backgroundPosition: "center center",
                backgroundRepeat: "no repeat",
                backgroundSize: "cover",
                backgroundImage: "url(/assets/App/icons/logo_black.png)",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    height: "2vh",
                    width: "2vh"
                },
                "@media (min-width: 64em)": {
                    backgroundImage: "url(/assets/App/icons/logo_white.png)",
                }
            }
        }
    }

    /**
    * Settings for: _logoText
    *
    * @function _logoText
    * @return {object}
    */
    _logoText() {
        return {
            style: {
                display: "none",
                margin: "0 0 0 1.5vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    margin: "0 0 0 1vw",
                    fontSize: "1.75vh"
                },
                "@media (min-width: 64em)": {
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    margin: "0 0 0 0.75vw"
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
        let _logoContainer = this._logoContainer();
        let _logoImage = this._logoImage();
        let _logoText = this._logoText();

        return (
            <div className="div" style={_div.style}>
                <div className="logoContainer" style={_logoContainer.style}>
                    <div className="logoImage" style={_logoImage.style}></div>
                    <div className="logoText" style={_logoText.style}>SIMPLESPOT</div>
                </div>
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardSidebarHeader);