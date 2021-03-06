/**
* NewHomeAboutHours.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* NewHomeAboutHours
*
* @module NewHomeAboutHours
*/
class NewHomeAboutHours extends React.Component {

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
    * Settings for: _container
    *
    * @function _container
    * @return {object}
    */
    _container() {
        return {
            style: {
                margin: "0 0 1vh 0",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    margin: "0 0 1.5vh 5vw",
                    flexDirection: "column",
                    width: "80%",
                    alignItems: "flex-start"
                }
            }
        }
    }

    /**
    * Settings for: _day
    *
    * @function _day
    * @return {object}
    */
    _day() {
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
                width: "85vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Lato",
                fontSize: "4.5vw",
                fontWeight: "400",
                letterSpacing: "0.2vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    margin: "5vh 0 3.5vh 0",
                    width: "40vw",
                    fontSize: "2vw",
                },
                "@media (min-width: 64em)": {
                    width: "22.5vw",
                    height: "60vh",
                    justifyContent: "center",
                    order: "1",
                    fontSize: "1.25vw",
                    letterSpacing: "0.05vw",
                }
            }
        }
    }

    /**
    * Settings for: _hours
    *
    * @function _hours
    * @return {object}
    */
    _hours(hours) {
        return {
            style: {
                margin: "0 0 0 3vw",
                fontWeight: "300",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    margin: "0 0 0 0",
                }
            },
            text: hours
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
        let _container = this._container();
        let _day = this._day();
        let _div = this._div();
        let _hours = this._hours(site.seed.hours);
        return (
            <div className="div" style={_div.style}>
                <div className="container" style={_container.style}>
                    <div className="day" style={_day.style}>
                        Monday: 
                    </div>
                    <div className="hours" style={_hours.style}>
                        {_hours.text.Monday}
                    </div>
                </div>
                <div className="container" style={_container.style}>
                    <div className="day" style={_day.style}>
                        Tuesday: 
                    </div>
                    <div className="hours" style={_hours.style}>
                        {_hours.text.Tuesday}
                    </div>
                </div>
                <div className="container" style={_container.style}>
                    <div className="day" style={_day.style}>
                        Wednesday: 
                    </div>
                    <div className="hours" style={_hours.style}>
                        {_hours.text.Wednesday}
                    </div>
                </div>
                <div className="container" style={_container.style}>
                    <div className="day" style={_day.style}>
                        Thursday: 
                    </div>
                    <div className="hours" style={_hours.style}>
                        {_hours.text.Thursday}
                    </div>
                </div>
                <div className="container" style={_container.style}>
                    <div className="day" style={_day.style}>
                        Friday: 
                    </div>
                    <div className="hours" style={_hours.style}>
                        {_hours.text.Friday}
                    </div>
                </div>
                <div className="container" style={_container.style}>
                    <div className="day" style={_day.style}>
                        Saturday: 
                    </div>
                    <div className="hours" style={_hours.style}>
                        {_hours.text.Saturday}
                    </div>
                </div>
                <div className="container" style={_container.style}>
                    <div className="day" style={_day.style}>
                        Sunday: 
                    </div>
                    <div className="hours" style={_hours.style}>
                        {_hours.text.Sunday}
                    </div>
                </div>
            </div>
        )
    }    
}
// Export
module.exports = Radium(NewHomeAboutHours);