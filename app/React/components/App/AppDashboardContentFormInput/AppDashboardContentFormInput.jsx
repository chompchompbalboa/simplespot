/**
* AppDashboardContentFormInput.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const AppDashboardContentFormInputAddress = require('../AppDashboardContentFormInputAddress/AppDashboardContentFormInputAddress.jsx');
const AppDashboardContentFormInputHours = require('../AppDashboardContentFormInputHours/AppDashboardContentFormInputHours.jsx');
const AppDashboardContentFormInputText = require('../AppDashboardContentFormInputText/AppDashboardContentFormInputText.jsx');
/**
* AppDashboardContentFormInput
*
* @module AppDashboardContentFormInput
*/
class AppDashboardContentFormInput extends React.Component {

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
                width: "100%",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
            }
        }
    }

    /**
    * Settings for: _label
    *
    * @function _label
    * @return {object}
    */
    _label(label) {
        return {
            style: {
                color: "black",
                fontFamily: "Lato, sans-serif",
                fontWeight: "700",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    margin: "1.5vh 0 1vh 0.25vw",
                    fontSize: "1.25vw",
                    letterSpacing: "0.125vw"
                }
            },
            text: label
        }
    }

    /**
    * Settings for: __input
    *
    * @function __input
    * @return {object}
    */
    __input(input) {
        let element;
        switch (input.type) {
            case "address":
                element = AppDashboardContentFormInputAddress;
            break;
            case "hours":
                element = AppDashboardContentFormInputHours;
            break;
            case "text":
                element = AppDashboardContentFormInputText;
            break;
        }
        input.props.content = this.props.content;
        return (
            React.createElement(
                element,
                input.props,
            )
        )   
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        let {input, ...other} = this.props;
        let _div = this._div();
        let _label = this._label(input.label);
        let __input = this.__input(input);
        return (
            <div style={_div.style}>
                <div className="label" style={_label.style}>{_label.text}</div>
                {__input}
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardContentFormInput);