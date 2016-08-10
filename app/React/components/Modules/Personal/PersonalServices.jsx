/**
* PersonalServices.jsx
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
* @module PersonalServices
*/
var PersonalServices = React.createClass({

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
                                    text: "Service Spectrum",
                                    style: {
                                        color: "rgba(180,180,180,1)",
                                        textTransform: "uppercase",
                                        "@media (min-width: 64em)": {
                                            margin: "0px 0px 0px 2.5vw",
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
                                                        module: "BasicImage",
                                                        props: {
                                                            style: {
                                                                display: "none",
                                                                "@media (min-width: 48em) and (max-width: 64em)": {
                                                                    display: "block",
                                                                    width: "8vh",
                                                                    height: "8vh",
                                                                    backgroundPosition: "center center",
                                                                    backgroundRepeat: "no-repeat",
                                                                    backgroundSize: "cover",
                                                                    backgroundImage: "url(uploads/5776dd982cb85ae0b1b350e7/data.png)"
                                                                },
                                                                "@media (min-width: 64em)": {
                                                                    display: "block",
                                                                    margin: "5vh 0 4vh 0",
                                                                    width: "12vh",
                                                                    height: "12vh",
                                                                    backgroundPosition: "center center",
                                                                    backgroundRepeat: "no-repeat",
                                                                    backgroundSize: "cover",
                                                                    backgroundImage: "url(uploads/5776dd982cb85ae0b1b350e7/data.png)"
                                                                }
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
                                                                        text: "Data Driven Design",
                                                                        style: {
                                                                            margin: "0 0 1vh 0",
                                                                            fontSize: "2.25vh",
                                                                            whiteSpace: "nowrap",
                                                                            "@media (min-width: 64em)": {
                                                                                fontSize: "2vh"
                                                                            }
                                                                        }
                                                                    }
                                                                },
                                                                2: {
                                                                    module: "BasicText",
                                                                    props: {
                                                                        text: "Innovative designs built on the principle that information can help determine the best user experience",
                                                                        style: {
                                                                            color: "rgba(150,150,150,1)"
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            style: {
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                justifyContent: "flex-start",
                                                                alignItems: "flex-start",
                                                                "@media (min-width: 48em) and (max-width: 64em)": {
                                                                    margin: "0px 0px 0px 4vw",
                                                                    height: "10vh",
                                                                    width: "75vw"     
                                                                },
                                                                "@media (min-width: 64em)": {
                                                                    margin: "0",
                                                                    width: "100%",
                                                                    alignItems: "center",
                                                                    textAlign: "center"
                                                                }
                                                            }
                                                        }
                                                    }    
                                                },
                                                style: {
                                                    margin: "2vh 0px 0px 0px",
                                                    height: "10vh",
                                                    width: "100%",
                                                    display: "flex",
                                                    justifyContent: "flex-start",
                                                    alignItems: "center",
                                                    "@media (min-width: 64em)": {
                                                        margin: "0px 2.5vw 0px 2.5vw",
                                                        width: "25vw",
                                                        height: "40vh",
                                                        flexDirection: "column"
                                                    }
                                                }  
                                            }
                                        },
                                        2: {
                                            module: "BasicContainer",
                                            props: {
                                                contents: {
                                                    1: {
                                                        module: "BasicImage",
                                                        props: {
                                                            style: {
                                                                display: "none",
                                                                "@media (min-width: 48em) and (max-width: 64em)": {
                                                                    display: "block",
                                                                    width: "8vh",
                                                                    height: "8vh",
                                                                    backgroundPosition: "center center",
                                                                    backgroundRepeat: "no-repeat",
                                                                    backgroundSize: "cover",
                                                                    backgroundImage: "url(uploads/5776dd982cb85ae0b1b350e7/fullstack.png)"
                                                                },
                                                                "@media (min-width: 64em)": {
                                                                    display: "block",
                                                                    margin: "5vh 0 4vh 0",
                                                                    width: "12vh",
                                                                    height: "12vh",
                                                                    backgroundPosition: "center center",
                                                                    backgroundRepeat: "no-repeat",
                                                                    backgroundSize: "cover",
                                                                    backgroundImage: "url(uploads/5776dd982cb85ae0b1b350e7/fullstack.png)"
                                                                }
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
                                                                        text: "Full Stack Web Development",
                                                                        style: {
                                                                            margin: "0 0 1vh 0",
                                                                            fontSize: "2.25vh",
                                                                            whiteSpace: "nowrap",
                                                                            "@media (min-width: 64em)": {
                                                                                fontSize: "2vh"
                                                                            }
                                                                        }
                                                                    }
                                                                },
                                                                2: {
                                                                    module: "BasicText",
                                                                    props: {
                                                                        text: "Experience in Vagrant, SQL, MongoDB, PHP, Laravel + Forge, CSS, JS, JQuery, ReactJS, Flux, Jest, and Gulp",
                                                                        style: {
                                                                            color: "rgba(150,150,150,1)"
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            style: {
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                justifyContent: "flex-start",
                                                                alignItems: "flex-start",
                                                                "@media (min-width: 48em) and (max-width: 64em)": {
                                                                    margin: "0px 0px 0px 4vw",
                                                                    height: "10vh",
                                                                    width: "75vw"     
                                                                },
                                                                "@media (min-width: 64em)": {
                                                                    margin: "0",
                                                                    width: "100%",
                                                                    alignItems: "center",
                                                                    textAlign: "center"
                                                                }
                                                            }
                                                        }
                                                    }    
                                                },
                                                style: {
                                                    margin: "2vh 0px 0px 0px",
                                                    height: "10vh",
                                                    width: "100%",
                                                    display: "flex",
                                                    justifyContent: "flex-start",
                                                    alignItems: "center",
                                                    "@media (min-width: 64em)": {
                                                        margin: "0px 2.5vw 0px 2.5vw",
                                                        width: "25vw",
                                                        height: "40vh",
                                                        flexDirection: "column"
                                                    }
                                                }  
                                            }
                                        },
                                        3: {
                                            module: "BasicContainer",
                                            props: {
                                                contents: {
                                                    1: {
                                                        module: "BasicImage",
                                                        props: {
                                                            style: {
                                                                display: "none",
                                                                "@media (min-width: 48em) and (max-width: 64em)": {
                                                                    display: "block",
                                                                    width: "8vh",
                                                                    height: "8vh",
                                                                    backgroundPosition: "center center",
                                                                    backgroundRepeat: "no-repeat",
                                                                    backgroundSize: "cover",
                                                                    backgroundImage: "url(uploads/5776dd982cb85ae0b1b350e7/contentmanagement.png)"
                                                                },
                                                                "@media (min-width: 64em)": {
                                                                    display: "block",
                                                                    margin: "5vh 0 4vh 0",
                                                                    width: "12vh",
                                                                    height: "12vh",
                                                                    backgroundPosition: "center center",
                                                                    backgroundRepeat: "no-repeat",
                                                                    backgroundSize: "cover",
                                                                    backgroundImage: "url(uploads/5776dd982cb85ae0b1b350e7/contentmanagement.png)"
                                                                }
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
                                                                        text: "Elegant Content Management",
                                                                        style: {
                                                                            margin: "0 0 1vh 0",
                                                                            fontSize: "2.25vh",
                                                                            whiteSpace: "nowrap",
                                                                            "@media (min-width: 64em)": {
                                                                                fontSize: "2vh"
                                                                            }
                                                                        }
                                                                    }
                                                                },
                                                                2: {
                                                                    module: "BasicText",
                                                                    props: {
                                                                        text: "Every site ships with a content management system that allows you to easily implement changes in both content and design",
                                                                        style: {
                                                                            color: "rgba(150,150,150,1)"
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            style: {
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                justifyContent: "flex-start",
                                                                alignItems: "flex-start",
                                                                "@media (min-width: 48em) and (max-width: 64em)": {
                                                                    margin: "0px 0px 0px 4vw",
                                                                    height: "10vh",
                                                                    width: "75vw"     
                                                                },
                                                                "@media (min-width: 64em)": {
                                                                    margin: "0",
                                                                    width: "100%",
                                                                    alignItems: "center",
                                                                    textAlign: "center"
                                                                }
                                                            }
                                                        }
                                                    }    
                                                },
                                                style: {
                                                    margin: "2vh 0px 0px 0px",
                                                    height: "10vh",
                                                    width: "100%",
                                                    display: "flex",
                                                    justifyContent: "flex-start",
                                                    alignItems: "center",
                                                    "@media (min-width: 64em)": {
                                                        margin: "0px 2.5vw 0px 2.5vw",
                                                        width: "25vw",
                                                        height: "40vh",
                                                        flexDirection: "column"
                                                    }
                                                }  
                                            }
                                        }
                                    },
                                    style: {
                                        "@media (min-width: 64em)": {
                                            height: "50vh",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center"
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
                            alignItems: "flex-start",
                            color: "white"
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
                letterSpacing: "1.5px",
                backgroundColor: "rgba(0,0,0,1)"
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
module.exports = Radium(PersonalServices);