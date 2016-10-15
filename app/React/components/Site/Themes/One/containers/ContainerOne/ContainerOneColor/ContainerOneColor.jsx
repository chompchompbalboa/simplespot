/**
* OneContainerColor.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';


/**
* OneContainerColor
*
* @module OneContainerColor
*/
class OneContainerColor extends React.Component {

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
        backgroundColor: React.PropTypes.string.isRequired,
        height: React.PropTypes.shape({
            "0em": React.PropTypes.number.isRequired,
            "48em": React.PropTypes.number.isRequired,
            "64em": React.PropTypes.number.isRequired
        }).isRequired,
        width: React.PropTypes.shape({
            "0em": React.PropTypes.number.isRequired,
            "48em": React.PropTypes.number.isRequired,
            "64em": React.PropTypes.number.isRequired
        }).isRequired
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        backgroundColor: "255,255,255",
        height: {
            "0em": 50,
            "48em": 50,
            "64em": 50
        },
        width: {
            "0em": 100,
            "48em": 100,
            "64em": 50
        }
    }

    /**
    * Settings for: _div
    *
    * @function _div
    * @return {object}
    */
    _div(backgroundColor, height, item, marginTops, width) {
        return {
            style: {
                marginTop: marginTops['0em'][item],
                width: width['0em'] + "vw",
                height: height['0em'] + "vh",
                backgroundColor: "rgb(" + backgroundColor + ")",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    marginTop: marginTops['48em'][item],
                    width: width['48em'] + "vw",
                    height: height['48em'] + "vh"
                },
                "@media (min-width: 64em)": {
                    marginTop: marginTops['64em'][item],
                    width: width['64em'] + "vw",
                    height: height['64em'] + "vh"
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
        var {backgroundColor, height, item, marginTops, width, ...other} = this.props;
        let _div = this._div(backgroundColor, height, item, marginTops, width);
        return (
            <div className="div" style={_div.style}>
            </div>
        )
    }    
}
// Export
module.exports = Radium(OneContainerColor);