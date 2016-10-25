/**
* AppDashboard.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const AppDashboardAdmin = require('../AppDashboardAdmin/AppDashboardAdmin.jsx');
const AppDashboardUser = require('../AppDashboardUser/AppDashboardUser.jsx');

/**
* AppDashboard
*
* @module AppDashboard
*/
class AppDashboard extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
        this.state = {
        };
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
    * Settings for: _div
    *
    * @function _div
    * @return {object}
    */
    _div() {
        return {
            style: {
                position: "relative",
                top: "0vh",
                left: "0vw"
            }
        }
    }

    /**
    * Settings for: __dashboard
    *
    * @function __dashboard
    * @return {object}
    */
    __dashboard(userType) {
        switch (userType) {
            case "admin":
                return (<AppDashboardAdmin content={this.props.content}/>)
            break;
            default:
                return (<AppDashboardUser content={this.props.content}/>)
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
        let _div = this._div();
        let __dashboard = this.__dashboard(content.app.user.type);
        return (
            <div  style={_div.style}>
                {__dashboard}
            </div>
        )
    }    
}
module.exports = Radium(AppDashboard);