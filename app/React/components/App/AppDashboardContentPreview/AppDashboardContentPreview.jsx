/**
* AppDashboardContentPreview.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const AppDashboardContentForm = require('../AppDashboardContentForm/AppDashboardContentForm.jsx');
const AppDashboardContentHeader = require('../AppDashboardContentHeader/AppDashboardContentHeader.jsx');
const AppDashboardContentPreviewLinks = require('../AppDashboardContentPreviewLinks/AppDashboardContentPreviewLinks.jsx');

/**
* AppDashboardContentPreview
*
* @module AppDashboardContentPreview
*/
class AppDashboardContentPreview extends React.Component {

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
                    largeText="Preview"
                    smallText="Here are the links to the current version of their website, and the site we just built"
                />
                <AppDashboardContentPreviewLinks
                    content={content}
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
module.exports = Radium(AppDashboardContentPreview);