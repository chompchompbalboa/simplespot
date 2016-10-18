/**
* NorthwestAire.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const NorthwestAireContainer = require('./NorthwestAireContainer/NorthwestAireContainer.jsx');

/**
* The top level app component
*
* @module NorthwestAire
*/
class NorthwestAire extends React.Component {

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
    * Settings for: _section
    *
    * @function _section
    * @return {object}
    */
    _section() {
        return {
            style: {
                zIndex: "1",
                position: "relative",
                top: "0vh",
                left: "0vw"
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
        let _section = this._section();
        return (
            <section id="nwaire" style={_section.style}>
                <NorthwestAireContainer />
            </section>
        )
    }    
}
module.exports = Radium(NorthwestAire);