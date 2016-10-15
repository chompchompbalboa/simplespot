/**
* HeaderOne.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const contentActions = require('../../../../../../actions/contentActions');

const HeaderOneName = require('./HeaderOneName/HeaderOneName.jsx');
const HeaderOneLinks = require('./HeaderOneLinks/HeaderOneLinks.jsx');

/**
* HeaderOne
*
* @module HeaderOne
*/
class HeaderOne extends React.Component {

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
        location: React.PropTypes.shape({
            address: React.PropTypes.string.isRequired,
            locality: React.PropTypes.string.isRequired,
            name: React.PropTypes.string.isRequired,
            postalCode: React.PropTypes.string.isRequired,
            region: React.PropTypes.string.isRequired,
        }).isRequired,
        name: React.PropTypes.string.isRequired,
        phone: React.PropTypes.string.isRequired
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        location: {
            address: "400 Broad St.",
            locality: "Seattle",
            name: "Space Needle",
            postalCode: "98109",
            region: "WA"
        },
        name: "Your Restaurant",
        phone: "206-905-2100"
    }

    /**
    * Settings for: _container
    *
    * @function _container
    * @return {object}
    */
    _container() {
        return {
            style: {
                width: "90%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }
        }
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
                zIndex: "1000",
                position: "fixed",
                width: "100vw",
                height: "10vh",
                top: "0vh",
                backgroundColor: "white",
                transition: "top 0.5s ease",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    top: (this.props.dropdown ? "0vh" : "-11vh")
                },
                "@media (min-width: 64em)": {
                    top: (this.props.dropdown ? "0vh" : "-12vh"),
                    height: "12vh"
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
        var {handleNewPageLoad, location, name, phone, ...other} = this.props;
        let _div = this._div();
        let _container = this._container();
        return (
            <div className="div" style={_div.style}>
                <div className="container" style={_container.style}>
                    <HeaderOneName name={name} handleNewPageLoad={handleNewPageLoad} />
                    <HeaderOneLinks location={location} name={name} phone={phone} />
                </div>
            </div>
        )
    }    
}
// Export
module.exports = Radium(HeaderOne);