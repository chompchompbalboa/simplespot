/**
* NavListItem.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');


/**
* This module renders a link within an li tag, used for building nav menus
*
* @module NavListItem
*/
var NavListItem = React.createClass({

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
            a: {
                style: {}
            },
            displayChanges: {

            },
            li: {
                style: {}
            },
            text: "NavListItem"
        }
    },

    /**
    * Settings for: _a
    *
    * @function _a
    * @return {object}
    */
    _a: function() {
        return {
        }
    },

    /**
    * Settings for: _li
    *
    * @function _li
    * @return {object}
    */
    _li: function() {
        return {
        }
    },

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render: function() {
        var {a, displayChanges, li, text, utils ...other} = this.props;
        let _li = this._li();
        let _a = this.a();
        return (
            <li style={[_li.style, li.style]}>
                <a href="/" style={[_a.style, a.style]} onClick={(e) => utils.displayHandler.internalLinkClick(e, displayChanges, "site")}>
                    {text}
                </a>
            </li>
        )
    }    
});
module.exports = Radium(NavListItem);