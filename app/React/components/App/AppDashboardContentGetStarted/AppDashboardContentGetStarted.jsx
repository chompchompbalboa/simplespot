/**
* AppDashboardContentGetStarted.jsx
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
* AppDashboardContentGetStarted
*
* @module AppDashboardContentGetStarted
*/
class AppDashboardContentGetStarted extends React.Component {

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
        inputs: {
            "1": {
                label: "Your URL",
                type: "text",
                props: {
                    contentKey: "app.inputs.AppDashboardContentGetStarted.url",
                    changes: [
                        "app.inputs.AppDashboardContentGetStarted.url"
                    ],
                    onSubmit: {
                        dataKey: "url"
                    }
                }
            }
        },
        submits: {
            "1": {
                text: "NEXT",
                onSubmit: {
                    action: {
                        type: "fetch",
                        request: "APP_GET-BUSINESS-INFO"
                    }
                }
            },
            "2": {
                text: "GET NEW",
                onSubmit: {
                    action: {
                        type: "fetch",
                        request: "APP_GET-PREVIEW_RANDOM"
                    }
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
        let {content, inputs, submits, ...other} = this.props;
        let _div = this._div();
        return (
            <div style={_div.style}>
                <AppDashboardContentHeader 
                    largeText="Let's get started!"
                    smallText="Enter the URL of your current website"
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
module.exports = Radium(AppDashboardContentGetStarted);