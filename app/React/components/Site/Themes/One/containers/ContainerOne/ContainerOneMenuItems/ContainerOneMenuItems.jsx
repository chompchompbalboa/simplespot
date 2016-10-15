/**
* OneContainerMenuItems.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const ContainerOneMenuItemsItem = require('../ContainerOneMenuItemsItem/ContainerOneMenuItemsItem.jsx');

/**
* OneContainerMenuItems
*
* @module OneContainerMenuItems
*/
class OneContainerMenuItems extends React.Component {

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
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
    }

    /**
    * Settings for: _div
    *
    * @function _div
    * @return {object}
    */
    _div() {
        return {
            style: {
                margin: "0 0 2.5vh 0",
                width: "90%",
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "flex-start",
                alignItems: "center",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    width: "95%"
                },
                "@media (min-width: 64em)": {
                    margin: "2.75vh 0 2.75vh 0",
                    width: "95%"
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
            payload.push(
                <ContainerOneMenuItemsItem
                    key={i}
                    item={items[i]}
                />
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
        let _div = this._div();
        let __items = this.__items(items);
        return (
            <div className="div" style={_div.style}>
                {__items}
            </div>
        )
    }    
}
// Export
module.exports = Radium(OneContainerMenuItems);