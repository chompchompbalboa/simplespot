/**
* AdminEditControls.jsx
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
* @module AdminEditControls
*/
class AdminEditControls extends React.Component {

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
    * Handle Display Change
    *
    * @function handleDisplayChange
    * @return {object}
    */
    handleDisplayChange(e, display) {
        e.preventDefault();
        let changes = [
            {key: "admin.display.edit", value: (display === "true" ? "false" : "true")}
        ];
        contentActions.changeContent(changes);
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
                width: "100vh",
                height: "3vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }
        }
    }

    /**
    * Settings for: _displayButton
    *
    * @function _displayButton
    * @return {object}
    */
    _displayButton(display) {
        return {
            text: (display === "true" ? "Hide" : "Show")
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
        let _displayButton = this._displayButton(content.admin.display.edit);
        return (
            <div style={_div.style}>
                <button onClick={(e) => this.handleDisplayChange(e, content.admin.display.edit)}>{_displayButton.text}</button>
            </div>
        )
    }    
}
module.exports = Radium(AdminEditControls);