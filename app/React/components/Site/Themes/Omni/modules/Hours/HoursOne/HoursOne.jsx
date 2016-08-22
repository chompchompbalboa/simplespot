/**
* HoursOne.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
* @requires contentActions
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* HoursOne
*
* @module HoursOne
*/
class HoursOne extends React.Component {

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
        hours: {
            hours: {
                0: {
                    day: "Sunday",
                    open: {
                        hour: "10",
                        minute: "00",
                        period: "a.m."
                    },
                    close: {
                        hour: "10",
                        minute: "00",
                        period: "p.m."
                    }
                },
                1: {
                    day: "Monday",
                    open: {
                        hour: "10",
                        minute: "00",
                        period: "a.m."
                    },
                    close: {
                        hour: "11",
                        minute: "00",
                        period: "p.m."
                    }
                },
                2: {
                    day: "Tuesday",
                    open: {
                        hour: "10",
                        minute: "00",
                        period: "a.m."
                    },
                    close: {
                        hour: "11",
                        minute: "00",
                        period: "p.m."
                    }
                },
                3: {
                    day: "Wednesday",
                    open: {
                        hour: "10",
                        minute: "00",
                        period: "a.m."
                    },
                    close: {
                        hour: "11",
                        minute: "00",
                        period: "p.m."
                    }
                },
                4: {
                    day: "Thursday",
                    open: {
                        hour: "10",
                        minute: "00",
                        period: "a.m."
                    },
                    close: {
                        hour: "11",
                        minute: "00",
                        period: "p.m."
                    }
                },
                5: {
                    day: "Friday",
                    open: {
                        hour: "10",
                        minute: "00",
                        period: "a.m."
                    },
                    close: {
                        hour: "2",
                        minute: "00",
                        period: "a.m."
                    }
                },
                6: {
                    day: "Saturday",
                    open: {
                        hour: "10",
                        minute: "00",
                        period: "a.m."
                    },
                    close: {
                        hour: "2",
                        minute: "00",
                        period: "a.m."
                    }
                }
            }
        },
        section: {
            width: "40vw",
            height: "40vh"
        }
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
                width: section.width,
                height: section.height,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }
        }
    }

    /**
    * Settings for: __hours
    *
    * @function __hours
    * @return {object}
    */
    __hours(hours) {
        let payload = [];
        let style = {};
        for (let i in hours.hours) {
            let current = hours.hours[i];
            console.log(current);
            payload.push(
                <div key={i} className="hours" style={style}>
                    {current.day} {current.open.hour}:{current.open.minute} {current.open.period} - {current.close.hour}:{current.close.minute} {current.close.period}
                </div>
            );
        }
        return payload;
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        var {hours, section, ...other} = this.props;
        let _section = this._section(section);
        let __hours = this.__hours(hours);
        return (
            <section className="section" style={_section.style}>
                {__hours}
            </section>
        )
    }    
}
// Export
module.exports = Radium(HoursOne);