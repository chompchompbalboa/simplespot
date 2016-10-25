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
        "address1",
        "locality",
        "region",
        "postal_code"
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
                {key: change + ".address1", value: this.address1.value},
                {key: change + ".locality", value: this.locality.value},
                {key: change + ".region", value: this.region.value},
                {key: change + ".postal_code", value: this.postalCode.value}
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
    * Settings for: _address1
    *
    * @function _address1
    * @return {object}
    */
    _address1(value) {
        return {
            style: {
                width: "100%",
                border: (value !== "" ? "1.5px solid black" : "1.5px solid red"),
            }
        }
    }

    /**
    * Settings for: _locality
    *
    * @function _locality
    * @return {object}
    */
    _locality(value) {
        return {
            style: {
                margin: "0.5vh 0 0 0",
                width: "55%",
                border: (value !== "" ? "1.5px solid black" : "1.5px solid red"),
            }
        }
    }

    /**
    * Settings for: _postalCode
    *
    * @function _postalCode
    * @return {object}
    */
    _postalCode(value) {
        return {
            style: {
                margin: "0.5vh 0 0 0",
                width: "25%",
                border: (value !== "" ? "1.5px solid black" : "1.5px solid red"),
            }
        }
    }

    /**
    * Settings for: _region
    *
    * @function _region
    * @return {object}
    */
    _region(value) {
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
        let _address1 = this._address1(values.address1);
        let _div = this._div();
        let _input = this._input();
        let _locality = this._locality(values.locality);
        let _postalCode = this._postalCode(values.postal_code);
        let _region = this._region(values.region);
        return (
            <div className="div" style={_div.style}>
                <input type="text" ref={(c) => this.address1 = c} value={values.address1} style={[_input.style, _address1.style]} onChange={(e) => this.handleChange(e)} />
                <input type="text" ref={(c) => this.locality = c} value={values.locality} style={[_input.style, _locality.style]} onChange={(e) => this.handleChange(e)} />
                <input type="text" ref={(c) => this.region = c} value={values.region} style={[_input.style, _region.style]} onChange={(e) => this.handleChange(e)} />
                <input type="text" ref={(c) => this.postalCode = c} value={values.postal_code} style={[_input.style, _postalCode.style]} onChange={(e) => this.handleChange(e)} />
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardContentFormInputAddress);