/**
* AdminSave.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const contentActions = require('../../../actions/contentActions');

/**
* The top level admin component
*
* @module AdminSave
*/
class AdminSave extends React.Component {

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
    * Handle Submit
    *
    * @function handleSubmit
    */
    handleSubmit(e, content) {
        e.preventDefault();
        let data = {
            content: content
        };
        contentActions.fetchContent("ADMIN_SAVE", data);
    }

    /**
    * Settings for: _form
    *
    * @function _form
    * @return {object}
    */
    _form() {
        return {
            style: {
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
        let _form = this._form();
        return (
            <form style={_form.style} onSubmit={(e) => this.handleSubmit(e, content)}>
                <input type="submit" value="Save" />
            </form>
        )
    }    
}
module.exports = Radium(AdminSave);