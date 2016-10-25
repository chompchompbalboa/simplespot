/**
* AppDashboardContentFormSubmit.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const contentActions = require('../../../actions/contentActions');

/**
* AppDashboardContentFormSubmit
*
* @module AppDashboardContentFormSubmit
*/
class AppDashboardContentFormSubmit extends React.Component {

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
    * Settings for: handleClick
    *
    * @function handleClick
    * @return {object}
    */
    handleClick(e) {
        let processingChanges = [
            {key: "app.messages.submit", value: "Processing..."}
        ];
        contentActions.changeContent(processingChanges);
        switch(this.props.submit.onSubmit.action.type) {
            case "fetch":
                let request = this.props.submit.onSubmit.action.request;
                let data = {};
                for (let i in this.props.inputs) {
                    let input = this.props.inputs[i];
                    let dataKey = input.props.onSubmit.dataKey;
                    let contentKey = input.props.contentKey;
                    data[dataKey] = eval("this.props.content." + input.props.contentKey);
                }
                contentActions.fetchContent(request, data);
            break;
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
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    cursor: "pointer",
                    margin: "3vh 0 0 0",
                    padding: "2vh 1vw",
                    fontFamily: "Lato, sans-serif",
                    fontWeight: "300",
                    fontSize: "1.5vh",
                    letterSpacing: "0.125vw",
                    backgroundColor: "rgb(36,41,67)",
                    color: "white"
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
        let {inputs, submit, ...other} = this.props;
        let _div = this._div();
        return (
            <div style={_div.style} onClick={(e) => this.handleClick(e)}>
                {submit.text}
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardContentFormSubmit);