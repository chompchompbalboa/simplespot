/**
* AppHome.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

/**
* This module renders the the welcome message the app editor
*
* @module AppHome
*/
var AppHome = React.createClass({

    /**
    * Validate props types
    *
    * @prop propTypes
    * @return {object}
    */
    propTypes: {
    },

    /**
    * Get the default props
    *
    * @function getDefaultProps
    * @return {object}
    */
    getDefaultProps: function() {
        return {
            section: {
                style: {}
            }
        }
    },

    /**
    * Get the initial values for the form
    *
    * @function getDefaultState
    * @return {object}
    */
    getInitialState: function() {
        return {
            userForm: {
                email: "",
                password: ""
            }
        }
    },

    /**
    * Change the controlled value for the inputs
    *
    * @function formValueChange
    * @return {object}
    */
    formValueChange: function(e, form) {
        switch (form) {
            case "email": 
                this.setState({
                    userForm: {
                        email: e.target.value,
                        password: this.state.userForm.password
                    }
                });
            break;
            case "password":
                this.setState({
                    userForm: {
                        email: this.state.userForm.email,
                        password: e.target.value
                    }
                });
            break;
        }
    },

    /**
    * Settings for: _form
    *
    * @function _form
    * @return {object}
    */
    _form: function() {
        return {
            style: {
                width: "50%",
                height: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }
        }
    },

    /**
    * Settings for: _formContainer
    *
    * @function _formContainer
    * @return {object}
    */
    _formContainer: function() {
        return {
            style: {
                width: "50vh",
                height: "50vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "black",
                borderRadius: "25vh"
            }
        }
    },

    /**
    * Settings for: _section
    *
    * @function _section
    * @return {object}
    */
    _section: function() {
        return {
            style: {
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }
        }
    },

    /**
    * Settings for: _userEmail
    *
    * @function _userEmail
    * @return {object}
    */
    _userEmail: function() {
        return {
            placeholder: "Email Address",
            style: {
                margin: "0.5vh 0 0.5vh 0",
                padding: "0.5vw",
                width: "100%",
                height: "3vh",
                color: "white",
                backgroundColor: "transparent",
                border: "1px solid white",
                fontFamily: "titilliumlight",
                fontSize: "2vh"
            }
        }
    },

    /**
    * Settings for: _userPassword
    *
    * @function _userPassword
    * @return {object}
    */
    _userPassword: function() {
        return {
            placeholder: "Password",
            style: {
                margin: "0.5vh 0 0.5vh 0",
                padding: "0.5vw",
                width: "100%",
                height: "3vh",
                color: "white",
                backgroundColor: "transparent",
                border: "1px solid white",
                fontFamily: "titilliumlight",
                fontSize: "2vh"
            }
        }
    },

    /**
    * Settings for: _userSubmit
    *
    * @function _userSubmit
    * @return {object}
    */
    _userSubmit: function() {
        return {
            style: {
                cursor: "pointer",
                margin: "0.5vh 0 0.5vh 0",
                padding: "0.5vw",
                width: "100%",
                height: "3vh",
                color: "white",
                backgroundColor: "transparent",
                border: "1px solid white",
                fontFamily: "titilliumlight",
                fontSize: "2vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                ":hover": {
                    color: "black",
                    backgroundColor: "white"
                }
            }
        }
    },

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render: function() {
        var {display, utils, ...other} = this.props;
        let _form = this._form();
        let _formContainer = this._formContainer();
        let _section = this._section();
        let _userEmail = this._userEmail();
        let _userPassword = this._userPassword();
        let _userSubmit = this._userSubmit();

        let email = this.state.userForm.email;
        let password = this.state.userForm.password;
        let submitText = display.app.AppHome.submitText;
        let submitFunction = (submitText === "Login" ? utils.appHandler.loginRequest : utils.appHandler.registerRequest);
        return (
            <section className="section" style={_section.style}>
                <div className="formContainer" style={_formContainer.style}>
                    <form style={_form.style}>
                        <input type="text" style={_userEmail.style} placeholder={_userEmail.placeholder} value={email} onChange={(e) => this.formValueChange(e, "email")} onBlur={(e) => utils.appHandler.doesUserExist(e, email)}/>
                        <input type="password" style={_userPassword.style} placeholder={_userPassword.placeholder} value={password} onChange={(e) => this.formValueChange(e, "password")} />
                        <a style={_userSubmit.style} onClick={(e) => submitFunction(e, email, password)}>{submitText}</a>
                    </form>
                </div>
            </section>
        )
    }    
});
module.exports = Radium(AppHome);