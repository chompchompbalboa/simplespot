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
    * Settings for: hours
    *
    * @function hours
    * @return {object}
    */
    hours(hours) {
        let payload = {
            Mo: "Closed",
            Tu: "Closed",
            We: "Closed",
            Th: "Closed",
            Fr: "Closed",
            Sa: "Closed",
            Su: "Closed"
        };
        if (typeof hours !== "undefined") {
            for (let i in payload) {
                if (typeof hours[i] !== "undefined") {
                    let day = hours[i];
                    let openHour = (Number(day.open.hour) > 12 ? Number(day.open.hour) - 12 : Number(day.open.hour));
                    let openMinute = day.open.minute;
                    let openMeridien = (Number(day.open.hour) > 11 ? "PM" : "AM");
                    let closeHour = (Number(day.close.hour) > 12 ? Number(day.close.hour) - 12 : Number(day.close.hour));
                    let closeMinute = day.close.minute;
                    let closeMeridien = (Number(day.close.hour) > 11 ? "PM" : "AM");
                    let string = openHour + ":" + openMinute + " " + openMeridien + " - " + closeHour + ":" + closeMinute + " " + closeMeridien;
                    payload[i] = string;    
                }
            }
        }
        return payload;
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
                },
                "@media (min-width: 64em)": {
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
    _hours() {
        return {
            style: {
                margin: "0 0 0 3vw",
                fontWeight: "300",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
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
        var {site, ...other} = this.props;
        let hours = this.hours(site.seed.hours);
        let _container = this._container();
        let _day = this._day();
        let _div = this._div();
        let _hours = this._hours();
        return (
            <div className="div" style={_div.style}>
                <div className="container" style={_container.style}>
                    <div className="day" style={_day.style}>
                        Monday: 
                    </div>
                    <div className="hours" style={_hours.style}>
                        {hours.Mo}
                    </div>
                </div>
                <div className="container" style={_container.style}>
                    <div className="day" style={_day.style}>
                        Tuesday: 
                    </div>
                    <div className="hours" style={_hours.style}>
                        {hours.Tu}
                    </div>
                </div>
                <div className="container" style={_container.style}>
                    <div className="day" style={_day.style}>
                        Wednesday: 
                    </div>
                    <div className="hours" style={_hours.style}>
                        {hours.We}
                    </div>
                </div>
                <div className="container" style={_container.style}>
                    <div className="day" style={_day.style}>
                        Thursday: 
                    </div>
                    <div className="hours" style={_hours.style}>
                        {hours.Th}
                    </div>
                </div>
                <div className="container" style={_container.style}>
                    <div className="day" style={_day.style}>
                        Friday: 
                    </div>
                    <div className="hours" style={_hours.style}>
                        {hours.Fr}
                    </div>
                </div>
                <div className="container" style={_container.style}>
                    <div className="day" style={_day.style}>
                        Saturday: 
                    </div>
                    <div className="hours" style={_hours.style}>
                        {hours.Sa}
                    </div>
                </div>
                <div className="container" style={_container.style}>
                    <div className="day" style={_day.style}>
                        Sunday: 
                    </div>
                    <div className="hours" style={_hours.style}>
                        {hours.Su}
                    </div>
                </div>
            </div>
        )
    }    
}
// Export
module.exports = Radium(NewHomeAboutHours);