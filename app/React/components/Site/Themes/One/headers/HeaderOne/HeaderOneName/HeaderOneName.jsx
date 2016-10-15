/**
* HeaderOneName.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const contentActions = require('../../../../../../../actions/contentActions');

/**
* HeaderOneName
*
* @module HeaderOneName
*/
class HeaderOneName extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    /**
    * Validate the prop types
    *
    * @prop propTypes
    */
    static propTypes = {
        name: React.PropTypes.string.isRequired
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        name: "Your Restaurant"
    }

    /**
    * Handle Click
    *
    * @function handleClick
    */
    handleClick(e) {
        e.preventDefault();
        this.props.handleNewPageLoad();
        let changes = [
            {key: "site.display.path", value: "/"}
        ];
        contentActions.changeContent(changes);
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
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Josefin Sans, sans-serif",
                fontSize: "6.5vw",
                letterSpacing: "0.25vw",
                textTransform: "uppercase",
                color: "black",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    fontSize: "4vw"
                },
                "@media (min-width: 64em)": {
                    fontSize: "2.75vw",
                    fontWeight: "bold"
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
        var {name, ...other} = this.props;
        let _div = this._div();
        return (
            <a href="/" onClick={(e) => this.handleClick(e)}>
                <div className="div" style={_div.style}>
                    {name}
                </div>
            </a>
        )
    }    
}
// Export
module.exports = Radium(HeaderOneName);