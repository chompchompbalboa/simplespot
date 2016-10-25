/**
* New.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const NewHome = require('./NewHome/NewHome.jsx');

/**
* New
*
* @module New
*/
class New extends React.Component {

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
    * Settings for: _section
    *
    * @function _section
    * @return {object}
    */
    _section() {
        return {
            style: {
                position: "relative",
                top: "0vh",
                left: "0vw"
            }
        }
    }

    /**
    * Settings for: __site
    *
    * @function __site
    * @return {object}
    */
    __site(path) {
        switch(path) {
            default:
                return (<NewHome site={this.props.site} />)
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
        let __site = this.__site(site.display.path);
        let _section = this._section(); 
        return (
            <section className="New" style={_section.style}>
                {__site}
            </section>
        )
    }    
}
// Export
module.exports = Radium(New);