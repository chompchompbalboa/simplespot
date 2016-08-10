/**
* BasicInput.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

/**
* This module renders a controlled input
*
* @module BasicInput
*/
var BasicInput = React.createClass({

    /**
    * Validate props types
    *
    * @prop propTypes
    * @return {object}
    */
    propTypes: {
        keychain: React.PropTypes.string.isRequired,
        handler: React.PropTypes.string.isRequired,
        style: React.PropTypes.object.isRequired,
        utils: React.PropTypes.object.isRequired,
        value: React.PropTypes.string.isRequired
    },

    /**
    * Get the default props
    *
    * @function getDefaultProps
    * @return {object}
    */
    getDefaultProps: function() {
        return {
            handler: "siteHandler",
            style: {},
            value: "BasicInput"
        }
    },

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render: function() {
        var {handler, keychain, style, utils, value, ...other} = this.props;
        let changeHandler = utils[handler];
        return (
            <input type="text" style={style} value={value} onChange={(e) => changeHandler.controlledValueChange(e, keychain + ".props.value")}/>
        )
    }    
});
module.exports = Radium(BasicInput);