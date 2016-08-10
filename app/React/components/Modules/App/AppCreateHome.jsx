/**
* AppCreateHome.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

/**
* This module renders the the welcome message the app editor
*
* @module AppCreateHome
*/
var AppCreateHome = React.createClass({

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
            navListItems: [
                {
                    a: {
                        href: "/create",
                        displayChanges: [
                            {key: "app.AppCreate.active", value: "AppCreateNew"}
                        ]
                    },
                    text: "New"
                },
                {
                    a: {
                        href: "/edit",
                        displayChanges: [
                            {key: "app.path", value: "/edit"}
                        ]
                    },
                    text: "Edit"
                },
                {
                    a: {
                        href: "/save",
                        displayChanges: [
                            {key: "app.path", value: "/save"}
                        ]
                    },
                    text: "Save"
                }
            ]
        }
    },

    /**
    * Settings for: _container
    *
    * @function _container
    * @return {object}
    */
    _container: function() {
        return {
            style: {
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }
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
            }
        }
    },

    /**
    * Settings for: _navLink
    *
    * @function _navLink
    * @return {object}
    */
    _navLink: function() {
        return {
            style: {
                margin: "0 2.5vw 0 2.5vw",
                width: "15vw",
                height: "15vw",
                borderRadius: "7.5vw",
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white"
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
                justifyContent: "space-around",
                alignItems: "center",
                fontFamily: "titilliumlight",
                fontSize: "2.5vh",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                listStyle: "none"
            }
        }
    },

    /**
    * Settings for: __navListItems
    *
    * @function __navListItems
    * @return {array}
    */
    __navListItems: function(items, _navLink, utils) {
        return items.map(function(item, index) {
            let handler;
            // Set the appropriate handler for each link
            switch (item.text) {
                case "Save":
                    // Attach handler
                break;
                default:
                    handler = utils.displayHandler.internalLinkClick;
            }
            return (
                <li key={index}>
                    <a href={item.a.href} style={{textDecoration: "none"}} onClick={(e) => handler(e, item.a.displayChanges)}>
                        <div style={_navLink.style}>
                            {item.text}
                        </div>
                    </a>
                </li>
            )
        });
    },

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render: function() {
        var {navListItems, utils, ...other} = this.props;
        let _container = this._container();
        let _nav = this._nav();
        let _navLink = this._navLink();
        let _navList = this._navList();
        let __navListItems = this.__navListItems(navListItems, _navLink, utils);
        return (
            <div className="container" style={_container.style}>
                <nav className="nav" style={_nav.style}>
                    <ul className="navList" style={_navList.style}>
                        {__navListItems}
                    </ul>
                </nav>
            </div>
        )
    }    
});
module.exports = Radium(AppCreateHome);