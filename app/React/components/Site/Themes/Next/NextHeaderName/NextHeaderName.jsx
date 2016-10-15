/**
* NextHeaderName.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';


/**
* NextHeaderName
*
* @module NextHeaderName
*/
class NextHeaderName extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
    }

    /**
    * Validate the prop types
    *
    * @prop propTypes
    */
    static propTypes = {
        div: React.PropTypes.object.isRequired
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        div: {
            text: "Next."
        }
    }

    /**
    * Settings for: _div
    *
    * @function _div
    * @return {object}
    */
    _div(div) {
        return {
            style: {
                height: "20vh",
                width: "83vh",
                padding: "0 0 0 5vh",
                backgroundColor: "rgba(255,0,0,0.65)",
                color: "white",
                margin: "0 0 0 4vw",
                fontFamily: "Helvetica, serif",
                fontSize: "5vw",
                fontWeight: "500",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                whiteSpace: "nowrap",
                textTransform: "uppercase",
                letterSpacing: "0.25vw",
                "@media (min-width: 44em) and (max-width: 56em)": {
                    margin: "0 0 0 6vw"
                },
                "@media (min-width: 56em)": {
                    margin: "0 0 0 10vw",
                    fontSize: "4vw"
                }
            },
            text: "Check it out " + String.fromCharCode(160) + String.fromCharCode(160) + String.fromCharCode(160) + String.fromCharCode(8594)
        }
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        var {div, ...other} = this.props;
        let _div = this._div(div);
        return (
            <div className="div" style={_div.style}>
                {_div.text}
            </div>
        )
    }    
}
// Export
module.exports = Radium(NextHeaderName);