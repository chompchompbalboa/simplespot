/**
* Site.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

/**
* The top level site component
*
* @module Site
*/
var Site = React.createClass({

    /**
    * Settings for: _section
    *
    * @function _section
    * @return {object}
    */
    _section: function() {
        return {
            style: {
                zIndex: '0',
                position: 'relative',
                top: '0vh',
                left: '0vw'
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
        var {content, utils, ...other} = this.props;
        let _section = this._section();
        let __site = utils.loader.loadTheme(content.site.versions.active.props, content.site.versions.active.theme);
        return (
            <section id="site" style={_section.style}>
                {__site}
            </section>
        )
    }    
});
module.exports = Radium(Site);