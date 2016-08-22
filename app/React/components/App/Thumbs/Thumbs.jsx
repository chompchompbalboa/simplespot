/**
* Thumbs.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

var contentActions = require('../../../actions/contentActions');

/**
* Let's throw a party
*
* @module Thumbs
*/
class Thumbs extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props)
    }

    /**
    * Validate props types
    *
    * @prop propTypes
    * @return {object}
    */
    static propTypes = {
    }

    /**
    * Get the default props
    *
    * @function getDefaultProps
    * @return {object}
    */
    static defaultProps = {
    }

    /**
    * Handle Click
    *
    * @function handleClick
    * @return {object}
    */
    handleClick(e, response) {
        e.preventDefault();
        contentActions.generateRandom("restaurant");
    }

    /**
    * Settings for: _section
    *
    * @function _section
    * @return {object}
    */
    _section() {
        return {
            style: {
                position: "fixed",
                top: "95vh",
                left: "0vw",
                width: "10vw",
                height: "5vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "black"
            }
        }
    }

    /**
    * Settings for: _text
    *
    * @function _text
    * @return {object}
    */
    _text() {
        return {
            style: {
                margin: "0 1vw 0 1vw",
                color: "white",
                fontFamily: "titilliumlight",
                fontSize: "4vh",
                textTransform: "uppercase"
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
        var {...other} = this.props;
        let _section = this._section();
        let _text = this._text();
        return (
            <section className="section" style={_section.style}>
                <a href="" onClick={(e) => this.handleClick(e, "1")}>
                    <div className="yes" style={[_text.style]}>
                        1
                    </div>
                </a>
                <a href="" onClick={(e) => this.handleClick(e, "2")}>
                    <div className="no" style={[_text.style]}>
                        2
                    </div>
                </a>
                <a href="" onClick={(e) => this.handleClick(e, "2")}>
                    <div className="no" style={[_text.style]}>
                        3
                    </div>
                </a>
            </section>
        )
    }    
};
module.exports = Radium(Thumbs);