/**
* AppDashboardForm.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const contentActions = require('../../../actions/contentActions');

const AppDashboardContentHeader = require('../AppDashboardContentHeader/AppDashboardContentHeader.jsx');

/**
* AppDashboardForm
*
* @module AppDashboardForm
*/
class AppDashboardForm extends React.Component {

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
    * Handle Submit
    *
    * @function handleSubmit
    * @return {object}
    */
    handleSubmit(e) {
        e.preventDefault();
        let data = {
            name: this.nameInput.value,
            email: this.emailInput.value
        };
        contentActions.fetchContent("APP_PROFILE_SAVE", data);
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
                width: "100%",
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
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        let {...other} = this.props;
        let _form = this._form();
        return (
            <form className="form" style={_form.style} onSubmit={(e) => this.handleSubmit(e)}>
            </form>
        )
    }    
}
module.exports = Radium(AppDashboardForm);