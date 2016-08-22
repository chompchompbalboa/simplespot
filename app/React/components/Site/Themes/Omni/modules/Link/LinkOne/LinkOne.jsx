/**
* LinkOne.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
* @requires contentActions
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* LinkOne
*
* @module LinkOne
*/
class LinkOne extends React.Component {

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
        section: React.PropTypes.object.isRequired
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        section: {}
    }

    /**
    * Settings for: _section
    *
    * @function _section
    * @return {object}
    */
    _section(section) {
        return {
            style: {}
        }
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        var {section, ...other} = this.props;
        let _section = this._section(section);
        return (
            <section className="section" style={_section.style}>
                LinkOne
            </section>
        )
    }    
}
// Export
module.exports = Radium(LinkOne);