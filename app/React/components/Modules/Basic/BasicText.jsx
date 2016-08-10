/**
* BasicText.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

/**
* This module renders text inside of a span tag
*
* @module BasicText
*/
var BasicText = React.createClass({

    /**
    * Validate props types
    *
    * @prop propTypes
    * @return {object}
    */
    propTypes: {
        editable: React.PropTypes.bool.isRequired,
        keychain: React.PropTypes.string.isRequired,
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
            editable: false,
            text: "BasicText",
            style: {}
        }
    },

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render: function() {
        var {editable, keychain, style, text, utils,...other} = this.props;
        return (
            <span 
                style={style} 
                dangerouslySetInnerHTML={{__html: text}}
                onInput={(e) => utils.siteHandler.controlledValueChange(e, keychain)} 
                contentEditable={editable}
            >
            </span>
        )
    }    
});
module.exports = Radium(BasicText);