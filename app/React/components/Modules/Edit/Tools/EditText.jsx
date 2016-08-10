/**
* EditText.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

//var EditText = require('./EditText.jsx');

/**
* This module renders a textarea to make changes to text from
*
* @module EditText
*/
var EditText = React.createClass({

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
            value: "EditText"
        }
    },

    /**
    * Settings for: _textarea
    *
    * @function _textarea
    * @return {object}
    */
    _textarea: function() {
        return {
            style: {
                width: "100%",
                border: "none",
                backgroundColor: "rgba(255,255,255,0.8)",
                fontSize: "1.75vh"
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
        var {display, keychain, site, tool, utils, value, ...other} = this.props;
        let _textarea = this._textarea();
        return (
            <textarea style={[_textarea.style]} value={value} onChange={(e) => utils.siteHandler.controlledValueChange(e, keychain)} />
        )
    }    
});
module.exports = Radium(EditText);