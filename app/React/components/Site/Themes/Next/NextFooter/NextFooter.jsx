/**
* NextFooter.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* NextFooter
*
* @module NextFooter
*/
class NextFooter extends React.Component {

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
                position: "relative",
                top: "10vh",
                left: "0vw",
                width: "100vw",
                height: "10vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(25,25,25,1)",
                fontFamily: "Merriweather, serif",
                fontSize: "5.5vw",
                fontWeight: "900",
                color: "white",
                "@media (min-width: 40em) and (max-width: 64em)": {
                    top: "14vh"
                },
                "@media (min-width: 64em)": {
                    top: (this.props.dockHeader ? "22vh" : "8vh"),
                    height: "15vh",
                    fontSize: "2vw"
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
                Next.
            </section>
        )
    }    
}
// Export
module.exports = Radium(NextFooter);