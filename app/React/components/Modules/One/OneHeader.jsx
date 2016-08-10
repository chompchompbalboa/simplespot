/**
* OneHeader.jsx
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
* @module OneHeader
*/
var OneHeader = React.createClass({

    /**
    * Validate props types
    *
    * @prop propTypes
    * @return {object}
    */
    propTypes: {
    },

    /**
    * Component Did Mount
    *
    * @function componentDidMount
    * @return {object}
    */
    componentDidMount: function() {
        window.addEventListener('scroll', (e) => this.handleScroll(e));
    },

    /**
    * Component Will Unmount
    *
    * @function componentWillUnmount
    * @return {object}
    */
    componentWillUnmount: function() {
        window.removeEventListener('scroll', (e) => this.handleScroll(e));
    },

    /**
    * Get the default props
    *
    * @function getDefaultProps
    * @return {object}
    */
    getDefaultProps: function() {
        return {
            section: {
                style: {}
            }
        }
    },

    /**
    * Get the default props
    *
    * @function getInitialState
    * @return {object}
    */
    getInitialState: function() {
        return {
            top: "-10vh"
        }
    },

    /**
    * When the user scrolls, check to see if the position of the header needs
    * to be changed (out of view until the user scrolls past a certain point)
    *
    * @function handleScroll
    * @return {object}
    */
    handleScroll: function(e) {
        let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let pageYOffset = window.pageYOffset;
        switch (this.state.top) {
            case "-10vh":
                if ((pageYOffset / height) > 0.08) {
                    this.setState({
                        top: "0vh"
                    });
                }
            break;
            case "0vh":
                if ((pageYOffset / height) < 0.08) {
                    this.setState({
                        top: "-10vh"
                    });
                }
            break;
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
    * Settings for: _navContainer
    *
    * @function _navContainer
    * @return {object}
    */
    _navContainer: function() {
        return {
            style: {
                minWidth: "50%"
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
                fontFamily: "titilliumlight",
                textTransform: "uppercase",
                fontSize: "16px",
                letterSpacing: "0.75px",
                color: "black",
                textDecoration: "none"
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
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                listStyle: "none"
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
            }
        }
    },

    /**
    * Settings for: _section
    *
    * @function _section
    * @return {object}
    */
    _section: function(top) {
        return {
            style: {
                zIndex: "9999",
                position: "fixed",
                top: top,
                left: "0vw",
                width: "100vw",
                height: "8vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                transition: "top 0.375s"
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
        var {...other} = this.props;
        let _nav = this._nav();
        let _navContainer = this._navContainer();
        let _navList = this._navList();
        let _navListItem = this._navListItem();
        let _navLink = this._navLink();
        let _section = this._section(this.state.top);
        return (
            <section className="section" style={_section.style}>
                <div className="navContainer" style={_navContainer.style}>
                    <nav className="nav" style={_nav.style}>
                        <ul className="navList" style={_navList.style}>
                            <li className="navListItem" style={_navListItem.style}>
                                <a href="/hours" style={_navLink.style}>Hours</a>
                            </li>
                            <li className="navListItem" style={_navListItem.style}>
                                <a href="/menu" style={_navLink.style}>Menu</a>
                            </li>
                            <li className="navListItem" style={_navListItem.style}>
                                <a href="/location" style={_navLink.style}>Location</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        )
    }    
});
module.exports = Radium(OneHeader);