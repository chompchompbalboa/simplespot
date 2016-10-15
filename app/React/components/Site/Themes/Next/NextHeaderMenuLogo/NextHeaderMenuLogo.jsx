/**
* NextHeaderMenuLogo.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';


/**
* NextHeaderMenuLogo
*
* @module NextHeaderMenuLogo
*/
class NextHeaderMenuLogo extends React.Component {

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
        div: {}
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
                margin: "0 4vw 0 0",
                cursor: "pointer",
                width: "4vh",
                height: "4vh",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundImage: "url(/uploads/5776dd982cb85ae0b1b350e7/menuLogo.png)",
                "@media (min-width: 44em) and (max-width: 64em)": {
                    margin: "0 6vw 0 0"
                },
                "@media (min-width: 64em)": {
                    margin: "0 10vw 0 0",
                    fontSize: "4vw"
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
        var {div, ...other} = this.props;
        let _div = this._div(div);
        return (
            <div className="div" style={_div.style}>
            </div>
        )
    }    
}
// Export
module.exports = Radium(NextHeaderMenuLogo);