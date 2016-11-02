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
            site: {}
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
                // Add the necessary height if an image feed is present
                if (Number(i) > 3) {
                    if (Object.keys(items[String(Number(i) - 2)].ImageFeed.images).length > 0) {
                        marginTop = marginTop + 12;
                        if(column === "left") {
                            currentLeft = currentLeft + 12;
                        }
                        else {
                            currentRight = currentRight + 12;
                        }
                    }
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
                    id={i}
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
        var {site, ...other} = this.props;
        let _section = this._section();
        let __items = this.__items(site.items);
        return (
            <section className="section" style={_section.style}>
                {__items}
            </section>
        )
    }    
});
module.exports = Radium(NWAireContainer);