/**
* NavigationOne.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

var contentActions = require('../../../../../../actions/contentActions');

/**
* Let's throw a party
*
* @module NavigationOne
*/
var NavigationOne = React.createClass({

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
            items: {
                0: {text: "Hours", path: "/hours"},
                1: {text: "Menu", path: "/menu"},
                2: {text: "Location", path: "/location"}
            }
        }
    },

    /**
    * Settings for: handleClick
    *
    * @function handleClick
    * @return {object}
    */
    handleClick: function(e, path) { 
        e.preventDefault();
        let changes = [
            {key: "site.display.path", value: path}
        ];
        contentActions.changeContent(changes);
    },

    /**
    * Settings for: _nav
    *
    * @function _nav
    * @return {object}
    */
    _nav: function(colors, fonts) { 
        return {
            style: {
                position: "absolute",
                top: "0vh",
                left: "0vw",
                height: "10vh",
                width: "100vw",
                display: "flex",
                justifyContent: this.props.random.justifyContent(),
                alignItems: "center"
            }
        }
    },

    /**
    * Settings for: __items
    *
    * @function __items
    * @return {object}
    */
    __items: function(colors, fonts, items) {
        let payload = [];
        let font = this.props.random.fromArray([fonts.primary, fonts.secondary]);
        let style = {
            margin: "0 5vw 0 5vw",
            fontFamily: font.fontFamily,
            fontSize: this.props.random.fontSize(14,20),
            letterSpacing: font.letterSpacing,
            color: "white",
            textTransform: font.textTransform
        };
        for (let i in items) {
            let current = items[i];
            payload.push(
                <a key={i} href={current.path} style={style} onClick={(e) => this.handleClick(e, current.path)}>{current.text}</a>
            );
        }
        return payload;
    },

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render: function() {
        var {colors, fonts, items, random, ...other} = this.props;
        let _nav = this._nav(colors, fonts);
        let __items = this.__items(colors, fonts, items);
        return (
            <nav className="nav" style={_nav.style}>
                {__items}
            </nav>
        )
    }    
});
module.exports = Radium(NavigationOne);