/**
* EditTool.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

var EditNavListItems = require('./EditNavListItems.jsx');
var EditText = require('./EditText.jsx');

/**
* This module renders an edit tool
*
* @module EditTool
*/
var EditTool = React.createClass({

    /**
    * Prefix referencing where the active site is nested within the site object
    *
    * @prop ACTIVE_PREFIX
    * @return {string}
    */
    ACTIVE_PREFIX: 'versions.active.pages.',

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
    * Settings for: _getValue
    *
    * @function _getValue
    * @return {object}
    */
    _getValue: function(keychain, seed) {
        let value;
        let splitKeychain = keychain.split('.');
        if(splitKeychain.length > 1) {
            let nextSeed = splitKeychain.shift();
            let nextKeychain = splitKeychain.join('.');
            value = this._getValue(nextKeychain, seed[nextSeed])
        }
        else {
            value = seed[keychain];
        }
        return value;
    },

    /**
    * Settings for: _description
    *
    * @function _description
    * @return {object}
    */
    _description: function() {
        return {
            style: {
                width: "20%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "titilliumlight",
                fontSize: "2.5vh",
                fontWeight: "100"
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
                margin: "2vh 0 2vh 0",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start"
            }
        }
    },

    /**
    * Settings for: __tool
    *
    * @function __tool
    * @return {object}
    */
    __tool: function(display, keychain, site, tool, utils) {
        return this[tool](display, keychain, site, utils);
    },

    /**
    * Settings for: _toolHolder
    *
    * @function _toolHolder
    * @return {object}
    */
    _toolHolder: function() {
        return {
            style: {
                width: "80%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center"
            }
        }
    },

    /**
    * Settings for: EditNavListItems
    *
    * @function EditNavListItems
    * @return {object}
    */
    EditNavListItems: function(display, keychain, site, utils) {
        let items = this._getValue(this.ACTIVE_PREFIX + keychain, site);
        return (
            <EditNavListItems
                display={display}
                items={items}
                keychain={keychain}
                site={site}
                utils={utils}
            />
        )
    },

    /**
    * Settings for: EditText
    *
    * @function EditText
    * @return {object}
    */
    EditText: function(display, keychain, site, utils) {
        let value = this._getValue(this.ACTIVE_PREFIX + keychain, site);
        return (
            <EditText
                display={display}
                keychain={keychain}
                site={site}
                utils={utils}
                value={value}
            />
        )
    },

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render: function() {
        var {display, description, keychain, site, tool, utils, ...other} = this.props;
        let _section = this._section();
        let _description = this._description();
        let _toolHolder = this._toolHolder();
        let __tool = this.__tool(display, keychain, site, tool, utils);
        return (
            <section className="section" style={[_section.style]}>
                <div className="description" style={[_description.style]}>
                    {description}
                </div>
                <div className="toolHolder" style={[_toolHolder.style]}>
                    {__tool}
                </div>   
            </section>
        )
    }    
});
module.exports = Radium(EditTool);