/**
* Admin.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const AppDashboard = require('./AppDashboard/AppDashboard.jsx');
const AppHome = require('./AppHome/AppHome.jsx');
const AppLogin = require('./AppLogin/AppLogin.jsx');
const AppPreview = require('./AppPreview/AppPreview.jsx');

/**
* The top level app component
*
* @module Admin
*/
class Admin extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props)
    }

    /**
    * Validate the prop types
    *
    * @prop propTypes
    */
    static propTypes = {
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
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
                zIndex: "1",
                position: "relative",
                top: "0vh",
                left: "0vw"
            }
        }
    }

    /**
    * Settings for: __app
    *
    * @function __app
    * @return {object}
    */
    __app(path) {
        let basePath = path.split("/")[1];
        switch (basePath) {
            case "dashboard":
                return (<AppDashboard content={this.props.content}/>)
            break;
            case "preview":
                return (<AppPreview content={this.props.content}/>)
            break;
            case "login":
                return (<AppLogin content={this.props.content}/>)
            break;
            default:
                return (<AppHome content={this.props.content}/>)      
        }
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        let {content, ...other} = this.props;
        let _section = this._section();
        let __app = this.__app(content.app.display.path);
        return (
            <section id="app" style={_section.style}>
                {__app}
            </section>
        )
    }    
}
module.exports = Radium(Admin);