/**
* OneCanvas.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

var OneCanvasImage = require('./OneCanvasImage.jsx');
/**
* This module renders the the welcome message the app editor
*
* @module OneCanvas
*/
var OneCanvas = React.createClass({

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
            tiles: {
                1: {
                    module: "OneCanvasImage",
                    props: {
                        backgroundColor: "red",
                        height: 60
                    }
                },
                2: {
                    module: "OneCanvasImage",
                    props: {
                        backgroundColor: "orange",
                        height: 80
                    }
                },
                3: {
                    module: "OneCanvasImage",
                    props: {
                        backgroundColor: "yellow",
                        height: 35
                    }
                },
                4: {
                    module: "OneCanvasImage",
                    props: {
                        backgroundColor: "green",
                        height: 20
                    }
                },
                5: {
                    module: "OneCanvasImage",
                    props: {
                        backgroundColor: "blue",
                        height: 50
                    }
                },
                6: {
                    module: "OneCanvasImage",
                    props: {
                        backgroundColor: "purple",
                        height: 30
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
                width: "100vw",
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "flex-start",
                alignItems: "flex-start"
            }
        }
    },

    /**
    * Settings for: __tiles
    *
    * @function __tiles
    * @return {object}
    */
    __tiles: function(tiles) {
        let payload = [];
        let marginTops = this.__tiles_marginTops(tiles);
        for (let index in tiles) {
            let tile = tiles[index];
            let element = eval(tile.module);
            let props = {
                key: index,
                backgroundColor: tile.props.backgroundColor,
                height: tile.props.height,
                marginTop: marginTops[index]
            };
            // Add functionality for injecting additional props
            let children;
            payload.push(
                React.createElement(
                    element,
                    props,
                    children
                )
            );
        }
        return payload;
    },

    /**
    * Settings for: __tiles_marginTops
    *
    * @function __tiles_marginTops
    * @return {object}
    */
    __tiles_marginTops: function(tiles) {
        let payload = {};
        let isOdd = function(n) {
           return Math.abs(n % 2) == 1;
        };
        let currentLeft = 0;
        let currentRight = 0;
        let adjustment = 0;
        for (let index in tiles) {
            let tile = tiles[index];
            let height = tile.props.height;
            let marginTop = 0;
            if (isOdd(index)) {
                marginTop = (currentLeft - currentRight <= 0 ? currentLeft - currentRight : 0);
                currentLeft = currentLeft + height;
                adjustment = height;
            }
            else {
                marginTop = (currentRight - (currentLeft - adjustment) <= 0 ? currentRight - (currentLeft - adjustment) : 0);
                currentRight = currentRight + height;
            }
            let style = {
                width: "100vw",
                height: height + "vh",
                backgroundColor: "rgba(150,150,150,1)",
                "@media (min-width: 48em)": {
                    marginTop: marginTop + "vh",
                    width: "50vw"
                }
            }
            payload[index] = marginTop;
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
        var {tiles, ...other} = this.props;
        let _section = this._section();
        let __tiles = this.__tiles(tiles);
        return (
            <section className="section" style={_section.style}>
                {__tiles}
            </section>
        )
    }    
});
module.exports = Radium(OneCanvas);