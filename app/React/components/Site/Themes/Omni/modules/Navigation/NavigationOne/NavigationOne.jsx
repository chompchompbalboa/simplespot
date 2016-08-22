/**
* NavigationOne.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
* @requires contentActions
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const contentActions = require('../../../../../../../actions/contentActions');
/**
* NavigationOne
*
* @module NavigationOne
*/
class NavigationOne extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    /**
    * Validate the prop types
    *
    * @prop propTypes
    */
    static propTypes = {
        items: React.PropTypes.object.isRequired,
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        items: {
            items: {
                0: {text: "Hours", path: "/hours"},
                1: {text: "Menu", path: "/menu"},
                2: {text: "Location", path: "/location"}    
            },
            font: {
                color: "white",
                fontFamily: "Cuprum, sans-serif",
                fontSize: "14px",
                fontWeight: "300",
                letterSpacing: "4px",
                textTransform: "uppercase"
            }
        },
        nav: {
            justifyContent: "flex-end"
        }
    }

    /**
    * Settings for: handleClick
    *
    * @function handleClick
    * @return {object}
    */
    handleClick(e, path) { 
        e.preventDefault();
        let changes = [
            {key: "site.display.path", value: path}
        ];
        contentActions.changeContent(changes);
    }

    /**
    * Settings for: _nav
    *
    * @function _nav
    * @return {object}
    */
    _nav(nav) {
        return {
            style: {
                position: "absolute",
                top: "0vh",
                left: "0vw",
                height: "10vh",
                width: "100vw",
                display: "flex",
                justifyContent: nav.justifyContent,
                alignItems: "center"
            }
        }
    }

    /**
    * Settings for: __items
    *
    * @function __items
    * @return {object}
    */
    __items(items) {
        let payload = [];
        let font = items.font;
        let style = {
            margin: "0 5vw 0 5vw",
            fontFamily: font.fontFamily,
            fontSize: font.fontSize,
            letterSpacing: font.letterSpacing,
            color: font.color,
            textTransform: font.textTransform
        };
        for (let i in items.items) {
            let current = items.items[i];
            payload.push(
                <a key={i} href={current.path} style={style} onClick={(e) => this.handleClick(e, current.path)}>{current.text}</a>
            );
        }
        return payload;
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        var {items, nav, ...other} = this.props;
        let _nav = this._nav(nav);
        let __items = this.__items(items);
        return (
            <nav className="nav" style={_nav.style}>
                {__items}
            </nav>
        )
    }    
}
// Export
module.exports = Radium(NavigationOne);