/**
* PersonalPrinciples.jsx
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
* @module PersonalPrinciples
*/
var PersonalPrinciples = React.createClass({

    /**
    * Validate props types
    *
    * @prop propTypes
    * @return {object}
    */
    propTypes: {
        contents: React.PropTypes.object.isRequired,
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
                    module: "BasicContainer",
                    props: {
                        contents: {
                            1: {
                                module: "BasicText",
                                props: {
                                    text: "Principles",
                                    style: {
                                        color: "rgba(180,180,180,1)",
                                        textTransform: "uppercase",
                                        "@media (min-width: 64em)": {
                                            margin: "0 0 0 2.5vw",
                                            fontSize: "2.5vh"
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
                                                        module: "BasicContainer",
                                                        props: {
                                                            contents: {
                                                                1: {
                                                                    module: "BasicText",
                                                                    props: {
                                                                        text: "1",
                                                                        style: {
                                                                            fontWeight: "bold",
                                                                            color: "rgb(137, 105, 148)"
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            style: {
                                                                fontSize: "2.5vh"
                                                            }
                                                        }
                                                    },
                                                    2: {
                                                        module: "BasicContainer",
                                                        props: {
                                                            contents: {
                                                                1: {
                                                                    module: "BasicText",
                                                                    props: {
                                                                        text: "Insert Title Here",
                                                                        style: {
                                                                            margin: "0 0 1vh 0",
                                                                            fontSize: "2.25vh",
                                                                            whiteSpace: "nowrap",
                                                                            "@media (min-width: 64em)": {
                                                                                fontSize: "2.5vh"
                                                                            }
                                                                        }
                                                                    }
                                                                },
                                                                2: {
                                                                    module: "BasicText",
                                                                    props: {
                                                                        text: "Here's some text that needs to be good and awesome and explain something cool. Maybe it will, maybe it won't. Just add the copy later.",
                                                                        style: {
                                                                            color: "rgba(150,150,150,1)"
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            style: {
                                                                margin: "0 0 0 2vw",
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                justifyContent: "flex-start",
                                                                alignItems: "flex-start"
                                                            }
                                                        }
                                                    }
                                                },
                                                style: {
                                                    margin: "1vh 0 0 0",
                                                    width: "90vw",
                                                    display: "flex",
                                                    justifyContent: "flex-start",
                                                    alignItems: "flex-start",
                                                    "@media (min-width: 48em) and (max-width: 64em)": {
                                                        margin: "2vh 0 0 0"
                                                    },
                                                    "@media (min-width: 64em)": {
                                                        margin: "4vh 2.5vw 0 2.5vw",
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
                                                                        text: "2",
                                                                        style: {
                                                                            fontWeight: "bold",
                                                                            color: "rgb(137, 105, 148)"
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            style: {
                                                                fontSize: "2.5vh"
                                                            }
                                                        }
                                                    },
                                                    2: {
                                                        module: "BasicContainer",
                                                        props: {
                                                            contents: {
                                                                1: {
                                                                    module: "BasicText",
                                                                    props: {
                                                                        text: "Next Thing",
                                                                        style: {
                                                                            margin: "0 0 1vh 0",
                                                                            fontSize: "2.25vh",
                                                                            whiteSpace: "nowrap",
                                                                            "@media (min-width: 64em)": {
                                                                                fontSize: "2.5vh"
                                                                            }
                                                                        }
                                                                    }
                                                                },
                                                                2: {
                                                                    module: "BasicText",
                                                                    props: {
                                                                        text: "Here's some text that needs to be good and awesome and explain something cool. Maybe it will, maybe it won't. Just add the copy later. What happens when it's a bit longer?",
                                                                        style: {
                                                                            color: "rgba(150,150,150,1)"
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            style: {
                                                                margin: "0 0 0 2vw",
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                justifyContent: "flex-start",
                                                                alignItems: "flex-start"
                                                            }
                                                        }
                                                    }
                                                },
                                                style: {
                                                    margin: "1vh 0 0 0",
                                                    width: "90vw",
                                                    display: "flex",
                                                    justifyContent: "flex-start",
                                                    alignItems: "flex-start",
                                                    "@media (min-width: 48em) and (max-width: 64em)": {
                                                        margin: "2vh 0 0 0"
                                                    },
                                                    "@media (min-width: 64em)": {
                                                        margin: "4vh 2.5vw 0 2.5vw",
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
                                                        module: "BasicContainer",
                                                        props: {
                                                            contents: {
                                                                1: {
                                                                    module: "BasicText",
                                                                    props: {
                                                                        text: "3",
                                                                        style: {
                                                                            fontWeight: "bold",
                                                                            color: "rgb(137, 105, 148)"
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            style: {
                                                                fontSize: "2.5vh"
                                                            }
                                                        }
                                                    },
                                                    2: {
                                                        module: "BasicContainer",
                                                        props: {
                                                            contents: {
                                                                1: {
                                                                    module: "BasicText",
                                                                    props: {
                                                                        text: "Insert Title Here",
                                                                        style: {
                                                                            margin: "0 0 1vh 0",
                                                                            fontSize: "2.25vh",
                                                                            whiteSpace: "nowrap",
                                                                            "@media (min-width: 64em)": {
                                                                                fontSize: "2.5vh"
                                                                            }
                                                                        }
                                                                    }
                                                                },
                                                                2: {
                                                                    module: "BasicText",
                                                                    props: {
                                                                        text: "Here's some text that needs to be good and awesome and explain something cool. Maybe it will, maybe it won't. Just add the copy later.",
                                                                        style: {
                                                                            color: "rgba(150,150,150,1)"
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            style: {
                                                                margin: "0 0 0 2vw",
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                justifyContent: "flex-start",
                                                                alignItems: "flex-start"
                                                            }
                                                        }
                                                    }
                                                },
                                                style: {
                                                    margin: "1vh 0 0 0",
                                                    width: "90vw",
                                                    display: "flex",
                                                    justifyContent: "flex-start",
                                                    alignItems: "flex-start",
                                                    "@media (min-width: 48em) and (max-width: 64em)": {
                                                        margin: "2vh 0 0 0"
                                                    },
                                                    "@media (min-width: 64em)": {
                                                        margin: "4vh 2.5vw 0 2.5vw",
                                                        width: "40vw"
                                                    }
                                                }
                                            }
                                        },
                                        4: {
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
                                                                        text: "4",
                                                                        style: {
                                                                            fontWeight: "bold",
                                                                            color: "rgb(137, 105, 148)"
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            style: {
                                                                fontSize: "2.5vh"
                                                            }
                                                        }
                                                    },
                                                    2: {
                                                        module: "BasicContainer",
                                                        props: {
                                                            contents: {
                                                                1: {
                                                                    module: "BasicText",
                                                                    props: {
                                                                        text: "Next Thing",
                                                                        style: {
                                                                            margin: "0 0 1vh 0",
                                                                            fontSize: "2.25vh",
                                                                            whiteSpace: "nowrap",
                                                                            "@media (min-width: 64em)": {
                                                                                fontSize: "2.5vh"
                                                                            }
                                                                        }
                                                                    }
                                                                },
                                                                2: {
                                                                    module: "BasicText",
                                                                    props: {
                                                                        text: "Here's some text that needs to be good and awesome and explain something cool. Maybe it will, maybe it won't. Just add the copy later. What happens when it's a bit longer?",
                                                                        style: {
                                                                            color: "rgba(150,150,150,1)"
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            style: {
                                                                margin: "0 0 0 2vw",
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                justifyContent: "flex-start",
                                                                alignItems: "flex-start"
                                                            }
                                                        }
                                                    }
                                                },
                                                style: {
                                                    margin: "1vh 0 0 0",
                                                    width: "90vw",
                                                    display: "flex",
                                                    justifyContent: "flex-start",
                                                    alignItems: "flex-start",
                                                    "@media (min-width: 48em) and (max-width: 64em)": {
                                                        margin: "2vh 0 0 0"
                                                    },
                                                    "@media (min-width: 64em)": {
                                                        margin: "4vh 2.5vw 0 2.5vw",
                                                        width: "40vw"
                                                    }
                                                }
                                            }
                                        },
                                        5: {
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
                                                                        text: "5",
                                                                        style: {
                                                                            fontWeight: "bold",
                                                                            color: "rgb(137, 105, 148)"
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            style: {
                                                                fontSize: "2.5vh"
                                                            }
                                                        }
                                                    },
                                                    2: {
                                                        module: "BasicContainer",
                                                        props: {
                                                            contents: {
                                                                1: {
                                                                    module: "BasicText",
                                                                    props: {
                                                                        text: "Insert Title Here",
                                                                        style: {
                                                                            margin: "0 0 1vh 0",
                                                                            fontSize: "2.25vh",
                                                                            whiteSpace: "nowrap",
                                                                            "@media (min-width: 64em)": {
                                                                                fontSize: "2.5vh"
                                                                            }
                                                                        }
                                                                    }
                                                                },
                                                                2: {
                                                                    module: "BasicText",
                                                                    props: {
                                                                        text: "Here's some text that needs to be good and awesome and explain something cool. Maybe it will, maybe it won't. Just add the copy later.",
                                                                        style: {
                                                                            color: "rgba(150,150,150,1)"
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            style: {
                                                                margin: "0 0 0 2vw",
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                justifyContent: "flex-start",
                                                                alignItems: "flex-start"
                                                            }
                                                        }
                                                    }
                                                },
                                                style: {
                                                    margin: "1vh 0 0 0",
                                                    width: "90vw",
                                                    display: "flex",
                                                    justifyContent: "flex-start",
                                                    alignItems: "flex-start",
                                                    "@media (min-width: 48em) and (max-width: 64em)": {
                                                        margin: "2vh 0 0 0"
                                                    },
                                                    "@media (min-width: 64em)": {
                                                        margin: "4vh 2.5vw 0 2.5vw",
                                                        width: "40vw"
                                                    }
                                                }
                                            }
                                        },
                                        6: {
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
                                                                        text: "6",
                                                                        style: {
                                                                            fontWeight: "bold",
                                                                            color: "rgb(137, 105, 148)"
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            style: {
                                                                fontSize: "2.5vh"
                                                            }
                                                        }
                                                    },
                                                    2: {
                                                        module: "BasicContainer",
                                                        props: {
                                                            contents: {
                                                                1: {
                                                                    module: "BasicText",
                                                                    props: {
                                                                        text: "Next Thing",
                                                                        style: {
                                                                            margin: "0 0 1vh 0",
                                                                            fontSize: "2.25vh",
                                                                            whiteSpace: "nowrap",
                                                                            "@media (min-width: 64em)": {
                                                                                fontSize: "2.5vh"
                                                                            }
                                                                        }
                                                                    }
                                                                },
                                                                2: {
                                                                    module: "BasicText",
                                                                    props: {
                                                                        text: "Here's some text that needs to be good and awesome and explain something cool. Maybe it will, maybe it won't. Just add the copy later. What happens when it's a bit longer?",
                                                                        style: {
                                                                            color: "rgba(150,150,150,1)"
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            style: {
                                                                margin: "0 0 0 2vw",
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                justifyContent: "flex-start",
                                                                alignItems: "flex-start"
                                                            }
                                                        }
                                                    }
                                                },
                                                style: {
                                                    margin: "1vh 0 0 0",
                                                    width: "90vw",
                                                    display: "flex",
                                                    justifyContent: "flex-start",
                                                    alignItems: "flex-start",
                                                    "@media (min-width: 48em) and (max-width: 64em)": {
                                                        margin: "2vh 0 0 0"
                                                    },
                                                    "@media (min-width: 64em)": {
                                                        margin: "4vh 2.5vw 0 2.5vw",
                                                        width: "40vw"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    style: {
                                        display: "flex",
                                        flexFlow: "column nowrap",
                                        justifyContent: "flex-start",
                                        alignItems: "flex-start",
                                        "@media (min-width:64em)": {
                                            flexFlow: "row wrap"
                                        }
                                    }
                                }
                            }
                        },
                        style: {
                            margin: "3vh 0px 3vh 0",
                            width: "90vw",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start"
                        }
                    }
                }
            },
            style: {
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "titilliumlight",
                fontSize: "1.75vh",
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
module.exports = Radium(PersonalPrinciples);