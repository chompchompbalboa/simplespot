/**
* AppDashboardSidebar.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const contentActions = require('../../../actions/contentActions');

const AppDashboardSidebarHeader = require('../AppDashboardSidebarHeader/AppDashboardSidebarHeader.jsx');
const AppDashboardSidebarLinks = require('../AppDashboardSidebarLinks/AppDashboardSidebarLinks.jsx');

/**
* AppDashboardSidebar
*
* @module AppDashboardSidebar
*/
class AppDashboardSidebar extends React.Component {

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
                href: "/dashboard/preview",
                logo: "/assets/App/icons/preview.png",
                text: "Preview"
            },
            "2": {
                href: "/dashboard/edit",
                logo: "/assets/App/icons/edit.png",
                text: "Edit"
            },
            "3": {
                href: "/dashboard/profile",
                logo: "/assets/App/icons/profile.png",
                text: "Profile"
            },
            "4": {
                href: "/dashboard/billing",
                logo: "/assets/App/icons/billing.png",
                text: "Billing"
            },
            "5": {
                href: "/logout",
                logo: "/assets/App/icons/logout.png",
                text: "Logout"
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
                width: "100vw",
                height: "8vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    height: "8vh",
                },
                "@media (min-width: 64em)": {
                    width: "20vw",
                    height: "100vh",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    backgroundColor: "rgb(36,41,67)"

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
        let {content, links, ...other} = this.props;
        let _div = this._div();
        return (
            <div style={_div.style}>
                <AppDashboardSidebarHeader />
                <AppDashboardSidebarLinks content={content} links={links}/>
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardSidebar);