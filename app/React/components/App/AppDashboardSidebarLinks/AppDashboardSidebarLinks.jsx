/**
* AppDashboardSidebarLinks.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const contentActions = require('../../../actions/contentActions');

const AppDashboardSidebarLinksLink = require('../AppDashboardSidebarLinksLink/AppDashboardSidebarLinksLink.jsx');

/**
* AppDashboardSidebarLinks
*
* @module AppDashboardSidebarLinks
*/
class AppDashboardSidebarLinks extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props)
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
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start"
                }
            }
        }
    }

    /**
    * Settings for: __links
    *
    * @function __links
    * @return {object}
    */
    __links(links, path) {
        let payload = [];
        for (let i in links) {
            let link = links[i];
            let active = (path === link.href ? true : false);
            active = (path === "/dashboard" && link.href === "/dashboard/get-started" ? true : active);
            payload.push(
                <AppDashboardSidebarLinksLink 
                    key={i}
                    active={active}
                    href={link.href}
                    logo={link.logo}
                    text={link.text}
                />
            )
        }
        return payload;
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
        let __links = this.__links(links, content.app.display.path);
        return (
            <div className="div" style={_div.style}>
                {__links}
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardSidebarLinks);