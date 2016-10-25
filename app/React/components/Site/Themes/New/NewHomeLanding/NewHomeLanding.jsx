/**
* NewHomeLanding.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const NewHomeLandingBackground = require('../NewHomeLandingBackground/NewHomeLandingBackground.jsx');
const NewHomeLandingContent = require('../NewHomeLandingContent/NewHomeLandingContent.jsx');
const NewHomeLandingMenu = require('../NewHomeLandingMenu/NewHomeLandingMenu.jsx');

/**
* NewHomeLanding
*
* @module NewHomeLanding
*/
class NewHomeLanding extends React.Component {

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
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexFlow: "column wrap",
                justifyContent: "center",
                alignItems: "center",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    flexFlow: "row wrap",
                    justifyContent: "flex-start",
                    alignItems: "flex-start"
                },
                "@media (min-width: 64em)": {
                    flexFlow: "row wrap",
                    justifyContent: "flex-start",
                    alignItems: "flex-start"
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
        var {site, ...other} = this.props;
        let _div = this._div(); 
        return (
            <div className="div" style={_div.style}>
                <NewHomeLandingBackground site={site} {...other} />
                <NewHomeLandingMenu site={site} {...other} />
                <NewHomeLandingContent site={site} {...other} />
            </div>
        )
    }    
}
// Export
module.exports = Radium(NewHomeLanding);