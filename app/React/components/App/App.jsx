/**
* App.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

var Thumbs = require('./Thumbs/Thumbs.jsx');

/**
* The top level app component
*
* @module App
*/
var App = React.createClass({

    /**
    * Settings for: _section
    *
    * @function _section
    * @return {object}
    */
    _section: function() {
        return {
            style: {
                zIndex: '1',
                position: 'absolute',
                top: '0vh',
                left: '0vw'
            }
        }
    },

    /**
    * Settings for: __app
    *
    * @function __app
    * @param {object} app
    * @param {object} utils
    * @return ReactElement
    */
    __app: function(app) {
    },

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render: function() {
        var {content, utils, ...other} = this.props;
        let _section = this._section();
        let __app = this.__app(content.app);
        return (
            <section id="app" style={_section.style}>
                <Thumbs />
            </section>
        )
    }    
});
module.exports = Radium(App);