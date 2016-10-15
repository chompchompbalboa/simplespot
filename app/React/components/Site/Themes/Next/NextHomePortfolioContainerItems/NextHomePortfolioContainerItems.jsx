/**
* NextHomePortfolioContainerItems.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const NextHomePortfolioContainerItem = require('../NextHomePortfolioContainerItem/NextHomePortfolioContainerItem.jsx');

/**
* NextHomePortfolioContainerItems
*
* @module NextHomePortfolioContainerItems
*/
class NextHomePortfolioContainerItems extends React.Component {

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
        div: React.PropTypes.object.isRequired,
        items: React.PropTypes.object.isRequired
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        div: {},
        items: {}
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
                width: "100%",
                display: "flex",
                flexFlow: "column nowrap",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                "@media (min-width: 56em)": {
                    flexFlow: "row wrap"
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
    __items(items) {
        let payload = [];
        for (let i in items) {
            let item = items[i];
            item.odd = i % 2;
            payload.push(
                <NextHomePortfolioContainerItem key={i} item={item} />
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
        var {div, items, ...other} = this.props;
        let _div = this._div(div);
        let __items = this.__items(items);
        return (
            <div className="div" style={_div.style}>
                {__items}
            </div>
        )
    }    
}
// Export
module.exports = Radium(NextHomePortfolioContainerItems);