/**
* AppDashboardContentBusinessInfo.jsx
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
/**
* AppDashboardContentBusinessInfo
*
* @module AppDashboardContentBusinessInfo
*/
class AppDashboardContentBusinessInfo extends React.Component {

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
        submits: {
            "1": {
                text: "NEXT",
                onSubmit: {
                    action: {
                        type: "fetch",
                        request: "APP_GET-CHOOSE-THEME"
                    }
                }
            }
        }
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
                            contentKey: "app.inputs.AppDashboardContentBusinessInfo.email",
                            changes: [
                                "app.inputs.AppDashboardContentBusinessInfo.email"
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
                            contentKey: "app.inputs.AppDashboardContentBusinessInfo.hours",
                            changes: [
                                "app.inputs.AppDashboardContentBusinessInfo.hours"
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
                            contentKey: "app.inputs.AppDashboardContentBusinessInfo.name",
                            changes: [
                                "app.inputs.AppDashboardContentBusinessInfo.name"
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
                            contentKey: "app.inputs.AppDashboardContentBusinessInfo.location",
                            changes: [
                                "app.inputs.AppDashboardContentBusinessInfo.location"
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
                            contentKey: "app.inputs.AppDashboardContentBusinessInfo.phone",
                            changes: [
                                "app.inputs.AppDashboardContentBusinessInfo.phone"
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
        let {content, submits, ...other} = this.props;
        let inputs = this.inputs(content.app.inputs.AppDashboardContentBusinessInfo);
        let _div = this._div();
        return (
            <div style={_div.style}>
                <AppDashboardContentHeader 
                    largeText="Here's what we found"
                    smallText="Let's make sure we've got the details we need about your business."
                />
                <AppDashboardContentForm 
                    content={content}
                    inputs={inputs}
                    submits={submits}
                />
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardContentBusinessInfo);