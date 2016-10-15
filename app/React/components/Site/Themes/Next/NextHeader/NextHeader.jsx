/**
* NextHeader.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const NextHeaderName = require('../NextHeaderName/NextHeaderName.jsx');
const NextHeaderDescription = require('../NextHeaderDescription/NextHeaderDescription.jsx');
const NextHeaderMenuLogo = require('../NextHeaderMenuLogo/NextHeaderMenuLogo.jsx');

/**
* NextHeader
*
* @module NextHeader
*/
class NextHeader extends React.Component {

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
        dockHeader: React.PropTypes.bool.isRequired,
        section: React.PropTypes.object.isRequired
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        dockHeader: false,
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
                zIndex: "1000",
                position: "fixed",
                width: "100vw",
                height: "10vh",
                top: "0vh",
                left: "0vw",
                backgroundColor: "rgba(255,255,255,0.92)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                "@media (min-width: 40em) and (max-width: 56em)": {
                    height: "14vh"
                },
                "@media (min-width: 56em)": {
                    position: (this.props.dockHeader ? "fixed" : "relative"),
                    top: (this.props.dockHeader ? "0vh" : "8vh"),
                    height: "14vh",
                    backgroundColor: (this.props.dockHeader ? "rgba(255,255,255, 0.92)" : "rgba(255,255,255,1)")
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
        var {section, ...other} = this.props;
        let _section = this._section(section);
        return (
            <section className="section" style={_section.style}>
                <NextHeaderName />
                <NextHeaderDescription />
                <NextHeaderMenuLogo />
            </section>
        )
    }    
}
// Export
module.exports = Radium(NextHeader);