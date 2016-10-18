/**
* NorthwestAireContainer.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const NorthwestAireContainerOne = require('../NorthwestAireContainerOne/NorthwestAireContainerOne.jsx');
const NorthwestAireContainerTwo = require('../NorthwestAireContainerTwo/NorthwestAireContainerTwo.jsx');

/**
* The top level app component
*
* @module NorthwestAireContainer
*/
class NorthwestAireContainer extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props)
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
                display: "flex",
                flexFlow: "column wrap",
                justifyContent: "flex-start",
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
        let {...other} = this.props;
        let _div = this._div();
        return (
            <div className="div" style={_div.style}>
                <NorthwestAireContainerOne />
                <NorthwestAireContainerTwo />
            </div>
        )
    }    
}
module.exports = Radium(NorthwestAireContainer);