/**
* NewHomeMenuImagesImage.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* NewHomeMenuImagesImage
*
* @module NewHomeMenuImagesImage
*/
class NewHomeMenuImagesImage extends React.Component {

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
    _div(count) {
        let odd = (count % 2 == 0 ? false : true);
        return {
            style: {
                zIndex: "-10",
                margin: (odd ? "12vh 0 12vh 25vw" : "12vh 0 12vh -50vw"),
                height: "60vh",
                width: "150vw",
                opacity: "0.25",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: "radial-gradient(ellipse closest-side, rgba(0,0,0,0), rgba(255,255,255,0.25) 10%, rgba(255,255,255,0.5) 30%, rgba(255,255,255,1)), url(/stock/restaurants/sushi/" + count + ".jpg)",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    width: "100vw",
                    height: "80vh",
                    opacity: "0.6",
                    margin: "20vh 0 20vh -50vw",
                    backgroundImage: "radial-gradient(ellipse closest-side, rgba(0,0,0,0), rgba(255,255,255,0.25) 10%, rgba(255,255,255,0.5) 30%, rgba(255,255,255,1)), url(/stock/restaurants/sushi/" + count + ".jpg)",
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
        var {count, ...other} = this.props;
        let _div = this._div(count); 
        return (
            <div className="div" style={_div.style}>
            </div>
        )
    }    
}
// Export
module.exports = Radium(NewHomeMenuImagesImage);