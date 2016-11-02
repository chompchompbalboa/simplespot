/**
* NWAireBusinessInfo.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

/**
* The theme for Northwest Aire Services
*
* @module NWAireBusinessInfo
*/
var NWAireBusinessInfo = React.createClass({

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
            info: {
                0: "Northwest Aire Services",
                1: " ",
                2: "PO Box 66070",
                3: "Seattle, WA 98166",
                4: " ",
                5: "Office: (206) 241-2657",
                6: "Fax: (206) 241-2931",
                7: " ",
                8: "Contractor # NORTHAS963K4"
            }
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
            }
        }
    },

    /**
    * Settings for: __info
    *
    * @function __info
    * @return {object}
    */
    __info: function(info) {
        let payload = [];
        let style = {
            margin: "0 0 0 10vw",
            minHeight: "3vh",
            color: "black",
            fontFamily: "Monda, sans-serif",
            fontSize: "20px"
        }
        for (let i in info) {
            payload.push(
                <div key={i} style={style}>{info[i]}</div>
            );
        }
        return payload;
    },

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render: function() {
        var {info, ...other} = this.props;
        let _container = this._container();
        let __info = this.__info(info);
        return (
            <div className="container">
                {__info}
            </div>
        )
    }    
});
module.exports = Radium(NWAireBusinessInfo);