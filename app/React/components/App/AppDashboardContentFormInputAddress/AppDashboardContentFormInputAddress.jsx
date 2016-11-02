/**
* AppDashboardContentFormInputAddress.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const contentActions = require('../../../actions/contentActions');

const fields = [
        "address",
        "city",
        "state",
        "zip"
];
/**
* AppDashboardContentFormInputAddress
*
* @module AppDashboardContentFormInputAddress
*/
class AppDashboardContentFormInputAddress extends React.Component {

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
                {key: change + ".address", value: this.address.value},
                {key: change + ".city", value: this.city.value},
                {key: change + ".state", value: this.state.value},
                {key: change + ".zip", value: this.zip.value}
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
        for (let i in fields) {
            let field = fields[i];
            payload[field] = eval("content." + key + "." + field)
        }
        return payload;
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
                    width: "50%",
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
    * Settings for: _address
    *
    * @function _address
    * @return {object}
    */
    _address(value) {
        return {
            style: {
                width: "100%",
                border: (value !== "" ? "1.5px solid black" : "1.5px solid red"),
            }
        }
    }

    /**
    * Settings for: _city
    *
    * @function _city
    * @return {object}
    */
    _city(value) {
        return {
            style: {
                margin: "0.5vh 0 0 0",
                width: "55%",
                border: (value !== "" ? "1.5px solid black" : "1.5px solid red"),
            }
        }
    }

    /**
    * Settings for: _zip
    *
    * @function _zip
    * @return {object}
    */
    _zip(value) {
        return {
            style: {
                margin: "0.5vh 0 0 0",
                width: "25%",
                border: (value !== "" ? "1.5px solid black" : "1.5px solid red"),
            }
        }
    }

    /**
    * Settings for: _state
    *
    * @function _state
    * @return {object}
    */
    _state(value) {
        return {
            style: {
                margin: "0.5vh 0 0 0",
                width: "10%",
                border: (value !== "" ? "1.5px solid black" : "1.5px solid red"),
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
        let _address = this._address(values.address);
        let _div = this._div();
        let _input = this._input();
        let _city = this._city(values.city);
        let _zip = this._zip(values.zip);
        let _state = this._state(values.state);
        return (
            <div className="div" style={_div.style}>
                <input type="text" ref={(c) => this.address = c} value={values.address} style={[_input.style, _address.style]} onChange={(e) => this.handleChange(e)} />
                <input type="text" ref={(c) => this.city = c} value={values.city} style={[_input.style, _city.style]} onChange={(e) => this.handleChange(e)} />
                <input type="text" ref={(c) => this.state = c} value={values.state} style={[_input.style, _state.style]} onChange={(e) => this.handleChange(e)} />
                <input type="text" ref={(c) => this.zip = c} value={values.zip} style={[_input.style, _zip.style]} onChange={(e) => this.handleChange(e)} />
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardContentFormInputAddress);