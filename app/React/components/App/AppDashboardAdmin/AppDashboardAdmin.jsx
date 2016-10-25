/**
* AppDashboardAdmin.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const AppDashboardContent = require('../AppDashboardContent/AppDashboardContent.jsx');
const AppDashboardSidebar = require('../AppDashboardSidebar/AppDashboardSidebar.jsx');

/**
* AppDashboardAdmin
*
* @module AppDashboardAdmin
*/
class AppDashboardAdmin extends React.Component {

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
        links: React.PropTypes.object.isRequired
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        links: {
            "1": {
                href: "/dashboard/get-started",
                logo: "/assets/App/icons/get-started.png",
                text: "Get started"
            },
            "2": {
                href: "/dashboard/business-info",
                logo: "/assets/App/icons/business-info.png",
                text: "Business info"
            },
            "3": {
                href: "/dashboard/choose-theme",
                logo: "/assets/App/icons/choose-theme.png",
                text: "Choose theme"
            },
            "4": {
                href: "/dashboard/preview",
                logo: "/assets/App/icons/preview.png",
                text: "Preview"
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
                position: "relative",
                top: "0vh",
                left: "0vw",
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "center",
                alignItems: "flex-start",
                backgroundColor: "rgba(250,250,250,1)",
                fontFamily: "Lato, sans-serif",
                fontWeight: "300"
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
        let {content, links, ...other} = this.props;
        let _div = this._div();
        return (
            <div style={_div.style}>
                <AppDashboardSidebar content={content} links={links}/>
                <AppDashboardContent content={content}/>
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardAdmin);