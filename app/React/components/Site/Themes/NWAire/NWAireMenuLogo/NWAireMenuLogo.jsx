/**
* NWAireMenuLogo.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* NWAireMenuLogo
*
* @module NWAireMenuLogo
*/
class NWAireMenuLogo extends React.Component {

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
                padding: "1vh 0 1vh 0",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontFamily: "Lato, sans-serif",
                fontWeight: "900",
                textTransform: "uppercase",
                textAlign: "justify",
                letterSpacing: "0.25vw",
                "@media (min-width: 64em)": {
                    margin: "0 0 5vh 0",
                    padding: "none",
                    alignItems: "center",
                    height: "auto",  
                }
            }
        }
    }

    /**
    * Settings for: _largeText
    *
    * @function _largeText
    * @return {object}
    */
    _largeText() {
        return {
            style: {
                margin: "0.5vh 0 0 0",
                fontSize: "8vw",
                whiteSpace: "nowrap",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    fontSize: "6vw",
                },
                "@media (min-width: 64em)": {
                    margin: "0",
                    fontSize: "2.25vw" 
                }    
            }
        }
    }

    /**
    * Settings for: _smallText
    *
    * @function _smallText
    * @return {object}
    */
    _smallText() {
        return {
            style: {
                margin: "0 0 0.5vh 0",
                fontSize: "5vw",
                whiteSpace: "nowrap",
                color: "gray",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    fontSize: "3.5vw",
                },
                "@media (min-width: 64em)": {
                    margin: "0",
                    fontSize: "1.1vw", 
                }    
            }
        }
    }

    /**
    * Settings for: _linesContainer
    *
    * @function _linesContainer
    * @return {object}
    */
    _linesContainer() {
        return {
            style: {
                width: "60vw",
                height: "2vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    width: "50vw",
                    height: "1.5vh",
                },
                "@media (min-width: 64em)": {
                    width: "90%",
                    margin: "2vh 0 2vh 0",
                } 
                
            }
        }
    }

    /**
    * Settings for: _lineLarge
    *
    * @function _lineLarge
    * @return {object}
    */
    _lineLarge() {
        return {
            style: {
                width: "100%",
                height: "20%",
                backgroundColor: "white",
            }
        }
    }

    /**
    * Settings for: _lineSmall
    *
    * @function _lineSmall
    * @return {object}
    */
    _lineSmall() {
        return {
            style: {
                width: "100%",
                height: "7.5%",
                backgroundColor: "white",
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
        let _largeText = this._largeText();
        let _smallText = this._smallText();
        let _linesContainer = this._linesContainer(); 
        let _lineLarge = this._lineLarge();
        let _lineSmall = this._lineSmall();
        return (
            <div className="div" style={_div.style}>
                <div className="linesContainer" style={_linesContainer.style}>
                    <div className="lineSmall" style={_lineSmall.style}></div>
                    <div className="lineLarge" style={_lineLarge.style}></div>
                    <div className="lineSmall" style={_lineSmall.style}></div>
                </div>
                <div className="largeText" style={_largeText.style}>Northwest</div>
                <div className="smallText" style={_smallText.style}>Aire Services, Inc.</div>
                <div className="linesContainer" style={_linesContainer.style}>
                    <div className="lineSmall" style={_lineSmall.style}></div>
                    <div className="lineLarge" style={_lineLarge.style}></div>
                    <div className="lineSmall" style={_lineSmall.style}></div>
                </div>
            </div>
        )
    }    
}
// Export
module.exports = Radium(NWAireMenuLogo);