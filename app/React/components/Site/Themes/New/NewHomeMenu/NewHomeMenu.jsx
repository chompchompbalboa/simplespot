/**
* NewHomeMenu.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const NewHomeMenuSection = require('../NewHomeMenuSection/NewHomeMenuSection.jsx');

/**
* NewHomeMenu
*
* @module NewHomeMenu
*/
class NewHomeMenu extends React.Component {

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
                justifyContent: "flex-start",
                alignItems: "center",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
            }
        }
    }

    /**
    * Settings for: _header
    *
    * @function _header
    * @return {object}
    */
    _header() {
        return {
            style: {
                margin: "3vh 0 0 0",
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Lato, sans-serif",
                fontWeight: "900",
                fontSize: "8vw",
                letterSpacing: "0.75vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
            }
        }
    }

    /**
    * Settings for: __menus
    *
    * @function __menus
    * @return {object}
    */
    __menus(menus) {
        let payload = [];
        let count = 4;
        for (let i in menus) {
            let menu = menus[i];
            payload.push(
                <NewHomeMenuSection
                    key={i}
                    count={count}
                    header={i}
                    section={menu}
                />
            )
            count = count + 1;
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
        var {site, ...other} = this.props;
        let _div = this._div();
        let _header = this._header(); 
        let __menus = this.__menus(site.seed.menu);
        return (
            <div className="div" style={_div.style}>
                <div className="header" style={_header.style}>MENU</div>
                {__menus}
            </div>
        )
    }    
}
// Export
module.exports = Radium(NewHomeMenu);