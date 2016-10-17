/**
* AppLogin.jsx
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
* AppLogin
*
* @module AppLogin
*/
class AppLogin extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
    * Handle Input Change
    *
    * @function handleInputChange
    * @return {object}
    */
    handleInputChange() {
        this.setState({
            email: this.emailInput.value,
            password: this.passwordInput.value
        })
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
            email: this.emailInput.value,
            password: this.passwordInput.value
        };
        contentActions.fetchContent("LOGIN_APP", data);
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
                position: "relative",
                top: "0vh",
                left: "0vw",
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(250,250,250,1)",
                fontFamily: "Lato, sans-serif",
                fontWeight: "300"
            }
        }
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
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start"
            }
        }
    }

    /**
    * Settings for: _input
    *
    * @function _input
    * @return {object}
    */
    _input() {
        return {
            style: {
                margin: "1.25vh 0 0 0",
                padding: "0 1.25vw",
                height: "5vh",
                width: "75vw",
                border: "1px solid black",
                fontSize: "3.25vw",
                letterSpacing: "0.25vw",
                borderRadius: "2px",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    padding: "0 0.75vw",
                    height: "3.5vh",
                    width: "40vw",
                    fontSize: "1.5vw"
                },
                "@media (min-width: 64em)": {
                    padding: "0 0.5vw",
                    height: "5vh",
                    width: "20vw",
                    fontSize: "0.875vw",
                    letterSpacing: "0.125vw"
                }  
            }
        }
    }

    /**
    * Settings for: _logoContainer
    *
    * @function _logoContainer
    * @return {object}
    */
    _logoContainer() {
        return {
            style: {
                margin: "0 0 1vh 0",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center"
            }
        }
    }

    /**
    * Settings for: _logoImage
    *
    * @function _logoImage
    * @return {object}
    */
    _logoImage() {
        return {
            style: {
                height: "2.5vh",
                width: "2.5vh",
                backgroundPosition: "center center",
                backgroundRepeat: "no repeat",
                backgroundSize: "cover",
                backgroundImage: "url(assets/App/icons/logo_black.png)",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    height: "2vh",
                    width: "2vh"
                },
                "@media (min-width: 64em)": {

                }
            }
        }
    }

    /**
    * Settings for: _logoText
    *
    * @function _logoText
    * @return {object}
    */
    _logoText() {
        return {
            style: {
                margin: "0 0 0 1.5vw",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    margin: "0 0 0 1vw",
                    fontSize: "1.75vh"
                },
                "@media (min-width: 64em)": {
                    margin: "0 0 0 0.75vw"
                }
            }
        }
    }

    /**
    * Settings for: _message
    *
    * @function _message
    * @return {object}
    */
    _message(message) {
        return {
            style: {
                margin: "3vh 0 0 0",
                width: "77.5vw",
                height: "15vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                fontSize: "3.5vw",
                fontWeight: "400",
                color: "rgb(200,0,0)",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    width: "41.5vw",
                    fontSize: "1.375vw"
                },
                "@media (min-width: 64em)": {
                    width: "21vw",
                    fontSize: ".95vw"
                }
            },
            text: message
        }
    }

    /**
    * Settings for: _submit
    *
    * @function _submit
    * @return {object}
    */
    _submit() {
        return {
            style: {
                cursor: "pointer",
                margin: "1.25vh 0 0 0",
                height: "5vh",
                width: "77.5vw",
                border: "1px solid black",
                fontSize: "3.25vw",
                letterSpacing: "0.25vw",
                transition: "background-color 0.25s ease, color 0.25s ease",
                borderRadius: "2px",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    height: "3.5vh",
                    width: "41.5vw",
                    fontSize: "1.5vw"
                },
                "@media (min-width: 64em)": {
                    height: "5vh",
                    width: "21vw",
                    fontSize: "0.875vw",
                    letterSpacing: "0.125vw"
                },
                ":hover": {
                    backgroundColor: "black",
                    color: "white"
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
        let {content, ...other} = this.props;
        let _div = this._div();
        let _form = this._form();
        let _input = this._input();
        let _logoContainer = this._logoContainer();
        let _logoImage = this._logoImage();
        let _logoText = this._logoText();
        let _message = this._message(content.app.messages.login);
        let _submit = this._submit();
        return (
            <div id="app" style={_div.style}>
                <div className="logoContainer" style={_logoContainer.style}>
                    <div className="logoImage" style={_logoImage.style}></div>
                    <div className="logoText" style={_logoText.style}>SIMPLESPOT</div>
                </div>
                <form style={_form.style} onSubmit={(e) => this.handleSubmit(e)}>
                    <input ref={(c) => this.emailInput = c} type="text" value={this.state.email} style={_input.style} onChange={this.handleInputChange} placeholder="Email Address"/>
                    <input ref={(c) => this.passwordInput = c} type="password" value={this.state.password} style={_input.style} onChange={this.handleInputChange} placeholder="Password"/>
                    <input type="submit" value="Login" style={_submit.style}/>
                </form>
                <div className="message" style={_message.style}>
                    {_message.text}
                </div>
            </div>
        )
    }    
}
module.exports = Radium(AppLogin);