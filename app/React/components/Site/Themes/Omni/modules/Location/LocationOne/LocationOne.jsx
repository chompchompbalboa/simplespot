/**
* LocationOne.jsx
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
* LocationOne
*
* @module LocationOne
*/
class LocationOne extends React.Component {

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
        locations: React.PropTypes.object.isRequired,
        section: React.PropTypes.object.isRequired
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        locations: {
            "1": {
                address1: "123 Somewhere St",
                address2: "Suite 1",
                locality: "Somewhere",
                region: "NW",
                postal_code: "98146"
            }
        },
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
            style: {
                width: "100vw",
                height: "40vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
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
        var {locations, section, ...other} = this.props;
        let _section = this._section(section);
        let __locations = this.__locations(locations)
        return (
            <section className="section" style={_section.style}>
                {__locations}
            </section>
        )
    }    
}
// Export
module.exports = Radium(LocationOne);