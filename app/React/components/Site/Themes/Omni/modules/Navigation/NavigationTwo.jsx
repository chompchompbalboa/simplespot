/**
* NavigationTwo.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

/**
* Let's throw a party
*
* @module NavigationTwo
*/
var NavigationTwo = React.createClass({

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
        console.log(path);
    },

    /**
    * Settings for: _logo
    *
    * @function _logo
    * @return {object}
    */
    _logo: function() { 
        let left = this.props.random.fromArray([true, false]);
        return {
            style: {
                position: "absolute",
                top: "3vh",
                left: (left ? "3vh" : "calc(100vw - 7vh)"),
                width: "4vh",
                height: "4vh",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundImage: "url(themes/Random/Navigation/NavigationTwo/logo.png)"
            }
        }
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
                margin: "-10vh 0 0 0",
                position: "absolute",
                top: "0vh",
                left: "0vw",
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: this.props.random.justifyContent(),
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
    _section: function(colors, fonts) { 
        return {
            style: {
                position: "fixed",
                top: "0vh",
                left: "0vw",
                height: "10vh",
                width: "100vw"
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
        let _logo = this._logo();
        let _nav = this._nav(colors, fonts);
        let _section = this._section();
        let __items = this.__items(colors, fonts, items);
        return (
            <section className="section" style={_section.style}>
                <div className="logo" style={_logo.style}>    
                </div>
                <nav className="nav" style={_nav.style}>
                    {__items}
                </nav>
            </section>
        )
    }    
});
module.exports = Radium(NavigationTwo);