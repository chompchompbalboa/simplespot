/**
* BasicButton.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

/**
* This module renders a button
*
* @module BasicButton
*/
var BasicButton = React.createClass({

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
        text: React.PropTypes.string.isRequired,
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
            handler: "siteHandler",
            style: {},
            text: "BasicButton"
        }
    },

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render: function() {
        var {handler, keychain, style, text, utils, ...other} = this.props;
        let changeHandler = utils[handler];
        return (
            <button type="button" style={style}>{text}</button>
        )
    }    
});
module.exports = Radium(BasicButton);