/**
* AppDashboardContentFormInputHours.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const contentActions = require('../../../actions/contentActions');

const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
];

/**
* AppDashboardContentFormInputHours
*
* @module AppDashboardContentFormInputHours
*/
class AppDashboardContentFormInputHours extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
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
    * Handle Change
    *
    * @function handleChange
    * @return {object}
    */
    handleChange(e) {
        let changes = [];
        for (let i in this.props.changes) {
            let change = this.props.changes[i];
            let current = [
                {key: change + ".Monday", value: this.Monday.value},
                {key: change + ".Tuesday", value: this.Tuesday.value},
                {key: change + ".Wednesday", value: this.Wednesday.value},
                {key: change + ".Thursday", value: this.Thursday.value},
                {key: change + ".Friday", value: this.Friday.value},
                {key: change + ".Saturday", value: this.Saturday.value},
                {key: change + ".Sunday", value: this.Sunday.value}
            ]
            changes.push(...current);         
        }
        contentActions.changeContentNoHistory(changes);
    }

    /**
    * Settings for: values
    *
    * @function values
    * @return {object}
    */
    values(content, key) {
        let payload = {};
        for (let i in days) {
            let field = days[i];
            payload[field] = eval("content." + key + "." + field)
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
                margin: "0.5vh 0 0 0",
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
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
    _day(value) {
        return {
            style: {
                border: (value !== "" ? "1.5px solid black" : "1.5px solid red"),
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
    _div(value) {
        return {
            style: {
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    width: "60%",
                    display: "flex",
                    flexFlow: "row wrap",
                    justifyContent: "space-between",
                    alignItems: "center",
                }
            }
        }
    }

    /**
    * Settings for: _input
    *
    * @function _input
    * @return {object}
    */
    _input() {
        return {
            style: {
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    padding: "0.75vh 0.25vw",
                    fontSize: "2vh"
                }
            }
        }
    }

    /**
    * Settings for: _label
    *
    * @function _label
    * @return {object}
    */
    _label() {
        return {
            style: {
                width: "25%",
                fontWeight: "400",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
            }
        }
    }

    /**
    * Settings for: _label
    *
    * @function _label
    * @return {object}
    */
    _label() {
        return {
            style: {
                width: "25%",
                fontWeight: "400",
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
        let {content, contentKey, ...other} = this.props;
        let values = this.values(content, contentKey);
        let _container = this._container();
        let _div = this._div();
        let _input = this._input();
        let _label = this._label();
        let _Monday = this._day(values.Monday);
        let _Tuesday = this._day(values.Tuesday);
        let _Wednesday = this._day(values.Wednesday);
        let _Thursday = this._day(values.Thursday);
        let _Friday = this._day(values.Friday);
        let _Saturday = this._day(values.Saturday);
        let _Sunday = this._day(values.Sunday);
        return (
            <div className="div" style={_div.style}>
                <div className="container" style={_container.style}>
                    <div className="label" style={_label.style}>Monday</div>
                    <input type="text" ref={(c) => this.Monday = c} value={values.Monday} style={[_input.style, _Monday.style]} onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="container" style={_container.style}>
                    <div className="label" style={_label.style}>Tuesday</div>
                    <input type="text" ref={(c) => this.Tuesday = c} value={values.Tuesday} style={[_input.style, _Tuesday.style]} onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="container" style={_container.style}>
                    <div className="label" style={_label.style}>Wednesday</div>
                    <input type="text" ref={(c) => this.Wednesday = c} value={values.Wednesday} style={[_input.style, _Wednesday.style]} onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="container" style={_container.style}>
                    <div className="label" style={_label.style}>Thursday</div>
                    <input type="text" ref={(c) => this.Thursday = c} value={values.Thursday} style={[_input.style, _Thursday.style]} onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="container" style={_container.style}>
                    <div className="label" style={_label.style}>Friday</div>
                    <input type="text" ref={(c) => this.Friday = c} value={values.Friday} style={[_input.style, _Friday.style]} onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="container" style={_container.style}>
                    <div className="label" style={_label.style}>Saturday</div>
                    <input type="text" ref={(c) => this.Saturday = c} value={values.Saturday} style={[_input.style, _Saturday.style]} onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="container" style={_container.style}>
                    <div className="label" style={_label.style}>Sunday</div>
                    <input type="text" ref={(c) => this.Sunday = c} value={values.Sunday} style={[_input.style, _Sunday.style]} onChange={(e) => this.handleChange(e)} />
                </div>
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardContentFormInputHours);