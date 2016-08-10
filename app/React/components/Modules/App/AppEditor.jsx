/**
* AppEditor.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

var AppEditorDashboard = require('./AppEditorDashboard.jsx');
var AppEditorPageEditor = require('./AppEditorPageEditor.jsx');

/**
* This module renders the editor for the app
*
* @module AppEditor
*/
var AppEditor = React.createClass({

    /**
    * Validate props types
    *
    * @prop propTypes
    * @return {object}
    */
    propTypes: {
        utils: React.PropTypes.object.isRequired
    },

    /**
    * Get the default props
    *
    * @function getDefaultProps
    * @return {object}
    */
    getDefaultProps: function() {
        return {

        }
    },

    /**
    * Settings for: __activeEditor
    *
    * @function __activeEditor
    * @return {array}
    */
    __activeEditor: function(active, display, site, utils) {
        var payload = [];
        payload.push(
            React.createElement(
                // TO DO - Whitelist
                eval(active),
                {
                    key: "activeEditor",
                    display: display,
                    site: site,
                    utils: utils
                },
            )
        );
        return payload;
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
                position: "absolute",
                top: "65vh",
                left: "0vw",
                width: "100vw",
                height: "35vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(250,250,250,0.5)"
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
        var {display, site, utils, ...other} = this.props;
        let __activeEditor = this.__activeEditor(display.app.AppEditor.active, display, site, utils);
        let _section = this._section();
        return (
            <section className="section" style={[_section.style]}>
                {__activeEditor}
            </section>
        )
    }    
});
module.exports = Radium(AppEditor);