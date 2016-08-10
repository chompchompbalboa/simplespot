/**
* BasicNav.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

/**
* This module renders a nav element.
*
* @module BasicNav
*/
var BasicNav = React.createClass({

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
                    module: "BasicList",
                    props: {
                        items: {
                            1: {
                                module: "BasicListItem",
                                props: {
                                    item: {
                                        1: {
                                            module: "BasicLinkInternal"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                2: {
                    module: "BasicList",
                    props: {
                        items: {
                            1: {
                                module: "BasicListItem",
                                props: {
                                    item: {
                                        1: {
                                            module: "BasicLinkInternal"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                3: {
                    module: "BasicList",
                    props: {
                        items: {
                            1: {
                                module: "BasicListItem",
                                props: {
                                    item: {
                                        1: {
                                            module: "BasicLinkInternal"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            style: {
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
        let children = utils.loader.loadModules(keychain, contents, utils);
        return (
            <nav style={style}>
                {children}
            </nav>
        )
    }    
});
module.exports = Radium(BasicNav);