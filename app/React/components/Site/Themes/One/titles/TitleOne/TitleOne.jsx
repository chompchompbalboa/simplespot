/**
* TitleOne.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* TitleOne
*
* @module TitleOne
*/
class TitleOne extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
        this.state = {};
    }

    /**
    * Validate the prop types
    *
    * @prop propTypes
    */
    static propTypes = {
        color: React.PropTypes.object.isRequired,
        height: React.PropTypes.object.isRequired,
        fontFamily: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired,
        textTransform: React.PropTypes.string.isRequired
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        color: {
            "0em": "255,255,255",
            "48em": "255,255,255",
            "64em": "255,255,255"
        },
        height: {
            "0em": "0vh",
            "48em": "20vh",
            "64em": "75vh"
        },
        fontFamily: "Open Sans, serif",
        text: "Your Restauarant",
        textTransform: "none"
    }

    /**
    * Settings for: _div
    *
    * @function _div
    * @return {object}
    */
    _div(color, display, fontFamily, height, text, textTransform) {
        return {
            style: {
                zIndex: "999",
                position: "absolute",
                top: "0vh",
                left: "0vw",
                width: "100vw",
                height: height['0em'],
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "rgb(" + color['0em'] + ")",
                fontFamily: fontFamily,
                fontWeight: "900",
                fontSize: "7vw",
                textTransform: textTransform,
                letterSpacing: "0.75vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    fontSize: "6vw",
                    height: height['48em'],
                    color: "rgb(" + color['48em'] + ")"
                },
                "@media (min-width: 64em)": {
                    fontSize: "6vw",
                    height: height['64em'],
                    color: "rgb(" + color['64em'] + ")"
                }
            },
            text: text
        }
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        var {color, display, fontFamily, height, text, textTransform, ...other} = this.props;
        let _div = this._div(color, display, fontFamily, height, text, textTransform);
        return (
            <div className="div" style={_div.style}>
                {_div.text}
            </div>
        )
    }    
}
// Export
module.exports = Radium(TitleOne);