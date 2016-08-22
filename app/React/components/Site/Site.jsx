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
* For now, our theme list is here. I will more than likely abstract this away
* eventually, but for ease of development's sake, I'm going to leave it here
* for now.
*/
var NWAire = require('./Themes/NWAire/NWAire.jsx');
var Omni = require('./Themes/Omni/Omni.jsx');
var Rocky = require('./Themes/Rocky/Rocky.jsx');

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
    * Settings for: __site
    *
    * @function __site
    * @param {object} site
    * @param {object} utils
    * @return ReactElement
    */
    __site: function(site) {
        let theme = eval(site.theme);
        let props = {
            site: site
        };
        return (
            React.createElement(
                theme,
                props,
            )
        )
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
        let __site = this.__site(content.site);
        return (
            <section id="site" style={_section.style}>
                {__site}
            </section>
        )
    }    
});
module.exports = Radium(Site);