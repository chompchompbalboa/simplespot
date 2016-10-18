/**
* AppDashboardContent.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const contentActions = require('../../../actions/contentActions');

const AppDashboardContentPreview = require('../AppDashboardContentPreview/AppDashboardContentPreview.jsx');
const AppDashboardContentProfile = require('../AppDashboardContentProfile/AppDashboardContentProfile.jsx');

/**
* AppDashboardContent
*
* @module AppDashboardContent
*/
class AppDashboardContent extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
        this.state = {
        };
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
                width: "100vw",
                height: "86vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    height: "88vh",
                },
                "@media (min-width: 64em)": {
                    width: "80vw",
                    height: "100vh"
                }
            }
        }
    }

    /**
    * Settings for: __content
    *
    * @function __content
    * @return {object}
    */
    __content(content) {
        let path = content.app.display.path.split("/")[2];
        switch (path) {
            case "edit":
                return ("Edit");
            break;
            case "profile":
                return (<AppDashboardContentProfile content={content}/>);
            break;
            case "billing":
                return ("Billing");
            break;
            default:
                return (<AppDashboardContentPreview content={content}/>);

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
        let __content = this.__content(content);
        return (
            <div style={_div.style}>
                {__content}
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardContent);