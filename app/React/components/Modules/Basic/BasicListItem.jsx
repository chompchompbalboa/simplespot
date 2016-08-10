/**
* BasicListItem.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

/**
* This module renders an li tag. By default, it renders a text module as well.
*
* @module BasicListItem
*/
var BasicListItem = React.createClass({

    /**
    * Validate props types
    *
    * @prop propTypes
    * @return {object}
    */
    propTypes: {
        contents: React.PropTypes.object.isRequired,
        keychain: React.PropTypes.string.isRequired,
        style: React.PropTypes.object.isRequired,
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
            contents: {
                1: {
                    module: "BasicText",
                    props: {
                        "text": "BasicListItem"
                    }
                }
            },
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
        var {contents, keychain, style, utils, ...other} = this.props;
        let children = utils.loader.loadModules(keychain, contents, utils);
        return (
            <li style={style}>
                {children}
            </li>
        )
    }    
});
module.exports = Radium(BasicListItem);