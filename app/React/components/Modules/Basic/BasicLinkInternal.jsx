/**
* BasicLinkInternal.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

/**
* This module renders an anchor tag with an appropriate href and click handler.
* By default, it links to the home page of a site and displays a text child.
* However, it is set up to handle any internal link and any number of children.
*
* @module BasicLinkInternal
*/
var BasicLinkInternal = React.createClass({

    /**
    * Validate props types
    *
    * @prop propTypes
    * @return {object}
    */
    propTypes: {
        contents: React.PropTypes.object.isRequired,
        displayChanges: React.PropTypes.array.isRequired,
        href: React.PropTypes.string.isRequired,
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
            contents: {
                1: {
                    module: "BasicText",
                    props: {
                        text: "BasicLinkInternal"
                    }
                }
            },
            displayChanges: [
                {key: "site", value: "/"}
            ],
            href: "/",
            style: {
                textDecoration: "none",
                color: "black",
                ":hover": {
                    color: "gray"
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
        var {contents, href, keychain, source, style, utils, ...other} = this.props;
        let children = utils.loader.loadModules(keychain, contents, utils);
        return (
            <a href={href} style={style} onClick={(e) => utils.displayHandler.internalLinkClick(e, href, source)}>
                {children}
            </a>
        )
    }    
});
module.exports = Radium(BasicLinkInternal);