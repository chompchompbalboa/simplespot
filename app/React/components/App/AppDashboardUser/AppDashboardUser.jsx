/**
* AppDashboardUser.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const AppDashboardContent = require('../AppDashboardContent/AppDashboardContent.jsx');
const AppDashboardSidebar = require('../AppDashboardSidebar/AppDashboardSidebar.jsx');

/**
* AppDashboardUser
*
* @module AppDashboardUser
*/
class AppDashboardUser extends React.Component {

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
                left: "0vw",
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "center",
                alignItems: "flex-start",
                backgroundColor: "rgba(250,250,250,1)",
                fontFamily: "Lato, sans-serif",
                fontWeight: "300"
            }
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
        return (
            <div  style={_div.style}>
                <AppDashboardSidebar content={content}/>
                <AppDashboardContent content={content}/>
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardUser);