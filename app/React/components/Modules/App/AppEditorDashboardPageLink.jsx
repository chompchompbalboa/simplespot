/**
* AppEditorDashboardPageLink.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

/**
* This module renders the the welcome message the app editor
*
* @module AppEditorDashboardPageLink
*/
var AppEditorDashboardPageLink = React.createClass({

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
            displayChanges: [
                {key: "app.AppEditor.active", value: "AppEditorPageEditor"},
                {key: "app.AppEditor.AppEditorPageEditor.page", value: "/"},
                {key: "app.AppEditor.AppEditorPageEditor.module", value: "1"}
            ]
        }
    },

    /**
    * Settings for: _a
    *
    * @function _a
    * @return {object}
    */
    _a: function() {
        return {
            style: {
                textDecoration: "none",
                color: "black"
            }
        }
    },

    /**
    * Settings for: _wrapper
    *
    * @function _wrapper
    * @return {object}
    */
    _wrapper: function() {
        return {
            style: {
                width: "10vh",
                height: "10vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "4vh",
                border: "1px solid black"
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
        var {displayChanges, text, utils, ...other} = this.props;
        let _a = this._a();
        let _wrapper = this._wrapper();
        return (
            <a href="/edit" className="a" style={[_a.style]} onClick={(e) => utils.displayHandler.internalLinkClick(e, displayChanges, "app")}>
                <div className="wrapper" style={[_wrapper.style]}>
                    {text}
                </div>
            </a>
        )
    }    
});
module.exports = Radium(AppEditorDashboardPageLink);