/**
* BasicImage.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

/**
* This module renders a div with a background image set in the style.
* This is the default over an img tag because of the ease of setting it
* responsively.
*
* @module BasicImage
*/
var BasicImage = React.createClass({

    /**
    * Validate props types
    *
    * @prop propTypes
    * @return {object}
    */
    propTypes: {
        keychain: React.PropTypes.string.isRequired,
        style: React.PropTypes.object.isRequired,
        utils: React.PropTypes.object.isRequired
    },

    /**
    * Get the default props
    *
    * @function getDefaultProps
    * @return {object}
    */
    getDefaultProps: function() {
        return {
            style: {
                width: "10vh",
                height: "10vh",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: "url(assets/Modules/BasicImage/sm.jpg)",
                "@media (min-size: 48em) and (max-size: 64em)": {
                    backgroundImage: "url(assets/Modules/BasicImage/md.jpg)"
                },
                "@media (min-size: 64em)": {
                    backgroundImage: "url(assets/Modules/BasicImage/lg.jpg)"
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
        var {keychain, style, utils, ...other} = this.props;
        return (
            <div style={style}></div>
        )
    }    
});
module.exports = Radium(BasicImage);