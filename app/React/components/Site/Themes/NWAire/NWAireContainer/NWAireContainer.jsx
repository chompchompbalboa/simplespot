/**
* NWAireContainer.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const NWAireContainerOne = require('../NWAireContainerOne/NWAireContainerOne.jsx');

/**
* NWAireContainer
*
* @module NWAireContainer
*/
class NWAireContainer extends React.Component {

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
                position: "relative",
                top: "0vh",
                left: "0vw",
                width: "100vw",
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "flex-start",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    left: "22.5vw",
                    width: "77.5vw",
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
                <NWAireContainerOne {...other} />
            </div>
        )
    }    
}
// Export
module.exports = Radium(NWAireContainer);