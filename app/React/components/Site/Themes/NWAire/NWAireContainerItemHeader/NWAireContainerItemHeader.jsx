/**
* NWAireContainerItemHeader.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

import randomImport from '../../../../../utils/random';
const random = new randomImport();
/**
* The theme for Northwest Aire Services
*
* @module NWAireContainerItemHeader
*/
var NWAireContainerItemHeader = React.createClass({

    /**
    * Validate props types
    *
    * @prop propTypes
    * @return {object}
    */
    propTypes: {
    },

    /**
    * Get the default props
    *
    * @function getDefaultProps
    * @return {object}
    */
    getDefaultProps: function() {
        return {
            text: "Here's a brief description"
        }
    },

    /**
    * Settings for: _container
    *
    * @function _container
    * @return {object}
    */
    _container: function() {
        return {
            style: {
                width: "100%",
                textAlign: "center",
                fontFamily: "Muli, sans-serif",
                fontWeight: "bold",
                fontSize: "2.25vh",
                letterSpacing: "1px"
            }
        }
    },

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render: function() {
        var {text, ...other} = this.props;
        let _container = this._container();
        return (
            <div className="container" style={_container.style}>
                {text}   
            </div>
        )
    }    
});
module.exports = Radium(NWAireContainerItemHeader);