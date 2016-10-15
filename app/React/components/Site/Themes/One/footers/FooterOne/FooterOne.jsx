/**
* FooterOne.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* FooterOne
*
* @module FooterOne
*/
class FooterOne extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
        this.state = {};
    }

    /**
    * Validate the prop types
    *
    * @prop propTypes
    */
    static propTypes = {
        div: React.PropTypes.object.isRequired
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        div: {}
    }

    /**
    * Settings for: _div
    *
    * @function _div
    * @return {object}
    */
    _div(div) {
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
        var {div, ...other} = this.props;
        let _div = this._div(div);
        return (
            <div className="div" style={_div.style}>
                FooterOne
            </div>
        )
    }    
}
// Export
module.exports = Radium(FooterOne);