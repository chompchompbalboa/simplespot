/**
* PersonalWelcome.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

/**
* This module renders a container with a background image. The container holds
* a header that displays an image and a nav menu, and a text container with 
* a headline and a brief description.
*
* @module PersonalWelcome
*/
var PersonalWelcome = React.createClass({

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
            container: {
                style: {}
            },
            header: {
                style: {}
            },
            largeText: {
                style: {},
                text: "Let's build you a better website"
            },
            logo: {
                style: {
                    backgroundImage: "url(uploads/5776dd982cb85ae0b1b350e7/logo_black.png)"
                }
            },
            nav: {
                style: {}
            },
            navLink: {
                style: {}
            },
            navList: {
                style: {}
            },
            navListItems: {
                1: {
                    a: {
                        href: "/bio",
                        displayChanges: [
                            {key: "site.path", value: "/bio"}
                        ]
                    },
                    text: "Bio"
                },
                2: {
                    a: {
                        href: "/work",
                        displayChanges: [
                            {key: "site.path", value: "/work"}
                        ]
                    },
                    text: "Work"
                },
                3: {
                    a: {
                        href: "/contact",
                        displayChanges: [
                            {key: "site.path", value: "/contact"}
                        ]
                    },
                    text: "Contact"
                }
            },
            section: {
                style: {}
            },
            smallText: {
                style: {},
                text: "I need to write some copy here. How long it needs to be, I'm not sure. Long enough that it looks pretty reasonable, but not so long that it's difficult for a user to read the whole thing quickly. Let's see what this looks like and if it's worth keeping."
            },
            textbox: {
                style: {}
            }
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
                width: "100vw",
                height: "60vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url(uploads/5776dd982cb85ae0b1b350e7/welcome_sm.jpg)",
                "@media (min-width: 64em)": {
                    width: "calc(100vw - 2vw)",
                    height: "calc(100vh - 2vw)",
                    backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(uploads/5776dd982cb85ae0b1b350e7/welcome_sm.jpg)"
                }
            }
        }
    },

    /**
    * Settings for: _header
    *
    * @function _header
    * @return {object}
    */
    _header: function() {
        return {
            style: {
                width: "100vw",
                height: "10vh",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "transparent",
                "@media (min-width: 64em)": {
                    height: "15vh"
                }
            }
        }
    },

    /**
    * Settings for: _largeText
    *
    * @function _largeText
    * @return {object}
    */
    _largeText: function() {
        return {
            style: {
                fontFamily: "titilliumlight",
                fontSize: "3.5vh",
                whiteSpace: "nowrap",
                "@media (min-width: 64em)": {
                    fontSize: "5vh"
                }
            }
        }
    },

    /**
    * Settings for: _logo
    *
    * @function _logo
    * @return {object}
    */
    _logo: function() {
        return {
            style: {
                margin: "0px 0px 0px 5vw",
                width: "3.5vh",
                height: "3.5vh",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                "@media (min-width: 64em)": {
                    width: "5vh",
                    height: "5vh",
                }
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
                margin: "0px 3vw 0px 0px",
                width: "50vw",
                height: "100%",
                "@media (min-width: 64em)": {
                    width: "30vw"
                }
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
                textDecoration: "none",
                color: "black"
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
                justifyContent: "space-around",
                alignItems: "center",
                fontFamily: "titilliumlight",
                fontSize: "1.75vh",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                listStyle: "none",
                "@media (min-width: 64em)": {
                    fontSize: "2vh",
                }
            }
        }
    },

    /**
    * Settings for: __navListItems
    *
    * @function __navListItems
    * @return {array}
    */
    __navListItems: function(displayHandler, items, navLink) {
        let _navLink = this._navLink();
        let payload = [];
        for (let i in items) {
            let item = items[i];
            payload.push(
                <li key={i}>
                    <a href="/" style={[_navLink.style, navLink.style]} onClick={(e) => displayHandler.internalLinkClick(e, item.a.displayChanges, "site")}>
                        {item.text}
                    </a>
                </li>
            );
        }
        return payload;
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
                height: "60vh",
                backgroundColor: "white",
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "center",
                alignItems: "center",
                "@media (min-width: 64em)": {
                    height: "100vh"
                }
            }
        }
    },

    /**
    * Settings for: _smallText
    *
    * @function _smallText
    * @return {object}
    */
    _smallText: function() {
        return {
            style: {
                margin: "1.5vh 0px 2vh 0px",
                fontFamily: "titilliumlight",
                fontSize: "2vh",
                fontWeight: "100",
                "@media (min-width: 64em)": {
                    fontSize: "2.25vh"
                }
            }
        }
    },

    /**
    * Settings for: _textbox
    *
    * @function _textbox
    * @return {object}
    */
    _textbox: function() {
        return {
            style: {
                width: "90vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                color: "black",
                "@media (min-width: 64em)": {
                    margin: "0px 30vw 25vh 0px",
                    width: "50vw",
                    color: "white"
                }
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
        var {container, header, largeText, logo, nav, navLink, navList, navListItems, section, smallText, textbox, utils, ...other} = this.props;
        let _section = this._section();
        let _container = this._container();
        let _header = this._header();
        let _logo = this._logo();
        let _nav = this._nav();
        let _navList = this._navList();
        let __navListItems = this.__navListItems(utils.displayHandler, navListItems, navLink);
        let _textbox = this._textbox();
        let _largeText = this._largeText();
        let _smallText = this._smallText();
        return (
            <section className="section" style={[_section.style, section.style]}>
                <div className="container" style={[_container.style, container.style]}>
                    <div className="header" style={[_header.style, header.style]}>
                        <div className="logo" style={[_logo.style, logo.style]}></div>
                        <nav className="nav" style={[_nav.style, nav.style]}>
                            <ul className="navList" style={[_navList.style, navList.style]}>
                                {__navListItems}
                            </ul>
                        </nav>
                    </div>
                    <div className="textbox" style={[_textbox.style, textbox.style]}>
                        <div className="largeText" style={[_largeText.style, largeText.style]}>{largeText.text}</div>
                        <div className="smallText" style={[_smallText.style, smallText.style]}>{smallText.text}</div>
                    </div>
                </div>
            </section>
        )
    }    
});
module.exports = Radium(PersonalWelcome);