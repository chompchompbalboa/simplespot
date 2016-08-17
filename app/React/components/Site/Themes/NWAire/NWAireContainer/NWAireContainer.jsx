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
                position: "absolute",
                width: "100vw",
                height: "100vh",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundImage: "url(uploads/57b35f928bcb76f5d65e79fa/placeholder.jpg)",
                "@media (min-width: 64em)": {
                    left: "15vw",
                    width: "85vw",
                    height: "100vh"
                }
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
        var {...other} = this.props;
        let _section = this._section();
        return (
            <section className="section" style={_section.style}>
            </section>
        )
    }    
});
module.exports = Radium(NWAireContainer);