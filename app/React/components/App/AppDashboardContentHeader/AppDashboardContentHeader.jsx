/**
* AppDashboardContentHeader.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* AppDashboardContentHeader
*
* @module AppDashboardContentHeader
*/
class AppDashboardContentHeader extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    /**
    * Validate the prop types
    *
    * @prop propTypes
    */
    static propTypes = {
        largeText: React.PropTypes.string.isRequired,
        smallText: React.PropTypes.string.isRequired
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        largeText: "Content Header",
        smallText: "A short description of how awesome our users are and why they're the coolest for using simplespot."
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
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    margin: "4vh 0 0 0",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start"
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
    _largeText(largeText) {
        return {
            style: {
                fontFamily: "Lato, sans-serif",
                fontWeight: "700",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    fontSize: "1.75vw"
                }
            },
            text: largeText
        }
    }

    /**
    * Settings for: _smallText
    *
    * @function _smallText
    * @return {object}
    */
    _smallText(smallText) {
        return {
            style: {
                fontWeight: "400",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    margin: "3vh 0 3vh 0"
                }
            },
            text: smallText
        }
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        let {largeText, smallText, ...other} = this.props;
        let _div = this._div();
        let _largeText = this._largeText(largeText);
        let _smallText = this._smallText(smallText);
        return (
            <div style={_div.style}>
                <div className="largeText" style={_largeText.style}>{_largeText.text}</div>
                <div className="smallText" style={_smallText.style}>{_smallText.text}</div>
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardContentHeader);