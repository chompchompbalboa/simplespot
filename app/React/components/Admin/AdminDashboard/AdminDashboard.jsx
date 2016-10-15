/**
* AdminDashboard.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const AdminEdit = require('../AdminEdit/AdminEdit.jsx');
const AdminNew = require('../AdminNew/AdminNew.jsx');
const AdminLogout = require('../AdminLogout/AdminLogout.jsx');
const AdminSave = require('../AdminSave/AdminSave.jsx');

/**
* The top level admin component
*
* @module AdminDashboard
*/
class AdminDashboard extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
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
                width: "100vw",
                height: "5vh",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
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
            <div className="div" style={_div.style}>
                <AdminNew />
                <AdminSave content={content} />
                <AdminLogout />
                <AdminEdit content={content} />
            </div>
        )
    }    
}
module.exports = Radium(AdminDashboard);