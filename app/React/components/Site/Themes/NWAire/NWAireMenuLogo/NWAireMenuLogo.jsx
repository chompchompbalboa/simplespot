/**
* NWAireMenuLogo.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

var contentActions = require('../../../../../actions/contentActions');
import randomImport from '../../../../../utils/random';
const random = new randomImport();

/**
* The theme for Northwest Aire Services
*
* @module NWAireMenuLogo
*/
var NWAireMenuLogo = React.createClass({

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
        return {}
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
                height: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center"
            }
        }
    },

    /**
    * Settings for: _logo
    *
    * @function _logo
    * @return {object}
    */
    _logo: function() {
        return {
            style: {
                margin: "0 0 0 5vw",
                width: "4vh",
                height: "4vh",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundImage: "url(uploads/57b35f928bcb76f5d65e79fa/menuLogo.png)"
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
        var {...other} = this.props;
        let _container = this._container();
        let _logo = this._logo();
        return (
            <div className="container" style={_container.style}>
                <div className="logo" style={_logo.style}></div>
            </div>
        )
    }    
});
module.exports = Radium(NWAireMenuLogo);