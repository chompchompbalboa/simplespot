/**
* NextHome.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const NextHeader = require('../NextHeader/NextHeader.jsx');
const NextFooter = require('../NextFooter/NextFooter.jsx');
const NextHomeIntro = require('../NextHomeIntro/NextHomeIntro.jsx');
const NextHomePortfolio = require('../NextHomePortfolio/NextHomePortfolio.jsx');

/**
* NextHome
*
* @module NextHome
*/
class NextHome extends React.Component {

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
        dockHeader: React.PropTypes.bool.isRequired,
        section: React.PropTypes.object.isRequired
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        dockHeader: false,
        section: {}
    }

    /**
    * Settings for: _section
    *
    * @function _section
    * @return {object}
    */
    _section(section) {
        return {
            style: {}
        }
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        var {dockHeader, section, ...other} = this.props;
        let _section = this._section(section);
        return (
            <section className="section" style={_section.style}>
                <NextHeader dockHeader={dockHeader} />
                <NextHomeIntro dockHeader={dockHeader} />
                <NextHomePortfolio dockHeader={dockHeader} />
                <NextFooter dockHeader={dockHeader} />
            </section>
        )
    }    
}
// Export
module.exports = Radium(NextHome);