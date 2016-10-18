/**
* AppDashboardContentProfilec.jsx
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
* AppDashboardContentProfilec
*
* @module AppDashboardContentProfilec
*/
class AppDashboardContentProfilec extends React.Component {

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
    * Settings for: _div
    *
    * @function _div
    * @return {object}
    */
    _div() {
        return {
            style: {
                width: "100%",
                height: "100%",
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
    * Settings for: _profileForm
    *
    * @function _profileForm
    * @return {object}
    */
    _profileForm() {
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
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        let {content, ...other} = this.props;
        let _div = this._div();
        let _header = this._header();
        let _profileForm = this._div();
        return (
            <div style={_div.style}>
                <div className="header" style={_header.style}>Your Profile</div>
                <form className="profileForm" style={_profileForm.style}>
                    <input ref={(c) => this.nameInput = c} onChange={(e) => this.handleInputChange(e)} type="text" value={this.state.name} />
                    <input ref={(c) => this.emailInput = c} onChange={(e) => this.handleInputChange(e)} type="text" value={this.state.email} />
                </form>
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardContentProfilec);