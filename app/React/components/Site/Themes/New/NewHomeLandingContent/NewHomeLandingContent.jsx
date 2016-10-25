/**
* NewHomeLandingContent.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const NewHomeLandingContentSide = require('../NewHomeLandingContentSide/NewHomeLandingContentSide.jsx');
const NewHomeLandingContentMain = require('../NewHomeLandingContentMain/NewHomeLandingContentMain.jsx');

/**
* NewHomeLandingContent
*
* @module NewHomeLandingContent
*/
class NewHomeLandingContent extends React.Component {

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
                margin: "32.5vh 0 0 0",
                width: "85vw",
                height: "60vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                color: "white",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    flexDirection: "row"
                },
                "@media (min-width: 64em)": {
                    flexDirection: "row"
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
                <NewHomeLandingContentSide site={site} {...other} />
                <NewHomeLandingContentMain site={site} {...other} />
            </div>
        )
    }    
}
// Export
module.exports = Radium(NewHomeLandingContent);