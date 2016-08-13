/**
* RockyHome.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

var contentActions = require('../../../../actions/contentActions');

/**
* Rocky's personal website
*
* @module RockyHome
*/
var RockyHome = React.createClass({

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
    * Handle click on a navListItem
    *
    * @function handleClick
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
    _nav: function() {
        return {
            style: {
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
            }
        }
    },

    /**
    * Settings for: _navListItem
    *
    * @function _navListItem
    * @return {object}
    */
    _navListItem: function() {
        return {
            style: {
                margin: "0 0 0 10vw",
                textDecoration: "none",
                color: "black",
                ":hover": {
                    "color": "rgba(101,186,114,1)"
                }
            }
        }
    }, 

    /**
    * Settings for: _name
    *
    * @function _name
    * @return {object}
    */
    _name: function() {
        return {
            name: "Rocky Eastman",
            style: {
                margin: "0 0 0 10vw",
                color: "black",
                fontSize: "36px",
                letterSpacing: "1px"
            }
        }
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
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                fontFamily: "courier_primeregular"
            }
        }
    },    

    /**
    * Settings for: __navListItems
    *
    * @function __navListItems
    * @return {object}
    */
    __navListItems: function() {
        let _navListItem = this._navListItem();
        let payload = [];
        payload.push(
            <li key="dev">
                <a key="dev-a" href="/web-development" style={_navListItem.style} onClick={(e) => this.handleClick(e, "/web-development")}>
                    Full Stack Web Development
                </a>
            </li>);
        payload.push(
            <li key="modeling">
                <a key="modeling-a" href="/3d-modeling" style={_navListItem.style} onClick={(e) => this.handleClick(e, "/3d-modeling")}>
                    3D Modeling
                </a>
            </li>);
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
        let _name = this._name();
        let _nav = this._nav();
        let _navList = this._navList();
        let _section = this._section();
        let __navListItems = this.__navListItems();
        return (
            <section className="section" style={_section.style}>
                <div className="name" style={_name.style}>
                    {_name.name}
                </div>
                <nav className="nav" style={_nav.style}>
                    <ul className="navList" style={_navList.style}>
                        {__navListItems}
                    </ul>
                </nav>
            </section>
        )
    }    
});
module.exports = Radium(RockyHome);