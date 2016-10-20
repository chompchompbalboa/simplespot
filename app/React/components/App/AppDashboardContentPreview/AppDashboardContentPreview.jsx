/**
* AppDashboardContentPreview.jsx
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
* AppDashboardContentPreview
*
* @module AppDashboardContentPreview
*/
class AppDashboardContentPreview extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
        this.state = {
            active: "desktop"
        };
        this.setActive = this.setActive.bind(this);
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
    * Settings for: setActive
    *
    * @function setActive
    * @return {object}
    */
    setActive(active) {
        this.setState({
            active: active
        });
    }

    /**
    * Settings for: _deviceSelecter
    *
    * @function _deviceSelecter
    * @return {object}
    */
    _deviceSelecter() {
        return {
            style: {
                display: "none",
                "@media (min-width: 64em)": {  
                    fontSize: "1.5vh",
                    letterSpacing: "0.125vw",
                    textTransform: "uppercase",                 
                    height: "3vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid black"
                }
            }
        }
    }

    /**
    * Settings for: _deviceDesktop
    *
    * @function _deviceDesktop
    * @return {object}
    */
    _deviceDesktop() {
        return {
            style: {
                cursor: "pointer",
                border: "1px solid black",
                width: "15vw",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: (this.state.active === "desktop" ? "white" : "black"),
                transition: "background-color 0.25s ease, color 0.25s ease",
                backgroundColor: (this.state.active === "desktop" ? "black" : "transparent"),
                ":hover": {
                    backgroundColor: (this.state.active === "desktop" ? "black" : "rgb(200,200,200)")
                }
            }
        }
    }

    /**
    * Settings for: _deviceMobile
    *
    * @function _deviceMobile
    * @return {object}
    */
    _deviceMobile() {
        return {
            style: {
                cursor: "pointer",
                border: "1px solid black",
                width: "15vw",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: (this.state.active === "mobile" ? "white" : "black"),
                transition: "background-color 0.25s ease, color 0.25s ease",
                backgroundColor: (this.state.active === "mobile" ? "black" : "transparent"),
                ":hover": {
                    backgroundColor: (this.state.active === "mobile" ? "black" : "rgb(200,200,200)")
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
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
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
    * Settings for: _iframe
    *
    * @function _iframe
    * @return {object}
    */
    _iframe() {
        let dimensions = {
            width: "95%",
            height: "87.5%"
        };
        switch (this.state.active) {
            case "mobile":
                dimensions.width = "30%";
            break;
        }
        return {
            src: "https://www.simplespot.co/preview/nw-aire",
            style: {
                margin: "2% 0 0 0",
                width: "100%",
                height: "100%",
                border: "none",
                boxShadow: "0 0 1px black",
                "@media (min-width: 64em)": {   
                    width: dimensions.width,
                    height: dimensions.height
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
        let {content, ...other} = this.props;
        let _div = this._div();
        let _deviceSelecter = this._deviceSelecter();
        let _deviceDesktop = this._deviceDesktop();
        let _deviceMobile = this._deviceMobile();
        let _iframe = this._iframe();
        return (
            <div style={_div.style}>
                <div className="deviceSelecter" style={_deviceSelecter.style}>
                    <div key="desktop" className="selectDesktop" style={_deviceDesktop.style} onClick={(e) => this.setActive("desktop")}>Desktop</div>
                    <div key="mobile" className="selectMobile" style={_deviceMobile.style} onClick={(e) => this.setActive("mobile")}>Mobile</div>
                </div>
                <iframe src={_iframe.src}style={_iframe.style}></iframe>
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardContentPreview);