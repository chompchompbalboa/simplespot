/**
* AppDashboardContentEditForm.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const AppDashboardContentEditFormOne = require('../AppDashboardContentEditFormOne/AppDashboardContentEditFormOne.jsx');
const AppDashboardContentEditFormTwo = require('../AppDashboardContentEditFormTwo/AppDashboardContentEditFormTwo.jsx');

/**
* AppDashboardContentEditForm
*
* @module AppDashboardContentEditForm
*/
class AppDashboardContentEditForm extends React.Component {

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
                width: "100%",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
            }
        }
    }

    /**
    * Settings for: __form
    *
    * @function __form
    * @return {object}
    */
    __form(active, content) {
        switch (active) {
            case "One":
                return (<AppDashboardContentEditFormOne content={content} />);
            break;
            case "Two":
                return (<AppDashboardContentEditFormTwo content={content} />);
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
        let _div = this._div();
        let __form = this.__form(content.app.editing.theme, content);
        return (
            <div style={_div.style}>
                {__form}
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardContentEditForm);