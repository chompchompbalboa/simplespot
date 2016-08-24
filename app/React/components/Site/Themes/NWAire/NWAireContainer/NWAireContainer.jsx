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

var NWAireContainerItem = require('../NWAireContainerItem/NWAireContainerItem.jsx');
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
            items: {
                "/": {
                    1: {
                        Item: {
                            marginWidth: {
                                sm: "90%",
                                md: "90%",
                                lg: "95%"
                            },
                            width: {
                                sm: "100vw",
                                md: "100vw",
                                lg: "100vw"
                            }
                        },
                        CoverImage: {
                            image: "uploads/57b35f928bcb76f5d65e79fa/seattle.jpg",
                            height: {
                                sm: "60vh",
                                md: "60vh",
                                lg: "85vh"
                            },
                            text: {
                                1: "Northwest",
                                2: "Aire",
                                3: "Services"
                            }
                        },
                        ImageFeed: {
                            images: {
                            }
                        },
                        Section: {
                            dot: {
                                text: "A"
                            },
                            text: "About Us"
                        },
                        Header: {
                            text: "Superior HVAC Service"
                        },
                        Text: {
                            text: {
                                1: "Founded in 2003, Northwest Aire Services, Inc. prides itself on providing superior HVAC expertise to the Pacific Northwest.",
                                2: "Our goal is to ensure the continued satisfaction of our customers, while providing the most rewarding environment for our employees.",
                                3: "We offer a wide variety of commercial services, including but not limited to: air conditioning, heating, refrigeration, clean rooms, computer/server rooms, controls, service, maintenance, and installation.", 
                            }
                        }
                    },
                    2: {
                        Item: {
                            marginWidth: {
                                sm: "90%",
                                md: "90%",
                                lg: "90%"
                            },
                            width: {
                                sm: "100vw",
                                md: "100vw",
                                lg: "50vw"
                            }
                        },
                        CoverImage: {
                            image: "uploads/57b35f928bcb76f5d65e79fa/seattle.jpg",
                            height: {
                                sm: "60vh",
                                md: "60vh",
                                lg: "60vh"
                            },
                            text: {
                                1: "Northwest",
                                2: "Aire",
                                3: "Services"
                            }
                        },
                        ImageFeed: {
                            images: {
                            }
                        },
                        Section: {
                            dot: {
                                text: "A"
                            },
                            text: "About Us"
                        },
                        Header: {
                            text: "Superior HVAC Service"
                        },
                        Text: {
                            text: {
                                1: "Founded in 2003, Northwest Aire Services, Inc. prides itself on providing superior HVAC expertise to the Pacific Northwest.",
                                2: "Our goal is to ensure the continued satisfaction of our customers, while providing the most rewarding environment for our employees.",
                                3: "We offer a wide variety of commercial services, including but not limited to: air conditioning, heating, refrigeration, clean rooms, computer/server rooms, controls, service, maintenance, and installation.", 
                            }
                        }
                    },
                    3: {
                        Item: {
                            marginWidth: {
                                sm: "90%",
                                md: "90%",
                                lg: "90%"
                            },
                            width: {
                                sm: "100vw",
                                md: "100vw",
                                lg: "50vw"
                            }
                        },
                        CoverImage: {
                            image: "uploads/57b35f928bcb76f5d65e79fa/seattle.jpg",
                            height: {
                                sm: "40vh",
                                md: "40vh",
                                lg: "40vh"
                            },
                            text: {
                                1: "Northwest",
                                2: "Aire",
                                3: "Services"
                            }
                        },
                        ImageFeed: {
                            images: {
                            }
                        },
                        Section: {
                            dot: {
                                text: "A"
                            },
                            text: "About Us"
                        },
                        Header: {
                            text: "Superior HVAC Service"
                        },
                        Text: {
                            text: {
                                1: "Founded in 2003, Northwest Aire Services, Inc. prides itself on providing superior HVAC expertise to the Pacific Northwest.",
                                //2: "Our goal is to ensure the continued satisfaction of our customers, while providing the most rewarding environment for our employees.",
                                //3: "We offer a wide variety of commercial services, including but not limited to: air conditioning, heating, refrigeration, clean rooms, computer/server rooms, controls, service, maintenance, and installation.", 
                            }
                        }
                    },
                    4: {
                        Item: {
                            marginWidth: {
                                sm: "90%",
                                md: "90%",
                                lg: "90%"
                            },
                            width: {
                                sm: "100vw",
                                md: "100vw",
                                lg: "50vw"
                            }
                        },
                        CoverImage: {
                            image: "uploads/57b35f928bcb76f5d65e79fa/seattle.jpg",
                            height: {
                                sm: "40vh",
                                md: "40vh",
                                lg: "40vh"
                            },
                            text: {
                                1: "Northwest",
                                2: "Aire",
                                3: "Services"
                            }
                        },
                        ImageFeed: {
                            images: {
                            }
                        },
                        Section: {
                            dot: {
                                text: "A"
                            },
                            text: "About Us"
                        },
                        Header: {
                            text: "Superior HVAC Service"
                        },
                        Text: {
                            text: {
                                1: "Founded in 2003, Northwest Aire Services, Inc. prides itself on providing superior HVAC expertise to the Pacific Northwest.",
                                2: "Our goal is to ensure the continued satisfaction of our customers, while providing the most rewarding environment for our employees.",
                                3: "We offer a wide variety of commercial services, including but not limited to: air conditioning, heating, refrigeration, clean rooms, computer/server rooms, controls, service, maintenance, and installation.", 
                            }
                        }
                    },
                    5: {
                        Item: {
                            marginWidth: {
                                sm: "90%",
                                md: "90%",
                                lg: "90%"
                            },
                            width: {
                                sm: "100vw",
                                md: "100vw",
                                lg: "50vw"
                            }
                        },
                        CoverImage: {
                            image: "uploads/57b35f928bcb76f5d65e79fa/seattle.jpg",
                            height: {
                                sm: "40vh",
                                md: "40vh",
                                lg: "40vh"
                            },
                            text: {
                                1: "Northwest",
                                2: "Aire",
                                3: "Services"
                            }
                        },
                        ImageFeed: {
                            images: {
                            }
                        },
                        Section: {
                            dot: {
                                text: "A"
                            },
                            text: "About Us"
                        },
                        Header: {
                            text: "Superior HVAC Service"
                        },
                        Text: {
                            text: {
                                1: "Founded in 2003, Northwest Aire Services, Inc. prides itself on providing superior HVAC expertise to the Pacific Northwest.",
                                2: "Our goal is to ensure the continued satisfaction of our customers, while providing the most rewarding environment for our employees.",
                                3: "We offer a wide variety of commercial services, including but not limited to: air conditioning, heating, refrigeration, clean rooms, computer/server rooms, controls, service, maintenance, and installation.", 
                            }
                        }
                    }
                }
            }
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
                zIndex: "-1",
                position: "absolute",
                top: "10vh",
                left: "0vw",
                width: "100vw",
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "flex-start",
                alignItems: "flex-start"
            }
        }
    },

    /**
    * Settings for: __items
    *
    * @function __items
    * @return {object}
    */
    __items: function(items) {
        let payload = [];
        let column = "left";
        let currentLeft = 0;
        let currentRight = 0;
        let adjustment = 0;
        for (let i in items) {
            let marginTop = 0;
            if(items[i].Item.width.lg !== "100vw") {
                let imageHeight = Number((items[i].CoverImage.height.lg).replace("vh", ""));
                if (column === "left") {
                    marginTop = (currentLeft - currentRight <= 0 ? currentLeft - currentRight : 0);
                    currentLeft = currentLeft + imageHeight;
                    adjustment = imageHeight;
                }
                else {
                    marginTop = (currentRight - (currentLeft - adjustment) <= 0 ? currentRight - (currentLeft - adjustment) : 0);
                    currentRight = currentRight + imageHeight;
                }
                column = (column === "left" ? "right" : "left");
            }
            else {
                currentLeft = 0;
                currentRight = 0;
                adjustment = 0;
            }
            items[i].Item.marginTop = marginTop + "vh";
            payload.push(
                <NWAireContainerItem
                    key={i}
                    item={items[i]}
                />
            )
        }
        return payload;
    },

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render: function() {
        var {items, site, ...other} = this.props;
        let _section = this._section();
        let __items = this.__items(items[site.display.path]);
        return (
            <section className="section" style={_section.style}>
                {__items}
            </section>
        )
    }    
});
module.exports = Radium(NWAireContainer);