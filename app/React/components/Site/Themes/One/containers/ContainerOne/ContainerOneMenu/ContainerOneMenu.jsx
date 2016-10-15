/**
* OneContainerMenu.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const ContainerOneMenuHeaders = require('../ContainerOneMenuHeaders/ContainerOneMenuHeaders.jsx');
const ContainerOneMenuItems = require('../ContainerOneMenuItems/ContainerOneMenuItems.jsx');
/**
* OneContainerMenu
*
* @module OneContainerMenu
*/
class OneContainerMenu extends React.Component {

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
        headers: {
            menu: "",
            section: "",
            subsection: "",
        },
        height: {
            "0em": 50,
            "48em": 50,
            "64em": 50
        },
        items: {
            "1": {
                description: "A brief description of this menu item",
                price: "5.00",
                name: "An Item"
            }
        },
        width: {
            "0em": 100,
            "48em": 100,
            "64em": 100
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
                fontFamily: "Open Sans, sans-serif",
                marginTop: marginTops['0em'][item],
                width: width['0em'] + "vw",
                backgroundColor: "rgb(" + backgroundColor + ")",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    marginTop: marginTops['48em'][item],
                    width: width['48em'] + "vw"
                },
                "@media (min-width: 64em)": {
                    marginTop: marginTops['64em'][item],
                    width: width['64em'] + "vw"
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
        var {backgroundColor, headers, height, item, items, marginTops, width, ...other} = this.props;
        let _div = this._div(backgroundColor, height, item, marginTops, width);
        return (
            <div className="div" style={_div.style}>
                <ContainerOneMenuHeaders headers={headers} />
                <ContainerOneMenuItems items={items} />
            </div>
        )
    }    
}
// Export
module.exports = Radium(OneContainerMenu);