/**
* Next.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const NextHome = require('./NextHome/NextHome.jsx');
const NextWork = require('./NextWork/NextWork.jsx');

/**
* Next
*
* @module Next
*/
class Next extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
        this.state = {
            dockHeader: false
        };
        this.scrollTimer = 0;
        this.dockHeader = this.dockHeader.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    /**
    * Validate the prop types
    *
    * @prop propTypes
    */
    static propTypes = {
        site: React.PropTypes.object.isRequired,
        section: React.PropTypes.object.isRequired
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
    * Component Did Mount
    *
    * @function componentDidMount
    */
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    /**
    * Component Will Unmount
    *
    * @function componentWillUnmount
    */
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    /**
    * Dock Header
    *
    * @function dockHeader
    */
    dockHeader() {
        let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let scrollTop = window.scrollY;
        let current = scrollTop / height;
        switch (this.state.dockHeader) {
            case true:
                if (current < 0.085) {
                    this.setState({
                        dockHeader: false
                    })
                }
            break;
            case false:
                if (current > 0.085) {
                    this.setState({
                        dockHeader: true
                    })
                }
            break;
        }
    }

    /**
    * Handle Scroll
    *
    * On a desktop, when the user scrolls past a certain point, the header needs
    * to dock to the top of the window / undock when scrolling back up
    *
    * @function handleScroll
    */
    handleScroll() {
        if (this.scrollTimer) {
            window.clearTimeout(this.scrollTimer);    
        }
        this.scrollTimer = window.setTimeout(this.dockHeader, 1);
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
                position: 'relative',
                top: '0vh',
                left: '0vw'
            }
        }
    }

    /**
    * Settings for: __page
    *
    * @function __page
    * @return {object}
    */
    __page(path) {
        let basePath = path.split("/")[1];
        console.log(basePath);
        switch (basePath) {
            case "invite": 
                return (<NextInvite />);
            break;
            case "work": 
                return (<NextWork dockHeader={this.state.dockHeader} />);
            break;
            default:
                return (<NextHome dockHeader={this.state.dockHeader} />);
        }
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
        let __page = this.__page(site.display.path);
        console.log(site);
        return (
            <section className="Next" style={_section.style}>
                {__page}
            </section>
        )
    }    
}
// Export
module.exports = Radium(Next);