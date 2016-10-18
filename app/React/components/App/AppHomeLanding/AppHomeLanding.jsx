/**
* AppHomeLanding.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const AppHomeLandingHeader = require('../AppHomeLandingHeader/AppHomeLandingHeader.jsx');
const AppHomeLandingContent = require('../AppHomeLandingContent/AppHomeLandingContent.jsx');
const AppHomeLandingArrow = require('../AppHomeLandingArrow/AppHomeLandingArrow.jsx');

/**
* AppHomeLanding
*
* @module AppHomeLanding
*/
class AppHomeLanding extends React.Component {

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
    _div() {
        return {
            style: {
                postion: "relative",
                width: "100vw",
                height: "100vh",
                backgroundPostition: "center center",
                backgroundRepeat: "no repeat",
                backgroundSize: "cover",
                backgroundImage: "url(/assets/App/AppHomeLanding/background_0em.jpg)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Lato, sans-serif",
                fontWeight: "300",
                color: "white",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    backgroundImage: "url(/assets/App/AppHomeLanding/background_48em.jpg)",
                },
                "@media (min-width: 64em)": {
                    backgroundImage: "url(/assets/App/AppHomeLanding/background_64em.jpg)",
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
        let _div = this._div();
        return (
            <div style={_div.style}>
                <AppHomeLandingHeader />
                <AppHomeLandingContent />
                <AppHomeLandingArrow />
            </div>
        )
    }    
}
module.exports = Radium(AppHomeLanding);