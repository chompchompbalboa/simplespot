/**
* NextHomePortfolio.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const NextHomePortfolioContainer = require('../NextHomePortfolioContainer/NextHomePortfolioContainer.jsx');

/**
* NextHomePortfolio
*
* @module NextHomePortfolio
*/
class NextHomePortfolio extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
    }

    /**
    * Validate the prop types
    *
    * @prop propTypes
    */
    static propTypes = {
        section: React.PropTypes.object.isRequired,
        section: React.PropTypes.object.isRequired
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        containers: {
            1: {
                label: "Our Work",
                items: {
                    1: {
                        backgroundText: "N",
                        backgroundImage: "/uploads/5776dd982cb85ae0b1b350e7/projects/one/placeholder.jpg",
                        href: "/work/nw-aire-services",
                        largeText: "nwaireservices.com",
                        smallText: "NW Aire"
                    },
                    2: {
                        backgroundText: "M",
                        backgroundImage: "/uploads/5776dd982cb85ae0b1b350e7/projects/two/placeholder.jpg",
                        href: "/work/molly-hiatt",
                        largeText: "mollyhiatt.com",
                        smallText: "Molly K. Hiatt"
                    },
                    3: {
                        backgroundText: "N",
                        backgroundImage: "/uploads/5776dd982cb85ae0b1b350e7/projects/one/placeholder.jpg",
                        href: "/work/nw-aire-services",
                        largeText: "nwaireservices.com",
                        smallText: "NW Aire"
                    },
                    4: {
                        backgroundText: "M",
                        backgroundImage: "/uploads/5776dd982cb85ae0b1b350e7/projects/two/placeholder.jpg",
                        href: "/work/molly-hiatt",
                        largeText: "mollyhiatt.com",
                        smallText: "Molly K. Hiatt"
                    },
                    5: {
                        backgroundText: "N",
                        backgroundImage: "/uploads/5776dd982cb85ae0b1b350e7/projects/one/placeholder.jpg",
                        href: "/work/nw-aire-services",
                        largeText: "nwaireservices.com",
                        smallText: "NW Aire"
                    },
                    6: {
                        backgroundText: "M",
                        backgroundImage: "/uploads/5776dd982cb85ae0b1b350e7/projects/two/placeholder.jpg",
                        href: "/work/molly-hiatt",
                        largeText: "mollyhiatt.com",
                        smallText: "Molly K. Hiatt"
                    }
                }
            }
        },
        section: {}
    }

    /**
    * Settings for: _section
    *
    * @function _section
    * @return {object}
    */
    _section(section) {
        return {
            style: {
                position: "relative",
                top: "10vh",
                left: "0vw",
                width: "100vw",
                "@media (min-width: 40em) and (max-width: 64em)": {
                    top: "14vh"
                },
                "@media (min-width: 56em)": {
                    margin: "0 0 10vh 0",
                    top: (this.props.dockHeader ? "22vh" : "8vh")
                }
            }
        }
    }

    /**
    * Settings for: __containers
    *
    * @function __containers
    * @return {object}
    */
    __containers(containers) {
        let payload = [];
        for (let i in containers) {
            let container = containers[i];
            payload.push(
                <NextHomePortfolioContainer key={i} container={container} />
            )
        }
        return payload;
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        var {containers, section, ...other} = this.props;
        let _section = this._section(section);
        let __containers = this.__containers(containers);
        return (
            <section className="section" style={_section.style}>
                {__containers}
            </section>
        )
    }    
}
// Export
module.exports = Radium(NextHomePortfolio);