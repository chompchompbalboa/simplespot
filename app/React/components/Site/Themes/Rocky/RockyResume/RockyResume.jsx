/**
* RockyResume.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

var RockyResumeHead = require('../RockyResumeHead/RockyResumeHead.jsx')

/**
* Rocky's personal website
*
* @module RockyResume
*/
var RockyResume = React.createClass({

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
        }
    }, 

    /**
    * Settings for: _section
    *
    * @function _section
    * @return {object}
    */
    _section: function() {
        return {
            style: {
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
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
        var {site, ...other} = this.props;
        let _section = this._section();
        return (
            <section className="section" style={_section.style}>
                <RockyResumeHead
                />
            </section>
        )
    }    
});
module.exports = Radium(RockyResume);