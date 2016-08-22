/**
* NavigationTwo.jsx
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
* NavigationTwo
*
* @module NavigationTwo
*/
class NavigationTwo extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
        this.handleLinkClick = this.handleLinkClick.bind(this);
        this.handleLogoClick = this.handleLogoClick.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            navDrop: false
        }
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
                color: "black",
                fontFamily: "Cuprum, sans-serif",
                fontSize: "14px",
                fontWeight: "300",
                letterSpacing: "4px",
                textTransform: "uppercase"
            }
        },
        logo: {
            left: "calc(100vw - 7vh)"
        },
        nav: {
            justifyContent: "flex-end"
        }
    }

    /**
    * ComponentDidMount
    *
    * @function componentDidMount
    */
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    /**
    * ComponentWillUnmount
    *
    * @function componentWillUnmount
    */
    componentWillUnmount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    /**
    * ComponentWillReceiveProps
    *
    * @function componentWillReceiveProps
    */
    componentWillReceiveProps() {
        this.setState({
            navDrop: false
        });
    }

    /**
    * Settings for: handleLinkClick
    *
    * @function handleLinkClick
    * @return {object}
    */
    handleLinkClick(e, path) { 
        e.preventDefault();
        let changes = [
            {key: "site.display.path", value: path}
        ];
        contentActions.changeContent(changes);
    }

    /**
    * Settings for: handleLogoClick
    *
    * @function handleLogoClick
    * @return {object}
    */
    handleLogoClick(e, path) { 
        this.setState({
            navDrop: (this.state.navDrop ? false : true)
        })
    }

    /**
    * Settings for: handleScroll
    *
    * @function handleScroll
    * @return {object}
    */
    handleScroll() {
        let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let scrollTop = window.scrollY;
        let current = scrollTop / height;
        switch (this.state.navDrop) {
            case true:
                if (current === 0) {
                    this.setState({
                        navDrop: false
                    })
                }
            break;
            case false:
                if (current > 0) {
                    this.setState({
                        navDrop: true
                    })
                }
            break;
        }
    }

    /**
    * Settings for: _logo
    *
    * @function _logo
    * @return {object}
    */
    _logo(logo) {
        return {
            style: {
                cursor: "pointer",
                position: "absolute",
                top: "3vh",
                left: logo.left,
                width: "4vh",
                height: "4vh",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundImage: "url(themes/Omni/Navigation/NavigationTwo/logo.png)"
            }
        }
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
                margin: (this.state.navDrop ? "0 0 0 0" : "-10vh 0 0 0"),
                position: "absolute",
                top: "0vh",
                left: "0vw",
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: nav.justifyContent,
                alignItems: "center",
                backgroundColor: "white",
                transition: "margin 0.5s"
            }
        }
    }

    /**
    * Settings for: _section
    *
    * @function _section
    * @return {object}
    */
    _section() { 
        return {
            style: {
                position: "fixed",
                top: "0vh",
                left: "0vw",
                height: "10vh",
                width: "100vw"
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
                <a key={i} href={current.path} style={style} onClick={(e) => this.handleLinkClick(e, current.path)}>{current.text}</a>
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
        var {items, logo, nav, ...other} = this.props;
        let _logo = this._logo(logo);
        let _nav = this._nav(nav);
        let _section = this._section();
        let __items = this.__items(items);
        return (
            <section className="section" style={_section.style}>
                <div className="logo" style={_logo.style} onClick={() => this.handleLogoClick()}>    
                </div>
                <nav className="nav" style={_nav.style}>
                    {__items}
                </nav>
            </section>
        )
    }    
}
// Export
module.exports = Radium(NavigationTwo);