/**
* Rocky.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

var Rocky3DModeling = require('./Rocky3DModeling/Rocky3DModeling.jsx');
var RockyHome = require('./RockyHome/RockyHome.jsx');
var RockyWebDevelopment = require('./RockyWebDevelopment/RockyWebDevelopment.jsx');

/**
* Rocky's personal website
*
* @module Rocky
*/
var Rocky = React.createClass({

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
            }
        }
    },

    /**
    * Settings for: __active
    *
    * @function __active
    * @return {object}
    */
    __active: function(site) {
        let payload = [];
        switch(site.display.path) {
            case "/":
                payload.push(
                    <RockyHome key="key" site={site}/>
                );
            break;
            case "/3d-modeling":
                payload.push(
                    <Rocky3DModeling key="key" site={site}/>
                );
            break;
            case "/web-development":
                payload.push(
                    <RockyWebDevelopment key="key" site={site}/>
                );
            break;
            default:
                payload.push(
                    <RockyHome key="key" site={site}/>
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
        var {site, ...other} = this.props;
        let _section = this._section();
        let __active = this.__active(site);
        return (
            <section className="section" style={_section.style}>
                {__active}
            </section>
        )
    }    
});
module.exports = Radium(Rocky);