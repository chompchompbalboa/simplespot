/**
* LinkOne.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
* @requires contentActions
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* LinkOne
*
* @module LinkOne
*/
class LinkOne extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
    }

    /**
    * Validate the prop types
    *
    * @prop propTypes
    */
    static propTypes = {
        link: React.PropTypes.object.isRequired,
        section: React.PropTypes.object.isRequired
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        link: {
            href: "/menu",
            text: "Menu",
            style: {
                color: "black",
                fontFamily: "Cuprum, sans-serif",
                fontSize: "24px",
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                border: "1px solid black",
                ":hover": {
                    color: "white",
                    backgroundColor: "black",
                    border: "1px solid black",
                }
            }
        },
        section: {}
    }

    /**
    * Settings for: _section
    *
    * @function _section
    * @return {object}
    */
    _section(section) {
        return {
            style: {
                width: "50vw",
                height: "60vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }
        }
    }

    /**
    * Settings for: __link
    *
    * @function __link
    * @return {object}
    */
    __link(link) {
        let style = {
            padding: "2vh",
            color: link.style.color,
            fontFamily: link.style.fontFamily,
            fontSize: link.style.fontSize,
            letterSpacing: link.style.letterSpacing,
            textTransform: link.style.textTransform,
            border: link.style.border,
            ":hover": {
                color: link.style[":hover"].color,
                backgroundColor: link.style[":hover"].backgroundColor,
                border: link.style[":hover"].border
            }
        };
        return (
            <a href={link.href} style={style}>{link.text}</a>
        )
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        var {link, section, ...other} = this.props;
        let _section = this._section(section);
        let __link = this.__link(link)
        return (
            <section className="section" style={_section.style}>
                {__link}
            </section>
        )
    }    
}
// Export
module.exports = Radium(LinkOne);