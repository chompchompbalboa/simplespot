/**
* AppHomeLandingArrow.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* AppHomeLandingArrow
*
* @module AppHomeLandingArrow
*/
class AppHomeLandingArrow extends React.Component {

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
    * Settings for: _arrow
    *
    * @function _arrow
    * @return {object}
    */
    _arrow() {
        return {
            style: {
                width: "4vh",
                height: "4vh",
                backgroundPosition: "center center",
                backgroundRepeat: "no repeat",
                backgroundSize: "cover",
                backgroundImage: "url(assets/App/icons/arrow_white.png)",
                animation: "arrowUpDown 2s linear infinite",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    width: "6vh",
                    height: "6vh"
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
                height: "15vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
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
        let _arrow = this._arrow();
        let _div = this._div();
        return (
            <div style={_div.style}>
                <div className="arrow" style={_arrow.style}></div>
            </div>
        )
    }    
}
module.exports = Radium(AppHomeLandingArrow);