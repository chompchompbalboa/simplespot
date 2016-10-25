/**
* AppDashboardContentForm.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const AppDashboardContentFormInput = require('../AppDashboardContentFormInput/AppDashboardContentFormInput.jsx');
const AppDashboardContentFormMessage = require('../AppDashboardContentFormMessage/AppDashboardContentFormMessage.jsx');
const AppDashboardContentFormSubmit = require('../AppDashboardContentFormSubmit/AppDashboardContentFormSubmit.jsx');

/**
* AppDashboardContentForm
*
* @module AppDashboardContentForm
*/
class AppDashboardContentForm extends React.Component {

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
    * Settings for: _form
    *
    * @function _form
    * @return {object}
    */
    _form() {
        return {
            style: {
                margin: "0 0 5vh 0",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
            }
        }
    }

    /**
    * Settings for: __inputs
    *
    * @function __inputs
    * @return {object}
    */
    __inputs(inputs) {
        let payload = [];
        for (let i in inputs) {
            payload.push(
                <AppDashboardContentFormInput
                    key={i}
                    content={this.props.content}
                    input={inputs[i]}
                />
            );
        }
        return payload;
    }

    /**
    * Settings for: __submits
    *
    * @function __submits
    * @return {object}
    */
    __submits(inputs, submits) {
        let payload = [];
        for (let i in submits) {
            payload.push(
                <AppDashboardContentFormSubmit
                    key={i}
                    content={this.props.content}
                    inputs={inputs}
                    submit={submits[i]}
                />
            )
        }
        return payload;
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        let {content, inputs, submits, ...other} = this.props;
        let _form = this._form();
        let __inputs = this.__inputs(inputs);
        let __submits = this.__submits(inputs, submits);
        return (
            <form ref={(c) => this.form = c} style={_form.style}>
                {__inputs}
                {__submits}
                <AppDashboardContentFormMessage message={content.app.messages.submit}/>
            </form>
        )
    }    
}
module.exports = Radium(AppDashboardContentForm);