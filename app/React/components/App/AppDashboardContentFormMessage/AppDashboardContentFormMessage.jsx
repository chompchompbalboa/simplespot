/**
* AppDashboardContentFormMessage.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* AppDashboardContentFormMessage
*
* @module AppDashboardContentFormMessage
*/
class AppDashboardContentFormMessage extends React.Component {

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
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    margin: "3vh 0 5vh 0",
                    width: "50%",
                    color: "red",
                    fontWeight: "400",
                }
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
        let {message, ...other} = this.props;
        let _div = this._div();
        return (
            <div style={_div.style}>
                {message}
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardContentFormMessage);