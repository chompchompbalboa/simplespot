/**
* NWAireMenu.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const NWAireMenuLinks = require('../NWAireMenuLinks/NWAireMenuLinks.jsx');
const NWAireMenuLogo = require('../NWAireMenuLogo/NWAireMenuLogo.jsx');

/**
* NWAireMenu
*
* @module NWAireMenu
*/
class NWAireMenu extends React.Component {

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
                zIndex: "100",
                position: "absolute",
                top: "0vw",
                left: "15vw",
                width: "calc(60vw + 2vh)",
                padding: "1vh",
                backgroundColor: "rgb(25,25,25)",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    padding: "0",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "fixed",
                    left: "0vh",
                    width: "22.5vw",
                    height: "100vh"
                }
            }
        }
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        var {...other} = this.props;
        let _div = this._div(); 
        return (
            <div className="div" style={_div.style}>
                <NWAireMenuLogo {...other} />
                <NWAireMenuLinks {...other} />
            </div>
        )
    }    
}
// Export
module.exports = Radium(NWAireMenu);