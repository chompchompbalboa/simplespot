/**
* AppDashboard.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

/**
* This module renders the dashboard for the app
*
* @module AppDashboard
*/
var AppDashboard = React.createClass({

    /**
    * Validate props types
    *
    * @prop propTypes
    * @return {object}
    */
    propTypes: {
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
            nav: {
                style: {}
            }, 
            navLink: {
                style: {}
            }, 
            navList: {
                style: {}
            }, 
            navListItems: [
                {
                    a: {
                        href: "/create",
                        displayChanges: [
                            {key: "app.path", value: "/create"}
                        ]
                    },
                    text: "Create"
                },
                {
                    a: {
                        href: "/logout",
                        displayChanges: [
                            {key: "app.path", value: "/"}
                        ]
                    },
                    text: "Logout"
                }
            ],
            section: {
                style: {}
            }, 

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
    __navListItems: function(items, utils) {
        let _navLink = this._navLink();
        return items.map(function(item, index) {
            let handler;
            // Set the appropriate handler for each link
            switch (item.text) {
                case "Logout":
                    handler = utils.appHandler.logoutRequest;
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
    * Settings for: _section
    *
    * @function _section
    * @return {object}
    */
    _section: function() {
        return {
            style: {
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
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
        var {nav, navList, navListItems, section, utils, ...other} = this.props;
        let _nav = this._nav();
        let _navList = this._navList();
        let __navListItems = this.__navListItems(navListItems, utils);
        let _section = this._section();
        return (
            <section className="section" style={[_section.style, section.style]}>
                <nav className="nav" style={[_nav.style, nav.style]}>
                    <ul className="navList" style={[_navList.style, navList.style]}>
                        {__navListItems}
                    </ul>
                </nav>
            </section>
        )
    }    
});
module.exports = Radium(AppDashboard);