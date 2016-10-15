/**
* AppHomeLandingContent.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* AppHomeLandingContent
*
* @module AppHomeLandingContent
*/
class AppHomeLandingContent extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props)
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
    * Settings for: _a
    *
    * @function _a
    * @return {object}
    */
    _a() {
        return {
            style: {
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
            }
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
                margin: "10vh 0 0 0",
                width: "85vw",
                height: "65vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    width: "85vw"
                },
                "@media (min-width: 64em)": {
                    width: "85vw"
                }
            }
        }
    }

    /**
    * Settings for: _largeTextContainer
    *
    * @function _largeTextContainer
    * @return {object}
    */
    _largeTextContainer() {
        return {
            style: {
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                fontSize: "8vw",
                fontWeight: "700",
                letterSpacing: "0.15vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    width: "70%",
                    fontSize: "5vw",
                    letterSpacing: "0.25vw",
                },
                "@media (min-width: 64em)": {
                    width: "40%",
                    fontSize: "3vw"
                }
            }
        }
    }

    /**
    * Settings for: _tryContainer
    *
    * @function _tryContainer
    * @return {object}
    */
    _tryContainer() {
        return {
            style: {
                margin: "5vh 0 0 0",
                padding: "2.25vh 8.5vw 2.25vh 8.5vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                fontSize: "3.5vw",
                fontWeight: "400",
                letterSpacing: "0.25vw",
                border: "1px solid white",
                backgroundColor: "white",
                color: "black",
                transition: "background-color 0.25s ease",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    fontSize: "2.5vw"
                },
                "@media (min-width: 64em)": {
                    margin: "6vh 0 0 0",
                    padding: "2.5vh 5vw 2.5vh 5vw",
                    fontSize: "1.25vw"
                },
                ":hover": {
                    backgroundColor: "rgba(255,255,255,0.85)"
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
        let {...other} = this.props;
        let _a = this._a();
        let _div = this._div();
        let _largeTextContainer = this._largeTextContainer();
        let _tryContainer = this._tryContainer();
        return (
            <div style={_div.style}>
                <div className="largeTextContainer" style={_largeTextContainer.style}>
                    REDESIGN YOUR WEBSITE WITH A SINGLE CLICK
                </div>
                <a href="/try" style={_a.style}>
                    <div className="tryContainer" style={_tryContainer.style}>
                        TRY IT NOW
                    </div>
                </a>
            </div>
        )
    }    
}
module.exports = Radium(AppHomeLandingContent);