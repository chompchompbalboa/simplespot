/**
* NWAireContainer.jsx
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
* @module NWAireContainer
*/
var NWAireContainer = React.createClass({

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
                zIndex: "1",
                position: "absolute",
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                //backgroundRepeat: "no-repeat",
                //backgroundPosition: "center center",
                //backgroundSize: "cover",
                //backgroundImage: "url(uploads/57b35f928bcb76f5d65e79fa/placeholder.jpg)",
                "@media (min-width: 64em)": {
                    left: "15vw",
                    width: "85vw",
                    height: "100vh"
                }
            }
        }
    },

    /**
    * Settings for: __contents
    *
    * @function __contents
    * @return {object}
    */
    __contents: function(path) {
        return path;
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
        let __contents = this.__contents(site.display.path);
        return (
            <section className="section" style={_section.style}>
                {__contents}
            </section>
        )
    }    
});
module.exports = Radium(NWAireContainer);