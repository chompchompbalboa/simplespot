/**
* NewHomeMenuSection.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const NewHomeMenuSectionBackground = require('../NewHomeMenuSectionBackground/NewHomeMenuSectionBackground.jsx');
const NewHomeMenuSectionHeader = require('../NewHomeMenuSectionHeader/NewHomeMenuSectionHeader.jsx');
const NewHomeMenuSectionItems = require('../NewHomeMenuSectionItems/NewHomeMenuSectionItems.jsx');

/**
* NewHomeMenuSection
*
* @module NewHomeMenuSection
*/
class NewHomeMenuSection extends React.Component {

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
                minHeight: "60vh",
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
                <NewHomeMenuSectionHeader {...other} />
                <NewHomeMenuSectionBackground {...other} />
                <NewHomeMenuSectionItems {...other} />
            </div>
        )
    }    
}
// Export
module.exports = Radium(NewHomeMenuSection);