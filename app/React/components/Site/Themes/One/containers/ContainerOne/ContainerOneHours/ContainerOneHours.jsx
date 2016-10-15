/**
* OneContainerHours.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* OneContainerHours
*
* @module OneContainerHours
*/
class OneContainerHours extends React.Component {

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
        height: React.PropTypes.shape({
            "0em": React.PropTypes.number.isRequired,
            "48em": React.PropTypes.number.isRequired,
            "64em": React.PropTypes.number.isRequired
        }).isRequired,
        hours: React.PropTypes.object.isRequired,
        justifyContent: React.PropTypes.shape({
            "0em": React.PropTypes.string.isRequired,
            "48em": React.PropTypes.string.isRequired,
            "64em": React.PropTypes.string.isRequired
        }).isRequired,
        letterSpacing: React.PropTypes.shape({
            "0em": React.PropTypes.string.isRequired,
            "48em": React.PropTypes.string.isRequired,
            "64em": React.PropTypes.string.isRequired
        }).isRequired,
        margin: React.PropTypes.shape({
            "0em": React.PropTypes.string.isRequired,
            "48em": React.PropTypes.string.isRequired,
            "64em": React.PropTypes.string.isRequired
        }).isRequired,
        width: React.PropTypes.shape({
            "0em": React.PropTypes.number.isRequired,
            "48em": React.PropTypes.number.isRequired,
            "64em": React.PropTypes.number.isRequired
        }).isRequired
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        fontFamily: "Open Sans, sans-serif",
        justifyContent: {
            "0em": "flex-start",
            "48em": "center",
            "64em": "center"
        },
        height: {
            "0em": 50,
            "48em": 50,
            "64em": 50
        },
        hours: {
            "1": {
                day: "Monday",
                hours: "10:30 AM - 8:30 PM"
            },
            "2": {
                day: "Tuesday",
                hours: "10:30 AM - 8:30 PM"
            },
            "3": {
                day: "Wednesday",
                hours: "10:30 AM - 8:30 PM"
            },
            "4": {
                day: "Thursday",
                hours: "10:30 AM - 8:30 PM"
            },
            "5": {
                day: "Friday",
                hours: "10:30 AM - 8:30 PM"
            },
            "6": {
                day: "Saturday",
                hours: "10:30 AM - 8:30 PM"
            },
            "7": {
                day: "Sunday",
                hours: "Closed"
            }
        },
        letterSpacing: {
            "0em": "0.5vw",
            "48em": "0.35vw",
            "64em": "0.25vw"
        },
        margin: {
            "0em": "0",
            "48em": "0.15vh 0 0.15vh 0",
            "64em": "0.15vh 0 0.15vh 0"
        },
        width: {
            "0em": 100,
            "48em": 50,
            "64em": 50
        }
    }

    /**
    * Settings for: __hours
    *
    * @function __hours
    * @return {object}
    */
    __hours(fontFamily, hours, letterSpacing, margin) {
        let payload = [];
        let style = {
            margin: margin['0em'],
            fontFamily: fontFamily,
            letterSpacing: letterSpacing['0em'],
            "@media (min-width: 48em) and (max-width: 64em)": {
                margin: margin['48em'],
                letterSpacing: letterSpacing['48em']
            },
            "@media (min-width: 64em)": {
                margin: margin['64em'],
                letterSpacing: letterSpacing['64em']
            }
        };
        for (let i in hours) {
            let current = hours[i];
            payload.push(
                <div key={i} style={style}>{current.day}: {current.hours}</div>
            );
        }
        return payload;
    }

    /**
    * Settings for: _div
    *
    * @function _div
    * @return {object}
    */
    _div(height, item, justifyContent, marginTops, width) {
        return {
            style: {
                marginTop: marginTops['0em'][item],
                width: width['0em'] + "vw",
                height: height['0em'] + "vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: justifyContent['0em'],
                alignItems: "center",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    marginTop: marginTops['48em'][item],
                    width: width['48em'] + "vw",
                    height: height['48em'] + "vh",
                    justifyContent: justifyContent['48em']
                },
                "@media (min-width: 64em)": {
                    marginTop: marginTops['64em'][item],
                    width: width['64em'] + "vw",
                    height: height['64em'] + "vh",
                    justifyContent: justifyContent['64em']
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
        var {fontFamily, height, hours, item, justifyContent, letterSpacing, margin, marginTops, width, ...other} = this.props;
        let _div = this._div(height, item, justifyContent, marginTops, width);
        let __hours = this.__hours(fontFamily, hours, letterSpacing, margin);
        return (
            <div className="div" style={_div.style}>
                {__hours}
            </div>
        )
    }    
}
// Export
module.exports = Radium(OneContainerHours);