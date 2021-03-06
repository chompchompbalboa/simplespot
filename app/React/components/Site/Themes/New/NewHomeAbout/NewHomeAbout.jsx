/**
* NewHomeAbout.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const NewHomeAboutContact = require('../NewHomeAboutContact/NewHomeAboutContact.jsx');
const NewHomeAboutHours = require('../NewHomeAboutHours/NewHomeAboutHours.jsx');
const NewHomeAboutWelcome = require('../NewHomeAboutWelcome/NewHomeAboutWelcome.jsx');

/**
* NewHomeAbout
*
* @module NewHomeAbout
*/
class NewHomeAbout extends React.Component {

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
                order: "2",
                width: "100vw",
                display: "flex",
                flexFlow: "column wrap",
                justifyContent: "flex-start",
                alignItems: "center",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    flexFlow: "row wrap",
                    justifyContent: "center",
                    alignItems: "flex-start"
                },
                "@media (min-width: 64em)": {
                    padding: "15vh 0 0 0",
                    flexFlow: "row wrap",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
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
            <div id="about" className="div" style={_div.style}>
                <NewHomeAboutWelcome site={site} {...other} />
                <NewHomeAboutHours site={site} {...other} />
                <NewHomeAboutContact site={site} {...other} />
            </div>
        )
    }    
}
// Export
module.exports = Radium(NewHomeAbout);