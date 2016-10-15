/**
* ContainerOne.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const ContainerOneColor = require('./ContainerOneColor/ContainerOneColor.jsx');
const ContainerOneImage = require('./ContainerOneImage/ContainerOneImage.jsx');
const ContainerOneHours = require('./ContainerOneHours/ContainerOneHours.jsx');
const ContainerOneLink = require('./ContainerOneLink/ContainerOneLink.jsx');
const ContainerOneMapStatic = require('./ContainerOneMapStatic/ContainerOneMapStatic.jsx');
const ContainerOneMenu = require('./ContainerOneMenu/ContainerOneMenu.jsx');
const ContainerOneSocial = require('./ContainerOneSocial/ContainerOneSocial.jsx');
const ContainerOneText = require('./ContainerOneText/ContainerOneText.jsx');

/**
* ContainerOne
*
* @module ContainerOne
*/
class ContainerOne extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
        this.state = {};
    }

    /**
    * Validate the prop types
    *
    * @prop propTypes
    */
    static propTypes = {
        items: React.PropTypes.object.isRequired
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        items: {}
    }

    /**
    * Calculate the margin tops for each container item
    *
    * @function marginTops
    * @return {object}
    */
    marginTops(items) {
        let marginTops = {
            "0em": {},
            "48em": {},
            "64em": {}
        };
        for (let breakpoint in marginTops) {
            let currentLeft = 0;
            let currentRight = 0;
            let adjustment = 0;
            let column = "left";
            for (let i in items) {
                let marginTop = 0;
                let item = items[i];
                if (Number(item.props.width[breakpoint]) !== 100) {
                    let imageHeight = Number(item.props.height[breakpoint]);
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
                    column = "left";
                }
                marginTops[breakpoint][i] = marginTop + "vh";
            }   
        }
        return marginTops;
    }

    /**
    * Settings for: _div
    *
    * @function _div
    * @return {object}
    */
    _div(div) {
        return {
            style: {
                position: "relative",
                top: "0vh",
                left: "0vw",
                width: "100vw",
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
            }
        }
    }

    /**
    * Settings for: __items
    *
    * @function __items
    * @return {object}
    */
    __items(items, marginTops) {
        let payload = [];
        for (let i in items) {
            let module = eval(items[i].module);
            let props = jQuery.extend(true, {}, items[i].props);
            props.key = i;
            props.item = i;
            props.marginTops = marginTops;
            props.handleNewPageLoad = this.props.handleNewPageLoad;
            payload.push(
                React.createElement(
                    module,
                    props,
                )
            );
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
        var {items, ...other} = this.props;
        let marginTops = this.marginTops(items);
        let _div = this._div();
        let __items = this.__items(items, marginTops);
        return (
            <div className="div" style={_div.style}>
                {__items}
            </div>
        )
    }    
}
// Export
module.exports = Radium(ContainerOne);