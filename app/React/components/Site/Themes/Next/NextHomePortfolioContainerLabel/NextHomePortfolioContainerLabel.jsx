/**
* NextPortfolioContainerLabel.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* NextPortfolioContainerLabel
*
* @module NextPortfolioContainerLabel
*/
class NextPortfolioContainerLabel extends React.Component {

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
        div: React.PropTypes.object.isRequired,
        label: React.PropTypes.string.isRequired
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        div: {},
        label: "Label"
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
                zIndex: "2",
                position: "relative",
                top: "0vh",
                left: "5%",
                width: "90%",
                fontFamily: "Merriweather, serif",
                fontWeight: "900",
                fontSize: "10vw",
                whiteSpace: "nowrap",
                letterSpacing: "0.75vw",
                textTransform: "uppercase",
                color: "rgba(255,0,0,0.65)",
                textAlign: "right",
                transform: "translateY(50%)",
                "@media (min-width: 56em)": {
                    fontSize: "7vw"
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
    _label(label) {
        return label;
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        var {div, label, ...other} = this.props;
        let _div = this._div(div);
        let _label = this._label(label);
        return (
            <div className="div" style={_div.style}>
                {_label}
            </div>
        )
    }    
}
// Export
module.exports = Radium(NextPortfolioContainerLabel);