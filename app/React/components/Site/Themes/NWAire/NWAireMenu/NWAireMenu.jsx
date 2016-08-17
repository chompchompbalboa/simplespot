/**
* NWAireMenu.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

var NWAireMenuLink = require('../NWAireMenuLink/NWAireMenuLink.jsx');

/**
* The theme for Northwest Aire Services
*
* @module NWAireMenu
*/
var NWAireMenu = React.createClass({

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
        }
    },

    /**
    * Settings for: _nav
    *
    * @function _nav
    * @return {object}
    */
    _nav: function() {
        return {
            style: {
                width: "100%",
                height: "100%"
            }
        }
    },

    /**
    * Settings for: _navList
    *
    * @function _navList
    * @return {object}
    */
    _navList: function() {
        return {
            style: {
                width: "100%",
                height: "100%",
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "flex-start",
                alignItems: "center"
            }
        }
    },

    /**
    * Settings for: _section
    *
    * @function _section
    * @return {object}
    */
    _section: function(active) {
        return {
            style: {
                position: "fixed",
                top: (active ? "0vh" : "-100vh"),
                left: "0vw",
                width: "100vw",
                height: "100vh",
                "@media (min-width: 64em)": {
                    top: "0vh",
                    width: "15vw"
                }
            }
        }
    },

    /**
    * Settings for: __navListItems
    *
    * @function __navListItems
    * @return {object}
    */
    __navListItems: function(display) {
        let items = [
            {text: {large: "Home", small: "Hello there"}, path: "/"},
            {text: {large: "About", small: "Our company"}, path: "/two"},
            {text: {large: "Services", small: "What we do"}, path: "/three"},
            {text: {large: "Contact", small: "Let's talk"}, path: "/four"}
        ];
        let payload = items.map(function(item, index) {
            let active = (display.path === item.path ? true : false);
            return <NWAireMenuLink key={index} active={active} path={item.path} texts={item.text}/>
        });
        let homeText = {
            large: "Home",
            small: "Home Description"
        }
        payload.unshift(
            <NWAireMenuLink key={"home"} active={false} logo={true} path={"/"} texts={{large: "Home", small: "Home Description"}}/>
        );
        return payload;
    },

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render: function() {
        var {site, ...other} = this.props;
        let _nav = this._nav();
        let _navList = this._navList();
        let _section = this._section(true);
        let __navListItems = this.__navListItems(site.display);
        return (
            <section className="section" style={_section.style}>
                <nav className="nav" style={_nav.style}>
                    <ul className="navList" style={_navList.style}>
                        {__navListItems}
                    </ul>
                </nav>    
            </section>
        )
    }    
});
module.exports = Radium(NWAireMenu);