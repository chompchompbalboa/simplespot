/**
* NWAire.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const NWAireContainer = require('./NWAireContainer/NWAireContainer.jsx');
const NWAireMenu = require('./NWAireMenu/NWAireMenu.jsx');

/**
* NWAire
*
* @module NWAire
*/
class NWAire extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
        this.state = {
            active: "home"
        };
        this.changeActive = this.changeActive.bind(this);
    }

    /**
    * Change Active
    *
    * @function changeActive
    */
    changeActive(next) {
        this.setState({
            active: next
        })
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
                top: "0vw",
                left: "0vh",
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
        var {site, ...other} = this.props;
        let _div = this._div(); 
        return (
            <div className="div" style={_div.style}>
                <NWAireMenu site={site} active={this.state.active}/>
                <NWAireContainer site={site} changeActive={this.changeActive}/>
            </div>
        )
    }    
}
// Export
module.exports = Radium(NWAire);