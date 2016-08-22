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
                        CoverImage: {
                            image: "uploads/57b35f928bcb76f5d65e79fa/seattle.jpg",
                            height: "60vh",
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
                        ShortText: {
                            text: "Founded in 2003, Northwest Aire Services, Inc. prides itself on providing superior HVAC expertise to the Pacific Northwest."
                        },
                        FullText: {
                            text: {
                                1: "Our goal is to ensure the continued satisfaction of our customers, while providing the most rewarding environment for our employees.",
                                2: "We offer a wide variety of commercial services, including but not limited to: air conditioning, heating, refrigeration, clean rooms, computer/server rooms, controls, service, maintenance, and installation.",
                                //3: "Northwest Aire Services, Inc. is a full service commercial contractor and is equipped to competitively bid any job; from retro-fit to new construction, small light commercial buildings to large multi-million dollar projects.",
                                //4: "Since opening our doors, we have grown by adding a fully functional sheet-metal fabrication shop to our services. We use only the most advanced tools and equipment available, coupled with trained, certified, and experienced technicians enabling us to ensure highly effective and efficient customer service.",
                                //5: "From the most complex installations to routine service and maintenance, Northwest Aire Services, Inc. has the resources and motivation to provide an industry-leading solution. It is our hope to build lifelong relationships with our customers - relationships that will lead to an enduring and mutual satisfaction."
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
                alignItems: "center"
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
        for (let i in items) {
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