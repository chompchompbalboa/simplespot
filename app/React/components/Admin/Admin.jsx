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

const AdminDashboard = require('./AdminDashboard/AdminDashboard.jsx');
const AdminLogin = require('./AdminLogin/AdminLogin.jsx');

/**
* The top level admin component
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
                zIndex: "2",
                position: "fixed",
                top: "0",
                left: "0"
            }
        }
    }

    /**
    * Settings for: __admin
    *
    * @function __admin
    * @return {object}
    */
    __admin(content) {
        switch (content.admin.display.path) {
            case "dashboard":
                return (<AdminDashboard content={content} />)
            break;
            case "login":
                return (<AdminLogin />)
            break;
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
        let __admin = this.__admin(content);
        return (
            <section id="admin" style={_section.style}>
                {__admin}
            </section>
        )
    }    
}
module.exports = Radium(Admin);