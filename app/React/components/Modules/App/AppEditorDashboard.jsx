/**
* AppEditorDashboard.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

var AppEditorDashboardPageLink = require('./AppEditorDashboardPageLink.jsx');
/**
* This module renders the the welcome message the app editor
*
* @module AppEditorDashboard
*/
var AppEditorDashboard = React.createClass({

    /**
    * Validate props types
    *
    * @prop propTypes
    * @return {object}
    */
    propTypes: {
    },

    /**
    * Get the default props
    *
    * @function getDefaultProps
    * @return {object}
    */
    getDefaultProps: function() {
        return {
            section: {
                style: {}
            }
        }
    },

    /**
    * Settings for: __pageLinks
    *
    * @function __pageLinks
    * @return {object}
    */
    __pageLinks: function(pages, utils) {
        var pageLinks = [];
        for (let path in pages) {
            let page = pages[path];
            let displayChanges = [
                {key: "app.AppEditor.active", value: "AppEditorPageEditor"},
                {key: "app.AppEditor.AppEditorPageEditor.page", value: path},
                {key: "app.AppEditor.AppEditorPageEditor.module", value: "1"}
            ];
            pageLinks.push(
                <AppEditorDashboardPageLink
                    key={path}
                    path={path}
                    text={path}
                    utils={utils}
                />
            );
        }
        return pageLinks;
    },


    /**
    * Settings for: _pageLinksContainer
    *
    * @function _pageLinksContainer
    * @return {object}
    */
    _pageLinksContainer: function() {
        return {
            style: {
            }
        }
    },

    /**
    * Settings for: _section
    *
    * @function _section
    * @return {object}
    */
    _section: function() {
        return {
            style: {
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }
        }
    },

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render: function() {
        var {section, site, utils, ...other} = this.props;
        let __pageLinks = this.__pageLinks(site.versions.active.pages, utils);
        let _pageLinksContainer = this._pageLinksContainer();
        let _section = this._section();
        return (
            <section className="section" style={[_section.style, section.style]}>
                <div className="pageLinksContainer" style={[_pageLinksContainer.style]}>
                    {__pageLinks}
                </div>
            </section>
        )
    }    
});
module.exports = Radium(AppEditorDashboard);