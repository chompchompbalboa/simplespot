/**
* NextHomeIntro.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const NextHomeIntroSummary = require('../NextHomeIntroSummary/NextHomeIntroSummary.jsx');
const NextHomeIntroText = require('../NextHomeIntroText/NextHomeIntroText.jsx');

/**
* NextHomeIntro
*
* @module NextHomeIntro
*/
class NextHomeIntro extends React.Component {

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
            style: {
                position: "relative",
                top: "10vh",
                left: "0vw",
                width: "100vw",
                height: "60vh",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                "@media (min-width: 0em) and (max-width: 40em)": {
                    flexDirection: "column"
                },
                "@media (min-width: 40em) and (max-width: 64em)": {
                    top: "14vh",
                    height: "55vh",
                    flexDirection: "row"
                },
                "@media (min-width: 64em)": {
                    top: (this.props.dockHeader ? "22vh" : "8vh"),
                    height: "50vh",
                    flexDirection: "row"
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
                <NextHomeIntroSummary />
                <NextHomeIntroText />
            </section>
        )
    }    
}
// Export
module.exports = Radium(NextHomeIntro);