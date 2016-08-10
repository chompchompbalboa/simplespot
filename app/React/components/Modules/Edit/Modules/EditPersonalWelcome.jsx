/**
* EditPersonalWelcome.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

var EditTool = require('../Tools/EditTool.jsx');

/**
* This module renders the the welcome message the app editor
*
* @module EditPersonalWelcome
*/
var EditPersonalWelcome = React.createClass({

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
        }
    },

    /**
    * Settings for: _allEdits
    *
    * @function _allEdits
    * @return {object}
    */
    _allEdits: function() {
        return [
            {
                description: "Main Text", key: "largeText.text", tool: "EditText"
            },
            {
                description: "Small Text", key: "smallText.text", tool: "EditText"
            },
            {
                description: "Logo", key: "logo.style.backgroundImage", tool: "EditText"
            },
            {
                description: "Nav Menu", key: "navListItems", tool: "EditNavListItems"
            }
        ];
    },

    /**
    * Settings for: __tools
    *
    * @function __tools
    * @return {object}
    */
    __tools: function(display, prefix, site, utils) {
        let allEdits = this._allEdits();
        return allEdits.map(function(edit, index) {
            return (
                <EditTool
                    key={"tool-" + index}
                    display={display}
                    description={edit.description}
                    keychain={prefix + edit.key}
                    site={site}
                    tool={edit.tool}
                    utils={utils}
                />
            )
        });
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
                height: "100%"
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
        var {display, prefix, site, utils, ...other} = this.props;
        let _section = this._section();
        let __tools = this.__tools(display, prefix, site, utils);
        return (
            <section className="section" style={[_section.style]}>
                {__tools}
            </section>
        )
    }    
});
module.exports = Radium(EditPersonalWelcome);