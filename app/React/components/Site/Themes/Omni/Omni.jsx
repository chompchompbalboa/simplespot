/**
* Omni.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

var Modules = require('./Modules.jsx');

/**
* The base generator for all of our sites
*
* @module Omni
*/
var Omni = React.createClass({

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
            specs: {
            }
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
    * Settings for: _specs
    *
    * @function _specs
    * @return {object}
    */
    _specs: function(specs) {
        return specs;
    },

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render: function() {
        var {site, specs, ...other} = this.props;
        let _section = this._section();
        let _specs = this._specs(specs);
        return (
            <section className="section" style={_section.style}>
                <Modules specs={_specs}/>
            </section>
        )
    }    
});
module.exports = Radium(Omni);