/**
* NorthwestAireMenu.jsx
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
* @module NorthwestAireMenu
*/
class NorthwestAireMenu extends React.Component {

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
                position: "fixed",
                width: "100vw",
                height: "15vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }
        }
    }

    /**
    * Settings for: _linesContainer
    *
    * @function _linesContainer
    * @return {object}
    */
    _linesContainer() {
        return {
            style: {
                width: "100%",
                height: "10vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center"
            }
        }
    }

    /**
    * Settings for: _linesLarge
    *
    * @function _linesLarge
    * @return {object}
    */
    _linesLarge() {
        return {
            style: {
                backgroundColor: "black",
                width: "100%",
                height: "60%",
            }
        }
    }

    /**
    * Settings for: _linesSmall
    *
    * @function _linesSmall
    * @return {object}
    */
    _linesSmall() {
        return {
            style: { 
                backgroundColor: "black",
                width: "100%",
                height: "10%",
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
        let _linesContainer = this._linesContainer();
        let _linesLarge = this._linesLarge();
        let _linesSmall = this._linesSmall();
        return (
            <div className="div" style={_div.style}>
                <div className="linesContainer" style={_linesContainer.style}>
                    <div className="linesSmall" style={_linesSmall.style}></div>
                    <div className="linesLarge" style={_linesLarge.style}></div>
                    <div className="linesSmall" style={_linesSmall.style}></div>
                </div>
            </div>
        )
    }    
}
module.exports = Radium(NorthwestAireMenu);