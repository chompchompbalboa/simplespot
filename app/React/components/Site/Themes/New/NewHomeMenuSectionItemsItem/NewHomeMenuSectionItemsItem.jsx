/**
* NewHomeMenuSectionItemsItem.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const isSet = require('../../../../../utils/lib/isSet');

/**
* NewHomeMenuSectionItemsItem
*
* @module NewHomeMenuSectionItemsItem
*/
class NewHomeMenuSectionItemsItem extends React.Component {

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
    * Settings for: description
    *
    * @function description
    * @return {object}
    */
    description(rawDescription) {
        let description = "";
        description = (isSet.is(rawDescription) ? rawDescription.charAt(0).toUpperCase() + rawDescription.slice(1) : "");
        return description;
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
                margin: "0 0 1.5vh 0",
                width: "85vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                fontFamily: "Lato, sans-serif",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    margin: "0 3vw 3vh 0",
                    width: "18vw",
                }
            }
        }
    }

    /**
    * Settings for: _description
    *
    * @function _description
    * @return {object}
    */
    _description(description) {
        return {
            style: {
                margin: "0.75vh 0 0 0",
                fontWeight: "300",
                minHeight: (description === "" ? "1vh" : "3vh"),
                "@media (min-width: 48em) and (max-width: 64em)": {
                    minHeight: (description === "" ? "0.5vh" : "2vh"),
                },
                "@media (min-width: 64em)": {
                    minHeight: (description === "" ? "0vh" : "2vh"),
                }
            },
            text: description
        }
    }

    /**
    * Settings for: _info
    *
    * @function _info
    * @return {object}
    */
    _info() {
        return {
            style: {
                width: "100%",
                minHeight: "3vh",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    minHeight: "2vh",
                },
                "@media (min-width: 64em)": {
                }
            }
        }
    }

    /**
    * Settings for: _price
    *
    * @function _price
    * @return {object}
    */
    _price(rawPrice) {
        let price = "";
        if(isSet.is(rawPrice)) {    
            let count = rawPrice.length;
            if (count > 1) {
                for (let i in rawPrice) {
                    price = price + rawPrice[i];
                    if (i < count - 1) {
                        price = price + " / "
                    }
                }
            }
            else {
                price = rawPrice[0];
            }
        }
        if (price.length > 15) {
            price = ""
        }
        return {
            style: {
                fontWeight: "400",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
            },
            text: price
        }
    }

    /**
    * Settings for: _title
    *
    * @function _title
    * @return {object}
    */
    _title(title) {
        return {
            style: {
                fontWeight: "700",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
            },
            text: (isSet.is(title) ? title : "")
        }
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        var {item, ...other} = this.props;
        let description = this.description(item.description);
        let _div = this._div();
        let _description = this._description(description);
        let _info = this._info();
        let _price = this._price(item.price);
        let _title = this._title(item.title); 
        return (
            <div className="div" style={_div.style}>
                <div className="info" style={_info.style}>
                    <div className="title" style={_title.style}>{_title.text}</div>
                    <div className="price" style={_price.style}>{_price.text}</div>
                </div>
                <div className="description" style={_description.style}>{_description.text}</div>
            </div>
        )
    }    
}
// Export
module.exports = Radium(NewHomeMenuSectionItemsItem);