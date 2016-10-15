/**
* AdminEdit.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const contentActions = require('../../../actions/contentActions');

const AdminEditControls = require('../AdminEditControls/AdminEditControls.jsx');
const AdminEditItems = require('../AdminEditItems/AdminEditItems.jsx');

/**
* The top level admin component
*
* @module AdminEdit
*/
class AdminEdit extends React.Component {

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
    * Settings for: _section
    *
    * @function _section
    * @return {object}
    */
    _section(display) {
        return {
            style: {
                position: "fixed",
                top: (display === "true" ? "70vh" : "97vh"),
                left: "0vw",
                height: "30vh",
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                backgroundColor: "white"
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
        let _section = this._section(content.admin.display.edit);
        return (
            <section style={_section.style}>
                <AdminEditControls content={content} />
                <AdminEditItems content={content} />
            </section>
        )
    }    
}
module.exports = Radium(AdminEdit);