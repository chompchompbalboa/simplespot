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

const NewHomeMenuHeader = require('../NewHomeMenuHeader/NewHomeMenuHeader.jsx');
const NewHomeMenuImages = require('../NewHomeMenuImages/NewHomeMenuImages.jsx');
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
                padding: "0 0 5vh 0",
                position: "relative",
                order: "3",
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                overflow: "hidden",
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
        let __menus = this.__menus(site.seed.menu);
        return (
            <div id="menu" className="div" style={_div.style}>
                <NewHomeMenuHeader {...other} />
                <NewHomeMenuImages menu={site.seed.menu} />
                {__menus}
            </div>
        )
    }    
}
// Export
module.exports = Radium(NewHomeMenu);