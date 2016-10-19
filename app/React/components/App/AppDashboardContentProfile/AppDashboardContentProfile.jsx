/**
* AppDashboardContentProfile.jsx
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
* AppDashboardContentProfile
*
* @module AppDashboardContentProfile
*/
class AppDashboardContentProfile extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
        // NOTE: The content prop is used ONLY for the inital seed here.
        this.state = {
            name: props.content.app.user.name,
            email: props.content.app.user.email
        };
        this.handleInputChange = this.handleInputChange.bind(this);
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
    * Component Will Recieve Props
    *
    * @function componentWillReceiveProps
    * @return {object}
    */
    componentWillReceiveProps(nextProps) {
        this.setState({
            name: nextProps.content.app.user.name,
            email: nextProps.content.app.user.email
        });
    }

    /**
    * Handle Input Change
    *
    * @function handleInputChange
    * @return {object}
    */
    handleInputChange() {
        this.setState({
            name: this.nameInput.value,
            email: this.emailInput.value
        });
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
    * Settings for: _div
    *
    * @function _div
    * @return {object}
    */
    _div() {
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
    * Settings for: _header
    *
    * @function _header
    * @return {object}
    */
    _header() {
        return {
            style: {
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
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
                fontFamily: "Open Sans, sans-serif",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    margin: "1vh 0 0 0",
                    padding: "0 0.25vw",
                    width: "50%",
                    height: "4vh",
                    fontSize: "1vw"
                }
            }
        }
    }

    /**
    * Settings for: _inputContainer
    *
    * @function _inputContainer
    * @return {object}
    */
    _inputContainer() {
        return {
            style: {
                margin: "2vh 0 0 0",
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
    * Settings for: _label
    *
    * @function _label
    * @return {object}
    */
    _label() {
        return {
            style: {
                color: "black",
                fontFamily: "Lato, sans-serif",
                fontWeight: "700",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    margin: "0 0 0 0.25vw",
                    fontSize: "1.25vw",
                    letterSpacing: "0.125vw"
                }
            }
        }
    }

    /**
    * Settings for: _profileForm
    *
    * @function _profileForm
    * @return {object}
    */
    _profileForm() {
        return {
            style: {
                margin: "5vh 0 0 0",
                width: "90%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
            }
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
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    padding: "2vh 1vw",
                    fontFamily: "Lato, sans-serif",
                    fontWeight: "300",
                    fontSize: "1.5vh",
                    letterSpacing: "0.125vw",
                    border: "none",
                    borderRadius: "none",
                    backgroundColor: "rgb(36,41,67)",
                    color: "white"
                }
            }
        }
    }

    /**
    * Settings for: _submitContainer
    *
    * @function _submitContainer
    * @return {object}
    */
    _submitContainer() {
        return {
            style: {
                margin: "3vh 0 0 0",
                width: "100%",
                display: "flex",
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
    * Settings for: _submitMessage
    *
    * @function _submitMessage
    * @return {object}
    */
    _submitMessage(message) {
        return {
            style: {
                margin: "0 0 0 2vw",
                color: "red",
                fontWeight: "400",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
            },
            text: message
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
        let _header = this._header();
        let _profileForm = this._profileForm();
        let _input = this._input();
        let _inputContainer = this._inputContainer();
        let _label = this._label();
        let _submit = this._submit();
        let _submitContainer = this._submitContainer();
        let _submitMessage = this._submitMessage(content.app.messages.profile_save);
        return (
            <div style={_div.style}>
                <AppDashboardContentHeader 
                    largeText="Hi there!"
                    smallText="Here's where you make changes to your account information and control who has the ability to edit your website"
                />
                <form className="profileForm" style={_profileForm.style} onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="inputContainer" style={_inputContainer.style}>
                        <div className="label" style={_label.style}>Name</div>
                        <input ref={(c) => this.nameInput = c} onChange={(e) => this.handleInputChange(e)} type="text" value={this.state.name} style={_input.style}/>
                    </div>
                    <div className="inputContainer" style={_inputContainer.style}>
                        <div className="label" style={_label.style}>Email</div>
                        <input ref={(c) => this.emailInput = c} onChange={(e) => this.handleInputChange(e)} type="text" value={this.state.email} style={_input.style}/>
                    </div>
                    <div className="submitContainer" style={_submitContainer.style}>
                        <input type="submit" value="SAVE CHANGES" style={_submit.style} />
                        <div className="submitMessage" style={_submitMessage.style}>{_submitMessage.text}</div>
                    </div>
                </form>
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardContentProfile);