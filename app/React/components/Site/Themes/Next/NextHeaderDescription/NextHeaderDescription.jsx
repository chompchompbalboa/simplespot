/**
* NextHeaderDescription.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';


/**
* NextHeaderDescription
*
* @module NextHeaderDescription
*/
class NextHeaderDescription extends React.Component {

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
        div: React.PropTypes.object.isRequired
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        div: {
            text: "01 Work"
        }
    }

    /**
    * Settings for: _div
    *
    * @function _div
    * @return {object}
    */
    _div(div) {
        return {
            style: {
                fontFamily: "Merriweather, sans-serif",
                fontSize: "3vw",
                fontWeight: "300",
                letterSpacing: "0.25vw",
                textTransform: "uppercase",
                color: "rgba(187,187,187,1)",
                "@media (min-width: 40em)": {
                    display: "none"
                }
            },
            text: div.text
        }
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        var {div, ...other} = this.props;
        let _div = this._div(div);
        return (
            <div className="div" style={_div.style}>
                {_div.text}
            </div>
        )
    }    
}
// Export
module.exports = Radium(NextHeaderDescription);