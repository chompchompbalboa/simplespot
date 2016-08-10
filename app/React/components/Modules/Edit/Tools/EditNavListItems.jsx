/**
* EditNavListItems.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

/**
* This module renders a textarea to make changes to text from
*
* @module EditNavListItems
*/
var EditNavListItems = React.createClass({

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
            },
            value: "EditNavListItems"
        }
    },

    /**
    * Settings for: __editInputs
    *
    * @function __editInputs
    * @return {object}
    */
    __editInputs: function(keychain, items, utils) {
        let payload = [];
        for (let i in items) {
            let item = items[i];
            let pathChanges = [
                keychain + "." + i + ".a.href",
                keychain + "." + i + ".a.displayChanges.value"
            ];
            let textChanges = keychain + "." + i + ".text";;
            payload.push(
                <div key={i}>
                    <input type="text" value={item.a.href} onChange={(e) => utils.siteHandler.controlledValueChange(e, pathChanges)} />
                    <input type="text" value={item.text} onChange={(e) => utils.siteHandler.controlledValueChange(e, textChanges)} />
                </div>
            );
        }
        return payload;
    },

    /**
    * Settings for: _input
    *
    * @function _input
    * @return {object}
    */
    _input: function() {
        return {
            style: {
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
        var {display, keychain, items, site, tool, utils, ...other} = this.props;
        let __editInputs = this.__editInputs(keychain, items, utils);
        return (
            <div style={[]}>
                {__editInputs}
            </div>
        )
    }    
});
module.exports = Radium(EditNavListItems);