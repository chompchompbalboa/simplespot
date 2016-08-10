/**
* PersonalHire.jsx
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
* @module PersonalHire
*/
var PersonalHire = React.createClass({

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
                                module: "BasicText",
                                props: {
                                    text: "Ready to get started?"
                                }
                            },
                            2: {
                                module: "BasicContainer",
                                props: {
                                    contents: {
                                        1: {
                                            module: "BasicContainer",
                                            props: {
                                                contents: {
                                                    1: {
                                                        module: "BasicContainer",
                                                        props: {
                                                            contents: {
                                                                1: {
                                                                    module: "BasicText",
                                                                    props: {
                                                                        text: "Name",
                                                                        style: {
                                                                            textTransform: "uppercase"
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            style: {
                                                                width: "20vw",
                                                                height: "4vh",
                                                                display: "flex",
                                                                justifyContent: "center",
                                                                alignItems: "center",
                                                                borderTop: "1px solid black",
                                                                borderRight: "0.5px solid black",
                                                                borderBottom: "1px solid black",
                                                                borderLeft: "1px solid black",
                                                                "@media (min-width: 64em)": {
                                                                    width: "10vw"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    2: {
                                                        module: "BasicContainer",
                                                        props: {
                                                            contents: {
                                                                1: {
                                                                    module: "BasicInput",
                                                                    props: {
                                                                        style: {
                                                                            width: "95%",
                                                                            height: "95%",
                                                                            backgroundColor: "transparent",
                                                                            border: "none",
                                                                            fontSize: "1.75vh",
                                                                            fontWeight: "300",
                                                                            letterSpacing: "1.5px"
                                                                        },
                                                                        value: ""
                                                                    }
                                                                }
                                                            },
                                                            style: {
                                                                width: "70vw",
                                                                height: "4vh",
                                                                display: "flex",
                                                                justifyContent: "center",
                                                                alignItems: "center",
                                                                borderTop: "1px solid black",
                                                                borderRight: "1px solid black",
                                                                borderBottom: "1px solid black",
                                                                borderLeft: "0.5px solid black",
                                                                "@media (min-width: 64em)": {
                                                                    width: "50vw"
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                style: {
                                                    margin: "2vh 0 0 0",
                                                    width: "90vw",
                                                    display: "flex",
                                                    justifyContent: "flex-start",
                                                    alignItems: "flex-end",
                                                    fontSize: "1.75vh",
                                                    letterSpacing: "1.5px",
                                                    "@media (min-width: 64em)": {
                                                        width: "40vw"
                                                    }
                                                }
                                            }
                                        },
                                        2: {
                                            module: "BasicContainer",
                                            props: {
                                                contents: {
                                                    1: {
                                                        module: "BasicContainer",
                                                        props: {
                                                            contents: {
                                                                1: {
                                                                    module: "BasicText",
                                                                    props: {
                                                                        text: "Email",
                                                                        style: {
                                                                            textTransform: "uppercase"
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            style: {
                                                                width: "20vw",
                                                                height: "4vh",
                                                                display: "flex",
                                                                justifyContent: "center",
                                                                alignItems: "center",
                                                                borderTop: "1px solid black",
                                                                borderRight: "0.5px solid black",
                                                                borderBottom: "1px solid black",
                                                                borderLeft: "1px solid black",
                                                                "@media (min-width: 64em)": {
                                                                    width: "10vw"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    2: {
                                                        module: "BasicContainer",
                                                        props: {
                                                            contents: {
                                                                1: {
                                                                    module: "BasicInput",
                                                                    props: {
                                                                        style: {
                                                                            width: "95%",
                                                                            height: "95%",
                                                                            backgroundColor: "transparent",
                                                                            border: "none",
                                                                            fontSize: "1.75vh",
                                                                            fontWeight: "300",
                                                                            letterSpacing: "1.5px"
                                                                        },
                                                                        value: ""
                                                                    }
                                                                }
                                                            },
                                                            style: {
                                                                width: "70vw",
                                                                height: "4vh",
                                                                display: "flex",
                                                                justifyContent: "center",
                                                                alignItems: "center",
                                                                borderTop: "1px solid black",
                                                                borderRight: "1px solid black",
                                                                borderBottom: "1px solid black",
                                                                borderLeft: "0.5px solid black",
                                                                "@media (min-width: 64em)": {
                                                                    width: "50vw"
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                style: {
                                                    margin: "2vh 0 0 0",
                                                    width: "90vw",
                                                    display: "flex",
                                                    justifyContent: "flex-start",
                                                    alignItems: "flex-end",
                                                    fontSize: "1.75vh",
                                                    letterSpacing: "1.5px",
                                                    "@media (min-width: 64em)": {
                                                        width: "40vw"
                                                    }
                                                }
                                            }
                                        },
                                        3: {
                                            module: "BasicContainer",
                                            props: {
                                                contents: {
                                                    1: {
                                                        module: "BasicButton",
                                                        props: {
                                                            text: "Send",
                                                            style: {
                                                                width: "25vw",
                                                                height: "4.5vh",
                                                                color: "rgba(245,245,245,1)",
                                                                border: "none",
                                                                backgroundColor: "rgb(65, 55, 105)",
                                                                fontSize: "1.75vh",
                                                                fontWeight: "200",
                                                                letterSpacing: "2px",
                                                                textTransform: "uppercase",
                                                                ":hover": {
                                                                    cursor: "pointer",
                                                                    backgroundColor: "black"
                                                                },
                                                                ":active": {
                                                                    backgroundColor: "black"
                                                                },
                                                                "@media (min-width: 64em)": {
                                                                    width: "40vw"
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                style: {
                                                    margin: "2vh 0 0 0",
                                                    width: "90vw",
                                                    display: "flex",
                                                    justifyContent: "flex-end",
                                                    alignItems: "flex-end",
                                                    fontSize: "1.75vh",
                                                    letterSpacing: "1.5px",
                                                    "@media (min-width: 64em)": {
                                                        width: "40vw",
                                                        justifyContent: "flex-start"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    style: {
                                        width: "90vw",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "flex-start",
                                        alignItems: "flex-start",
                                        "@media (min-width: 64em)": {
                                            margin: "0 0 0 10vw",
                                            width: "40vw"
                                        }
                                    }
                                }
                            }
                        },
                        style: {
                            margin: "3vh 0 3vh 0",
                            width: "90vw",
                            height: "calc(30vh - 10vw)",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            "@media (min-width: 64em)": {
                                margin: "6vh 0 7vh 0",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center"
                            }
                        }
                    }
                }
            },
            style: {
                margin: "1vh 0 0 0",
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(245,245,245,1)",
                fontFamily: "titilliumlight",
                fontSize: "2.75vh",
                letterSpacing: "1.5px",
                "@media (min-width: 64em)": {
                    fontSize: "4vh"
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
        var {contents, keychain, style, utils, ...other} = this.props;
        let builtContainer = utils.loader.loadModules(keychain, contents, utils);
        return (
            <section style={style}>
                {builtContainer}
            </section>
        )
    }    
});
module.exports = Radium(PersonalHire);