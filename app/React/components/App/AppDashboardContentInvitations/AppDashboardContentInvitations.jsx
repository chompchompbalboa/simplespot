/**
* AppDashboardContentInvitations.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const contentActions = require('../../../actions/contentActions');

const AppDashboardContentForm = require('../AppDashboardContentForm/AppDashboardContentForm.jsx');
const AppDashboardContentHeader = require('../AppDashboardContentHeader/AppDashboardContentHeader.jsx');
const AppDashboardContentInvitationsLinks = require('../AppDashboardContentInvitationsLinks/AppDashboardContentInvitationsLinks.jsx');
/**
* AppDashboardContentInvitations
*
* @module AppDashboardContentInvitations
*/
class AppDashboardContentInvitations extends React.Component {

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
    * Build the inputs based on the business info we receieved
    *
    * @function inputs
    * @return {object}
    */
    inputs(inputs) {
        let payload = {};
        for (let i in inputs) {
            let input = inputs[i];
            switch (i) {
                case "email":
                    payload[i] = {
                        label: "Email",
                        type: "text",
                        props: {
                            contentKey: "app.inputs.AppDashboardContentInvitations.email",
                            changes: [
                                "app.inputs.AppDashboardContentInvitations.email",
                                "site.seed.email"
                            ],
                            onSubmit: {
                                dataKey: "email"
                            }
                        }
                    }
                break;
                case "hours":
                    payload[i] = {
                        label: "Hours",
                        type: "hours",
                        props: {
                            contentKey: "app.inputs.AppDashboardContentInvitations.hours",
                            changes: [
                                "app.inputs.AppDashboardContentInvitations.hours",,
                                "site.seed.hours"
                            ],
                            onSubmit: {
                                dataKey: "hours"
                            }
                        }
                    }
                break;
                case "name":
                    payload[i] = {
                        label: "Name",
                        type: "text",
                        props: {
                            contentKey: "app.inputs.AppDashboardContentInvitations.name",
                            changes: [
                                "app.inputs.AppDashboardContentInvitations.name",,
                                "site.seed.name"
                            ],
                            onSubmit: {
                                dataKey: "name"
                            }
                        }
                    }
                break;
                case "location":
                    payload[i] = {
                        label: "Location",
                        type: "address",
                        props: {
                            contentKey: "app.inputs.AppDashboardContentInvitations.location",
                            changes: [
                                "app.inputs.AppDashboardContentInvitations.location",
                                "site.seed"
                            ],
                            onSubmit: {
                                dataKey: "location"
                            }
                        }
                    }
                break;
                case "phone":
                    payload[i] = {
                        label: "Phone",
                        type: "text",
                        props: {
                            contentKey: "app.inputs.AppDashboardContentInvitations.phone",
                            changes: [
                                "app.inputs.AppDashboardContentInvitations.phone",
                                "site.seed.phone"
                            ],
                            onSubmit: {
                                dataKey: "phone"
                            }
                        }
                    }
                break;
            }
        }
        return payload;
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
                width: "90%",
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
        let {content, ...other} = this.props;
        let inputs = this.inputs(content.app.inputs.AppDashboardContentInvitations);
        let _div = this._div();
        return (
            <div style={_div.style}>
                <AppDashboardContentHeader 
                    largeText="Send an invitation"
                    smallText=""
                />
                <AppDashboardContentInvitationsLinks
                    content={content}
                />
                <AppDashboardContentForm 
                    content={content}
                    inputs={inputs}
                    submits={{}}
                />
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardContentInvitations);