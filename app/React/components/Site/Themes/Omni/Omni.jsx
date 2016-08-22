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

var HoursOne = require('./modules/Hours/HoursOne/HoursOne.jsx');
var ImageOne = require('./modules/Image/ImageOne/ImageOne.jsx');
var NavigationOne = require('./modules/Navigation/NavigationOne/NavigationOne.jsx');
var NavigationTwo = require('./modules/Navigation/NavigationTwo/NavigationTwo.jsx');
var LinkOne = require('./modules/Link/LinkOne/LinkOne.jsx');
var LocationOne = require('./modules/Location/LocationOne/LocationOne.jsx');
var SplashOne = require('./modules/Splash/SplashOne/SplashOne.jsx');

/**
* Load the modules
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
                flexFlow: "row wrap",
                justifyContent: "flex-start",
                alignItems: "center"
            }
        }
    },

    /**
    * Settings for: __modules
    *
    * @function __modules
    * @return {object}
    */
    __modules: function(page) {
        let payload = [];
        for(let current in page) {
            let module = eval(page[current].module);
            let props = this.__modulesProps(current, page[current].props);
            payload.push(
                React.createElement(
                    module,
                    props
                )
            )
        }
        return payload;
    },

    /**
    * Settings for: __modulesProps
    *
    * @function __modulesProps
    * @return {object}
    */
    __modulesProps: function(current, props) {
        let payload = {};
        payload['key'] = current;
        for (let i in props) {
            payload[i] = props[i];
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
        let {site, ...other} = this.props;
        let _section = this._section();
        let __modules = this.__modules(site.pages[site.display.path]);
        return (
            <section className="section" style={_section.style}>
                {__modules}
            </section>
        )
    }    
});
module.exports = Radium(Omni);