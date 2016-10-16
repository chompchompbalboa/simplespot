/**
* AppHomeContentImage.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* AppHomeContentImage
*
* @module AppHomeContentImage
*/
class AppHomeContentImage extends React.Component {

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
    * Settings for: _div
    *
    * @function _div
    * @return {object}
    */
    _div(height, width, url) {
        return {
            style: {
                margin: "7.5vh 0 5vh 0",
                width: width['0em'],
                height: height['0em'],
                backgroundPosition: "center center",
                backgroundRepeat: "no repeat",
                backgroundSize: "cover",
                backgroundImage: "url(" + url + ")",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    margin: "5vh 0 2.5vh 0",
                    width: width['48em'],
                    height: height['48em']
                },
                "@media (min-width: 64em)": {
                    order: this.props.order,
                    margin: "5vh 0 2.5vh 0",
                    width: width['64em'],
                    height: height['64em']
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
        let {height, width, url, ...other} = this.props;
        let _div = this._div(height, width, url);
        return (
            <div style={_div.style}></div>
        )
    }    
}
module.exports = Radium(AppHomeContentImage);