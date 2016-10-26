/**
* NewHomeMenuSectionItems.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const NewHomeMenuSectionItemsItem = require('../NewHomeMenuSectionItemsItem/NewHomeMenuSectionItemsItem.jsx');

/**
* NewHomeMenuSectionItems
*
* @module NewHomeMenuSectionItems
*/
class NewHomeMenuSectionItems extends React.Component {

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
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
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
    __items(section) {
        let payload = [];
        for (let i in section) {
            let item = section[i];
            if (typeof item.title !== "undefined") {
                payload.push(
                    <NewHomeMenuSectionItemsItem
                        key={i}
                        item={item}
                    />
                )
            }   
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
        var {section, ...other} = this.props;
        let _div = this._div();
        let __items = this.__items(section); 
        return (
            <div className="div" style={_div.style}>
                {__items}
            </div>
        )
    }    
}
// Export
module.exports = Radium(NewHomeMenuSectionItems);