/**
* OneContainerMenuHeaders.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* OneContainerMenuHeaders
*
* @module OneContainerMenuHeaders
*/
class OneContainerMenuHeaders extends React.Component {

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
        headers: React.PropTypes.shape({
            menu: React.PropTypes.string.isRequired,
            section: React.PropTypes.string.isRequired,
            subsection: React.PropTypes.string.isRequired
        }).isRequired
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        headers: {
            menu: "",
            section: "",
            subsection: "Subsection"
        }
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
                margin: "3.5vh 0 0 0",
                width: "90%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Josefin Sans, sans-serif",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    alignItems: "center",
                    width: "95%"
                },
                "@media (min-width: 64em)": {
                    alignItems: "center",
                    width: "95%"
                }
            }
        }
    }

    /**
    * Settings for: _menuHeader
    *
    * @function _menuHeader
    * @return {object}
    */
    _menuHeader(menuHeader) {
        return {
            style: {
                margin: "1vh 0 1vh 0",
                display: (menuHeader === "" ? "none" : "block"),
                fontSize: "10vw",
                textTransform: "uppercase",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    fontSize: "6.5vw"
                },
                "@media (min-width: 64em)": {
                    fontSize: "3vw"
                }
            },
            text: menuHeader
        }
    }

    /**
    * Settings for: _sectionHeader
    *
    * @function _sectionHeader
    * @return {object}
    */
    _sectionHeader(sectionHeader) {
        return {
            style: {
                display: (sectionHeader === "" ? "none" : "block"),
                fontSize: "6vw",
                fontWeight: "900",
                textTransform: "uppercase",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    fontSize: "4vw"
                },
                "@media (min-width: 64em)": {
                    fontSize: "2.5vw"
                }
            },
            text: sectionHeader
        }
    }

    /**
    * Settings for: _subsectionHeader
    *
    * @function _subsectionHeader
    * @return {object}
    */
    _subsectionHeader(subsectionHeader) {
        return {
            style: {
                display: (subsectionHeader === "" ? "none" : "block"),
                fontSize: "5vw",
                fontWeight: "900",
                textTransform: "uppercase",
                letterSpacing: "0.5vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    fontSize: "2.75vw"
                },
                "@media (min-width: 64em)": {
                    fontSize: "2vw"
                }
            },
            text: subsectionHeader
        }
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        var {headers, ...other} = this.props;
        let _div = this._div();
        let _menuHeader = this._menuHeader(headers.menu);
        let _sectionHeader = this._sectionHeader(headers.section);
        let _subsectionHeader = this._subsectionHeader(headers.subsection);
        return (
            <div className="div" style={_div.style}>
                <div className="menuHeader" style={_menuHeader.style}>{_menuHeader.text}</div>
                <div className="sectionHeader" style={_sectionHeader.style}>{_sectionHeader.text}</div>
                <div className="subsectionHeader" style={_subsectionHeader.style}>{_subsectionHeader.text}</div>
            </div>
        )
    }    
}
// Export
module.exports = Radium(OneContainerMenuHeaders);