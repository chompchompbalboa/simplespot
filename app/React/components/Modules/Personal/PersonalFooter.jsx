/**
* PersonalFooter.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

/**
* This module renders a flexbox container with a list of services offered as
* the children. Each of the services has an image, a header, and short
* description.
*
* @module PersonalFooter
*/
var PersonalFooter = React.createClass({

    /**
    * Validate props types
    *
    * @prop propTypes
    * @return {object}
    */
    propTypes: {
        keychain: React.PropTypes.string.isRequired,
        contents: React.PropTypes.object.isRequired,
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
                    module: "BasicContainer",
                    props: {
                        contents: {
                            1: {
                                module: "BasicImage",
                                props: {
                                    style: {
                                        width: "3.5vh",
                                        height: "3.5vh",
                                        backgroundPosition: "center center",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                        backgroundImage: "url(uploads/5776dd982cb85ae0b1b350e7/logo_white.png)"                                       
                                    }
                                }
                            },
                            2: {
                                module: "BasicText",
                                props: {
                                    style: {
                                        color: "white"
                                    },
                                    text: "Copyright 2016, Rocky Eastman. All rights reserved."
                                }
                            }
                        },
                        style: {
                            width: "90vw",
                            height: "5vh",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }
                    }
                }    
            },
            style: {
                width: "100vw",
                height: "7vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "black",
                fontFamily: "titilliumlight",
                fontSize: "1.5vh",
                letterSpacing: "1.5px"
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
        var {contents, keychain, style, utils, ...other} = this.props;
        let builtContainer = utils.loader.loadModules(keychain, contents, utils);
        return (
            <section style={style}>
                {builtContainer}
            </section>
        )
    }    
});
module.exports = Radium(PersonalFooter);