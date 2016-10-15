/**
* OneContainerMenuItemsItem.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* OneContainerMenuItemsItem
*
* @module OneContainerMenuItemsItem
*/
class OneContainerMenuItemsItem extends React.Component {

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
    * Settings for: _description
    *
    * @function _description
    * @return {object}
    */
    _description(description) {
        return {
            style: {
                width: "100%",
                textAlign: "justify"
            },
            text: description
        }
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
                margin: "1.25vh 0 1.25vh 0",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    margin: "0.75vh 2.5% 0.75vh 2.5%",
                    width: "45%"
                },
                "@media (min-width: 64em)": {
                    margin: "0vh 5% 2vh 5%",
                    width: "40%"
                }
            }
        }
    }

    /**
    * Settings for: _infoContainer
    *
    * @function _infoContainer
    * @return {object}
    */
    _infoContainer() {
        return {
            style: {
                margin: "0 0 0.5vh 0",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }
        }
    }

    /**
    * Settings for: _name
    *
    * @function _name
    * @return {object}
    */
    _name(name, description) {
        return {
            style: {
                fontSize: "4.25vw",
                fontWeight: "bold",
                letterSpacing: "0.25vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    fontSize: "1.75vw",
                    letterSpacing: "0.25vw"
                },
                "@media (min-width: 64em)": {
                    fontSize: "1.25vw",
                    letterSpacing: "0.125vw"
                }
            },
            text: name
        }
    }

    /**
    * Settings for: _price
    *
    * @function _price
    * @return {object}
    */
    _price(price, description) {
        return {
            style: {
                margin: "0 0 0 5vw",
                fontSize: "4.25vw",
                fontWeight: "bold",
                letterSpacing: "0.375vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    fontSize: "1.75vw",
                    letterSpacing: "0.25vw"
                },
                "@media (min-width: 64em)": {
                    fontSize: "1.25vw",
                    letterSpacing: "0.25vw"
                }
            },
            text: price
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
        let _description = this._description(item.description);
        let _div = this._div();
        let _infoContainer = this._infoContainer();
        let _name = this._name(item.name, item.description);
        let _price = this._price(item.price, item.description);
        return (
            <div className="div" style={_div.style}>
                <div className="infoContainer" style={_infoContainer.style}>
                    <div className="name" style={_name.style}>{_name.text}</div>
                    <div className="price" style={_price.style}>{_price.text}</div>
                </div>
                <div className="description" style={_description.style}>{_description.text}</div>
            </div>
        )
    }    
}
// Export
module.exports = Radium(OneContainerMenuItemsItem);