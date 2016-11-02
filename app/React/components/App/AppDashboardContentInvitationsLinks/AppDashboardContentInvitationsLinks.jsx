/**
* AppDashboardContentInvitationsLinks.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const contentActions = require('../../../actions/contentActions')

/**
* AppDashboardContentInvitationsLinks
*
* @module AppDashboardContentInvitationsLinks
*/
class AppDashboardContentInvitationsLinks extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
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
    * Handle Click
    *
    * @function handleClick
    * @return {object}
    */
    handleClick(e, request, data) {
        e.preventDefault();
        contentActions.fetchContent(request, data);
    }

    /**
    * Settings for: _a
    *
    * @function _a
    * @return {object}
    */
    _a() {
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
    * Settings for: _container
    *
    * @function _container
    * @return {object}
    */
    _container() {
        return {
            style: {
                cursor: "pointer",
                margin: "0 3vw 0 0",
                padding: "2vh 1vw",
                fontFamily: "Lato, sans-serif",
                fontWeight: "300",
                fontSize: "1.5vh",
                letterSpacing: "0.125vw",
                backgroundColor: "rgb(36,41,67)",
                color: "white",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
            }
        }
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
        let {content, ...other} = this.props;
        let _a = this._a();
        let _container = this._container();
        let _div = this._div();
        let google = content.app.inputs.AppDashboardContentInvitations.google;
        let preview = content.app.inputs.AppDashboardContentInvitations.preview;
        let website = content.app.inputs.AppDashboardContentInvitations.website;
        return (
            <div style={_div.style}>
                <a target="_blank" href={website} style={_a.style} onClick={(e) => this.handleClick(e, "APP_INVITATIONS_GET", {})}>
                    <div className="container" style={_container.style}>
                        GET NEW
                    </div>
                </a>
                <a target="_blank" href={website} style={_a.style}>
                    <div className="container" style={_container.style}>
                        WEBSITE
                    </div>
                </a>
                <a target="_blank" href={preview} style={_a.style}>
                    <div className="container" style={_container.style}>
                        PREVIEW
                    </div>
                </a>
                <a target="_blank" href={google} style={_a.style}>
                    <div className="container" style={_container.style}>
                        GOOGLE
                    </div>
                </a>
                <a href={preview} style={_a.style}>
                    <div className="container" style={_container.style} onClick={(e) => this.handleClick(e, "APP_INVITATION_SAVE", {})}>
                        SAVE CHANGES
                    </div>
                </a>
                <a href={preview} style={_a.style}>
                    <div className="container" style={_container.style} onClick={(e) => this.handleClick(e, "APP_INVITATION_DELETE", {})}>
                        DELETE
                    </div>
                </a>
                <a target="_blank" href={preview} style={_a.style}>
                    <div className="container" style={_container.style} onClick={(e) => this.handleClick(e, "APP_INVITATION_SEND", {})}>
                        SEND
                    </div>
                </a>
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardContentInvitationsLinks);