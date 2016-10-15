/**
* AdminNew.jsx
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
* @module AdminNew
*/
class AdminNew extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
        this.state = {
            urlValue: ""
        };
        this.handleChange = this.handleChange.bind(this);
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
    * Handle Change
    *
    * @function handleChange
    */
    handleChange() {
        this.setState({
            urlValue: this.urlInput.value
        })
    }

    /**
    * Handle Submit
    *
    * @function handleSubmit
    */
    handleSubmit(e) {
        e.preventDefault();
        let data = {
            url: this.state.urlValue
        };
        contentActions.fetchContent("ADMIN_FETCH_NEW", data);
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
        let {...other} = this.props;
        let _form = this._form();
        return (
            <form style={_form.style} onSubmit={(e) => this.handleSubmit(e)}>
                <input ref={(c) => this.urlInput = c} type="text" value={this.state.urlValue} onChange={this.handleChange} />
                <input type="submit" value="New" />
            </form>
        )
    }    
}
module.exports = Radium(AdminNew);