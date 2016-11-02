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
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa",
        "Su"
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
    handleChange(e, key) {
        let changes = [];
        for (let i in this.props.changes) {
            let change = this.props.changes[i];
            let current = [
                {key: change + key, value: e.target.value},
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
            try {
                payload[field] = {
                    open: {
                        hour: eval("content." + key + "." + field + ".open.hour"),
                        minute: eval("content." + key + "." + field + ".open.minute")
                    },
                    close: {
                        hour: eval("content." + key + "." + field + ".close.hour"),
                        minute: eval("content." + key + "." + field + ".close.minute")
                    }
                }
            }
            catch(e) {}
            
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
                margin: "0 0 0 0.5vw",
                width: "2.5vw",
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
        return (
            <div className="div" style={_div.style}>
                <div className="container" style={_container.style}>
                    <div className="label" style={_label.style}>Monday</div>
                    <input type="text" value={values.Mo.open.hour} style={_input.style} onChange={(e) => this.handleChange(e, ".Mo.open.hour")} />
                    <input type="text" value={values.Mo.open.minute} style={_input.style} onChange={(e) => this.handleChange(e, ".Mo.open.minute")} />
                    <input type="text" value={values.Mo.close.hour} style={_input.style} onChange={(e) => this.handleChange(e, ".Mo.close.hour")} />
                    <input type="text" value={values.Mo.close.minute} style={_input.style} onChange={(e) => this.handleChange(e, ".Mo.close.minute")} />
                </div>
                <div className="container" style={_container.style}>
                    <div className="label" style={_label.style}>Tuesday</div>
                    <input type="text" value={values.Tu.open.hour} style={_input.style} onChange={(e) => this.handleChange(e, ".Tu.open.hour")} />
                    <input type="text" value={values.Tu.open.minute} style={_input.style} onChange={(e) => this.handleChange(e, ".Tu.open.minute")} />
                    <input type="text" value={values.Tu.close.hour} style={_input.style} onChange={(e) => this.handleChange(e, ".Tu.close.hour")} />
                    <input type="text" value={values.Tu.close.minute} style={_input.style} onChange={(e) => this.handleChange(e, ".Tu.close.minute")} />
                </div>
                <div className="container" style={_container.style}>
                    <div className="label" style={_label.style}>Wednesday</div>
                    <input type="text" value={values.We.open.hour} style={_input.style} onChange={(e) => this.handleChange(e, ".We.open.hour")} />
                    <input type="text" value={values.We.open.minute} style={_input.style} onChange={(e) => this.handleChange(e, ".We.open.minute")} />
                    <input type="text" value={values.We.close.hour} style={_input.style} onChange={(e) => this.handleChange(e, ".We.close.hour")} />
                    <input type="text" value={values.We.close.minute} style={_input.style} onChange={(e) => this.handleChange(e, ".We.close.minute")} />
                </div>
                <div className="container" style={_container.style}>
                    <div className="label" style={_label.style}>Thursday</div>
                    <input type="text" value={values.Th.open.hour} style={_input.style} onChange={(e) => this.handleChange(e, ".Th.open.hour")} />
                    <input type="text" value={values.Th.open.minute} style={_input.style} onChange={(e) => this.handleChange(e, ".Th.open.minute")} />
                    <input type="text" value={values.Th.close.hour} style={_input.style} onChange={(e) => this.handleChange(e, ".Th.close.hour")} />
                    <input type="text" value={values.Th.close.minute} style={_input.style} onChange={(e) => this.handleChange(e, ".Th.close.minute")} />
                </div>
                <div className="container" style={_container.style}>
                    <div className="label" style={_label.style}>Friday</div>
                    <input type="text" value={values.Fr.open.hour} style={_input.style} onChange={(e) => this.handleChange(e, ".Fr.open.hour")} />
                    <input type="text" value={values.Fr.open.minute} style={_input.style} onChange={(e) => this.handleChange(e, ".Fr.open.minute")} />
                    <input type="text" value={values.Fr.close.hour} style={_input.style} onChange={(e) => this.handleChange(e, ".Fr.close.hour")} />
                    <input type="text" value={values.Fr.close.minute} style={_input.style} onChange={(e) => this.handleChange(e, ".Fr.close.minute")} />
                </div>
                <div className="container" style={_container.style}>
                    <div className="label" style={_label.style}>Saturday</div>
                    <input type="text" value={values.Sa.open.hour} style={_input.style} onChange={(e) => this.handleChange(e, ".Sa.open.hour")} />
                    <input type="text" value={values.Sa.open.minute} style={_input.style} onChange={(e) => this.handleChange(e, ".Sa.open.minute")} />
                    <input type="text" value={values.Sa.close.hour} style={_input.style} onChange={(e) => this.handleChange(e, ".Sa.close.hour")} />
                    <input type="text" value={values.Sa.close.minute} style={_input.style} onChange={(e) => this.handleChange(e, ".Sa.close.minute")} />
                </div>
                <div className="container" style={_container.style}>
                    <div className="label" style={_label.style}>Sunday</div>
                    <input type="text" value={values.Su.open.hour} style={_input.style} onChange={(e) => this.handleChange(e, ".Su.open.hour")} />
                    <input type="text" value={values.Su.open.minute} style={_input.style} onChange={(e) => this.handleChange(e, ".Su.open.minute")} />
                    <input type="text" value={values.Su.close.hour} style={_input.style} onChange={(e) => this.handleChange(e, ".Su.close.hour")} />
                    <input type="text" value={values.Su.close.minute} style={_input.style} onChange={(e) => this.handleChange(e, ".Su.close.minute")} />
                </div>
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardContentFormInputHours);