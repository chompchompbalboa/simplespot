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
    * Builds the style object for this component
    *
    * @function style
    * @return {object}
    */
    style: function() {
        var style = {
            section: {
                zIndex: '0',
                position: 'relative',
                width: '100vw',
                display: 'flex',
                flexFlow: 'row wrap',
                justifyContent: 'center',
                alignItems: 'center'
            }
        };
        return style;
    },

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render: function() {
        var {display, editable, site, utils, ...other} = this.props;
        var path = display.site.path;
        var page = utils.loader.loadModules(null, display, path, site.versions.active.pages[path], site, utils);
        var style = this.style();
        return (
            <section id="site" style={style.section}>
                {page}
            </section>
        )
    }    
});
module.exports = Radium(Site);