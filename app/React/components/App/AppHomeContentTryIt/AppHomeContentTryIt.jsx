/**
* AppHomeTryIt.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* AppHomeTryIt
*
* @module AppHomeTryIt
*/
class AppHomeTryIt extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props)
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
    * Settings for: _a
    *
    * @function _a
    * @return {object}
    */
    _a() {
        return {
            style: {
                color: "black",
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
                margin: "-7.5vh 0 0 0",
                width: "100vw",
                height: "20vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Lato, sans-serif",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    margin: "-5vh 0 0 0",
                },
                "@media (min-width: 64em)": {
                    margin: "0 0 0 0",
                    order: this.props.order,
                    width: "40vw",
                    height: "40vh"
                }
            }
        }
    }

    /**
    * Settings for: _try
    *
    * @function _try
    * @return {object}
    */
    _try() {
        return {
            style: {
                padding: "2vh 15vw 2vh 15vw",
                border: "1px solid rgb(150,150,150)",
                fontSize: "3.5vw",
                fontWeight: "400",
                letterSpacing: "0.25vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    padding: "1.5vh 10vw 1.5vh 10vw",
                    fontSize: "1.75vw",
                    letterSpacing: "0.25vw",
                },
                "@media (min-width: 64em)": {
                    margin: "0 0 0 10vw",
                    padding: "2vh 5vw 2vh 5vw",
                    border: "1px solid black",
                    backgroundColor: "black",
                    color: "white",
                    fontWeight: "300",
                    fontSize: "1.25vw",
                    letterSpacing: "0.15vw"
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
        let {...other} = this.props;
        let _a = this._a();
        let _div = this._div();
        let _try = this._try();
        return (
            <div style={_div.style}>
                <a href="/try" style={_a.style}>
                    <div style={_try.style}>
                        GET STARTED
                    </div>
                </a>
            </div>
        )
    }    
}
module.exports = Radium(AppHomeTryIt);