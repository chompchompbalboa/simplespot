/**
* NewHomeMenuImages.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const NewHomeMenuImagesImage = require('../NewHomeMenuImagesImage/NewHomeMenuImagesImage.jsx');

/**
* NewHomeMenuImages
*
* @module NewHomeMenuImages
*/
class NewHomeMenuImages extends React.Component {

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
                position: "absolute",
                top: "0vh",
                left: "0vw",
                width: "50vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
            }
        }
    }

    /**
    * Settings for: __images
    *
    * @function __images
    * @return {object}
    */
    __images() {
        let count = 30;
        let image = 5;
        let payload = [];
        for (let i = 5; i < count; i++) {
            image = (image > 19 ? 1 : image + 1);
            payload.push(
                <NewHomeMenuImagesImage
                    key={i}
                    count={image}
                />
            )
        }
        return payload;
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        var {site, ...other} = this.props;
        let _div = this._div(); 
        let __images = this.__images();
        return (
            <div className="div" style={_div.style}>
                {__images}
            </div>
        )
    }    
}
// Export
module.exports = Radium(NewHomeMenuImages);