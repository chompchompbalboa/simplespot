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
                flexFlow: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(250,250,250,1)",
                color: "black",
                "@media (min-width: 48em)": {
                }
            }
        }
    }

    /**
    * Settings for: _intro
    *
    * @function _intro
    * @return {object}
    */
    _intro() {
        return {
            style: {
                margin: "5vh 0 0 0",
                width: "85vw",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Open Sans, sans-serif",
                fontWeight: "700",
                fontSize: "6vw",
                letterSpacing: "0.5vw",
                "@media (min-width: 48em)": {
                }
            }
        }
    }

    /**
    * Settings for: _text
    *
    * @function _text
    * @return {object}
    */
    _text() {
        return {
            style: {
                margin: "5vh 0 5vh 0",
                width: "85vw",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Open Sans, sans-serif",
                fontWeight: "300",
                fontSize: "4vw",
                letterSpacing: "0.25vw",
                "@media (min-width: 48em)": {
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
        let _intro = this._intro();
        let _text = this._text();
        return (
            <div className="div" style={_div.style}>
                <div className="intro" style={_intro.style}>WELCOME</div>
                <div className="text" style={_text.style}>
                We are Northwest Aire Services, a full service commercial HVAC contractor with the resources and motivation to provide industry-leading solutions. Equipped to competitively bid any job, it is our hope to build lifelong relationships with our customers - relationships that will lead to an enduring and mutual satisfaction.
                </div>
            </div>
        )
    }    
}
module.exports = Radium(NorthwestAireContainerTwo);