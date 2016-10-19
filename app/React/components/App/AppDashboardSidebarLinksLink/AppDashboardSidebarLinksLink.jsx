/**
* AppDashboardSidebarLinksLink.jsx
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
* AppDashboardSidebarLinksLink
*
* @module AppDashboardSidebarLinksLink
*/
class AppDashboardSidebarLinksLink extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
        this.handleLinkClick = this.handleLinkClick.bind(this);
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
    * Handle Link Click
    *
    * @function handleLinkClick
    * @return {object}
    */
    handleLinkClick(e, href) {
        e.preventDefault();
        if (href === "/logout") {
            contentActions.fetchContent("LOGOUT_APP");
        }
        else {
            let changes = [
                {key: "app.display.path", value: href}
            ];
            contentActions.changeContent(changes);
        }
    }

    /**
    * Settings for: _a
    *
    * @function _a
    * @return {object}
    */
    _a(active) {
        return {
            style: {
                width: "100%",
                color: (active ? "black" : "white")
            }
        }
    }

    /**
    * Settings for: _container
    *
    * @function _container
    * @return {object}
    */
    _container(active) {
        return {
            style: {
                margin: "2vh 0",
                width: "85%",
                height: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center"
            }
        }
    }

    /**
    * Settings for: _div
    *
    * @function _div
    * @return {object}
    */
    _div(active) {
        return {
            style: {
                width: "100%",
                height: "5vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: (active ? "white" : "transparent"),
                boxShadow: (active ? "0.25vw 0 0 orange" : "none"),
                ":hover": {
                    backgroundColor: (active ? "white" : "rgba(255,255,255,0.25)"),
                }
            }
        }
    }

    /**
    * Settings for: _logo
    *
    * @function _logo
    * @return {object}
    */
    _logo(active, logo) {
        return {
            style: {
                width: "2.5vh",
                height: "2.5vh",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: "url(" + logo + ")"
            }
        }
    }

    /**
    * Settings for: _text
    *
    * @function _text
    * @return {object}
    */
    _text(active, text) {
        return {
            style: {
                margin: "0 0 0 1.5vw"
            },
            text: text
        }
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        let {active, href, logo, text, ...other} = this.props;
        let _a = this._a(active);
        let _container = this._container(active);
        let _div = this._div(active);
        let _logo = this._logo(active, logo);
        let _text = this._text(active, text);
        return (
            <a href={href} style={_a.style} onClick={(e) => this.handleLinkClick(e, href)}>
                <div className="div" style={_div.style}>
                    <div className="container hover_AppDashboardSidebarLinksLink" style={_container.style}>
                        <div className="logo" style={_logo.style}></div>
                        <div className="text" style={_text.style}>{_text.text}</div>
                    </div>
                </div>
            </a>
        )
    }    
}
module.exports = Radium(AppDashboardSidebarLinksLink);