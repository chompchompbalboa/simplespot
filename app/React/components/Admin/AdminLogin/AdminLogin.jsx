/**
* AdminLogin.jsx
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
* The top level admin component
*
* @module AdminLogin
*/
class AdminLogin extends React.Component {

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
    */
    handleSubmit(e) {
        e.preventDefault();
        let data = {
            email: this._email.value,
            password: this._password.value  
        };
        contentActions.fetchContent("LOGIN_ADMIN", data);
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
                width: "100vw",
                height: "100vh",
                backgroundColor: "white",
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
        let _form = this._form();
        return (
            <form style={_form.style} onSubmit={(e) => this.handleSubmit(e)}>
                <input ref={(c) => this._email = c} type="text" />
                <input ref={(c) => this._password = c} type="password" />
                <input type="submit" />
            </form>
        )
    }    
}
module.exports = Radium(AdminLogin);