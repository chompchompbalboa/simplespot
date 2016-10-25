/**
* AppDashboardContentEditFormOne.jsx
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
* AppDashboardContentEditFormOne
*
* @module AppDashboardContentEditFormOne
*/
class AppDashboardContentEditFormOne extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
        // NOTE: The content prop is used ONLY for the inital seed here.
        this.state = {
            name: props.content.app.editing.meta.title,
            about: props.content.app.editing.props.container.paths.auto.props.items['3'].props.text
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    /**
    * Component Will Recieve Props
    *
    * @function componentWillReceiveProps
    * @return {object}
    */
    componentWillReceiveProps(nextProps) {
        this.setState({
            name: nextProps.content.app.editing.meta.title,
            about: nextProps.content.app.editing.props.container.paths.auto.props.items['3'].props.text
        });
    }

    /**
    * Handle Input Change
    *
    * @function handleInputChange
    * @return {object}
    */
    handleInputChange() {
        let changes = [
            {key: "app.editing.meta.title", value: this.nameInput.value},
            {key: "app.editing.props.container.paths.auto.props.items.3.props.text", value: this.aboutInput.value},
        ];
        contentActions.changeContent(changes);
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
            about: this.aboutInput.value
        };
        contentActions.fetchContent("APP_EDIT_SAVE", data);
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
    * Settings for: _form
    *
    * @function _form
    * @return {object}
    */
    _form() {
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
    * Settings for: _textarea
    *
    * @function _textarea
    * @return {object}
    */
    _textarea() {
        return {
            style: {
                fontFamily: "Open Sans, sans-serif",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    margin: "1vh 0 0 0",
                    padding: "0 0.25vw",
                    width: "50%",
                    //minHeight: "10vh",
                    fontSize: "1vw"
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
        let _inputContainer = this._inputContainer();
        let _label = this._label();
        let _submit = this._submit();
        let _submitContainer = this._submitContainer();
        let _submitMessage = this._submitMessage(content.app.messages.edit_save);
        let _textarea = this._textarea();
        return (
            <div style={_div.style}>
                <form className="form" style={_form.style} onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="inputContainer" style={_inputContainer.style}>
                        <div className="label" style={_label.style}>Name</div>
                        <input ref={(c) => this.nameInput = c} onChange={(e) => this.handleInputChange(e)} type="text" value={this.state.name} style={_input.style}/>
                    </div>
                    <div className="inputContainer" style={_inputContainer.style}>
                        <div className="label" style={_label.style}>About Us</div>
                        <textarea ref={(c) => this.aboutInput = c} onChange={(e) => this.handleInputChange(e)} value={this.state.about} style={_textarea.style}/>
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
module.exports = Radium(AppDashboardContentEditFormOne);