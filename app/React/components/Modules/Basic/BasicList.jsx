/**
* BasicList.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

/**
* This module renders an unordered list.
*
* @module BasicList
*/
var BasicList = React.createClass({

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
                    module: "BasicListItem"
                },
                2: {
                    module: "BasicListItem"
                },
                3: {
                    module: "BasicListItem"
                }
            },
            style: {
                listStyle: "none"
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
        var {contents, keychain, style, utils, ...other} = this.props;
        let children = utils.loader.loadModules(keychain, contents, utils);
        return (
            <ul style={style}>
                {children}
            </ul>
        )
    }    
});
module.exports = Radium(BasicList);