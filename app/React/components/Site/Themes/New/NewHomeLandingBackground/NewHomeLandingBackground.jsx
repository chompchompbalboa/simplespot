/**
* NewHomeLandingBackground.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* NewHomeLandingBackground
*
* @module NewHomeLandingBackground
*/
class NewHomeLandingBackground extends React.Component {

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
    * Settings for: _div
    *
    * @function _div
    * @return {object}
    */
    _div() {
        return {
            style: {
                zIndex: "-1",
                position: "absolute",
                top: "0vh",
                left: "0vw",
                width: "100%",
                height: "100%",
            }
        }
    }

    /**
    * Settings for: _image
    *
    * @function _image
    * @return {object}
    */
    _image() {
        return {
            style: {
                position: "absolute",
                top: "0vh",
                left: "0vw",
                width: "100%",
                height: "100%",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }
        }
    }

    /**
    * Settings for: _one
    *
    * @function _one
    * @return {object}
    */
    _one(activeNumber) {
        return {
            style: {
                backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/stock/restaurants/sushi/1.jpg)",
                zIndex: activeNumber === 1 ? "1" : "0",
                opacity: activeNumber === 1 ? "1" : "0.25",
                transition: "opacity 1.5s ease"
            }
        }
    }
    
    /**
    * Settings for: _two
    *
    * @function _two
    * @return {object}
    */
    _two(activeNumber) {
        return {
            style: {
                backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/stock/restaurants/sushi/2.jpg)",
                zIndex: activeNumber === 2 ? "1" : "0",
                opacity: activeNumber === 2 ? "1" : "0.25",
                transition: "opacity 1.5s ease"
            }
        }
    }
    
    /**
    * Settings for: _three
    *
    * @function _three
    * @return {object}
    */
    _three(activeNumber) {
        return {
            style: {
                backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/stock/restaurants/sushi/3.jpg)",
                zIndex: activeNumber === 3 ? "1" : "0",
                opacity: activeNumber === 3 ? "1" : "0.25",
                transition: "opacity 1.5s ease"
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
        var {activeNumber, site, ...other} = this.props;
        let _div = this._div(); 
        let _image = this._image();
        let _one = this._one(activeNumber);
        let _two = this._two(activeNumber);
        let _three = this._three(activeNumber);
        return (
            <div className="div" style={_div.style}>
                <div className="one" style={[_image.style, _one.style]}></div>
                <div className="two" style={[_image.style, _two.style]}></div>
                <div className="three" style={[_image.style, _three.style]}></div>
            </div>
        )
    }    
}
// Export
module.exports = Radium(NewHomeLandingBackground);