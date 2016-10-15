/**
* One.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

// Containers
const ContainerOne = require('./containers/ContainerOne/ContainerOne.jsx');
// Footers
const FooterOne = require('./footers/FooterOne/FooterOne.jsx');
// Headers
const HeaderOne = require('./headers/HeaderOne/HeaderOne.jsx');
// Titles
const TitleOne = require('./titles/TitleOne/TitleOne.jsx');

/**
* One
*
* @module One
*/
class One extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
        this.state = {
            headerDropdown: false,
            headerFullPage: false

        };
        this.scrollTimer = 0;
        this.controlDropdown = this.controlDropdown.bind(this);
        this.handleNavLinkClick = this.handleNavLinkClick.bind(this);
        this.handleNewPageLoad = this.handleNewPageLoad.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    /**
    * Validate the prop types
    *
    * @prop propTypes
    */
    static propTypes = {
        section: React.PropTypes.object.isRequired,
        site: React.PropTypes.object.isRequired
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        section: {},
        site: {}
    }

    /**
    * ComponentDidMount
    *
    * @function componentDidMount
    */
    componentDidMount() {
        this.controlDropdown();
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
    * Control Dropdown
    *
    * @function controlDropdown
    * @return {object}
    */
    controlDropdown() {
        let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let scrollTop = window.scrollY;
        let current = scrollTop / height;
        switch (this.state.headerDropdown) {
            case true:
                if (current <= 0.2 && this.state.headerFullPage === false) {
                    this.setState({
                        headerDropdown: false
                    })
                }
            break;
            case false:
                if (current > 0.2) {
                    this.setState({
                        headerDropdown: true
                    })
                }
            break;
        }
    }

    /**
    * Handle Nav Link Click
    *
    * @function handleNavLinkClick
    * @return {object}
    */
    handleNavLinkClick() {
        this.setState({
            headerFullPage: (this.state.headerFullPage ? false : true)
        });
    }

    /**
    * Handle New Page Load
    *
    * @function handleNewPageLoad
    * @return {object}
    */
    handleNewPageLoad() {
        window.scrollTo(0,0);
        this.setState({
            headerDropdown: false,
            headerFullPage: false
        });
    }

    /**
    * Handle Scroll
    *
    * @function handleScroll
    * @return {object}
    */
    handleScroll() {
        if (this.scrollTimer) {
            window.clearTimeout(this.scrollTimer);    
        }
        this.scrollTimer = window.setTimeout(this.controlDropdown, 1000/60);
    }

    /**
    * Path
    * 
    * Get the active path
    *
    * @function path
    * @return {object}
    */
    path(path, paths) {
        let basePath = path.split("/")[1];
        if (typeof paths[basePath] !== "undefined") {
            return basePath;
        }
        else {
            return "auto";
        }
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
                position: "relative",
                top: "0vh",
                left: "0vw"
            }
        }
    }

    /**
    * Settings for: __build
    *
    * @function __build
    * @return {object}
    */
    __build(build, current, isHeader) {
        let path = this.path(current, build);
        let element = eval(build[path].module);
        let props = jQuery.extend(true, {}, build[path].props);
        props.handleNavLinkClick = this.handleNavLinkClick;
        props.handleNewPageLoad = this.handleNewPageLoad;
        if (isHeader) {
            props.dropdown = this.state.headerDropdown;
            props.fullpage = this.state.headerFullPage;
        }
        return (
            React.createElement(
                element,
                props,
            )
        )
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        var {section, site, ...other} = this.props;
        let _section = this._section(section); 
        let __container = this.__build(site.props.container.paths, site.display.path, false);
        let __header = this.__build(site.props.header.paths, site.display.path, true); 
        let __title = this.__build(site.props.title.paths, site.display.path, false);
        return (
            <section className="One" style={_section.style}>
                {__title}
                {__container}
            </section>
        )
    }    
}
// Export
module.exports = Radium(One);