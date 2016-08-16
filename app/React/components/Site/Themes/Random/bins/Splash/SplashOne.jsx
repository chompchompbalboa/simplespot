/**
* SplashOne.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

/**
* Let's throw a party
*
* @module SplashOne
*/
var SplashOne = React.createClass({

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
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: this.props.random.font(),
                fontSize: this.props.random.integer(40, 64) + "px",
                fontWeight: this.props.random.fontWeight(),
                textTransform: this.props.random.fromArray(["", "uppercase"]),
                letterSpacing: this.props.random.integer(1,15) + "px",
                color: "white",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundImage: this.props.random.backgroundImageWithOverlay()
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
                Restaurant
            </section>
        )
    }    
});
module.exports = Radium(SplashOne);