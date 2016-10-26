/**
* NewHomeMenuSectionHeader.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* NewHomeMenuSectionHeader
*
* @module NewHomeMenuSectionHeader
*/
class NewHomeMenuSectionHeader extends React.Component {

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
                margin: "2vh 0 0 0",
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Lato",
                fontWeight: "700",
                fontSize: "5.5vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
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
        var {header, ...other} = this.props;
        let _div = this._div(); 
        return (
            <div className="div" style={_div.style}>
                {header}
            </div>
        )
    }    
}
// Export
module.exports = Radium(NewHomeMenuSectionHeader);