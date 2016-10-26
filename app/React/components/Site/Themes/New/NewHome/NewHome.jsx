/**
* NewHome.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const NewHomeAbout = require('../NewHomeAbout/NewHomeAbout.jsx');
const NewHomeFooter = require('../NewHomeFooter/NewHomeFooter.jsx');
const NewHomeLanding = require('../NewHomeLanding/NewHomeLanding.jsx');
const NewHomeLocation = require('../NewHomeLocation/NewHomeLocation.jsx');
const NewHomeMenu = require('../NewHomeMenu/NewHomeMenu.jsx');

/**
* NewHome
*
* @module NewHome
*/
class NewHome extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
        this.state = {
            activeNumber: 1,
            activeModule: "home"
        };
        this.changeActiveNumber = this.changeActiveNumber.bind(this);
    }

    /**
    * Component Did Mount
    *
    * @function componentDidMount
    * @return {object}
    */
    componentDidMount() {
        window.setInterval(this.changeActiveNumber, 5000);
    }

    /**
    * Component Will Unmount
    *
    * @function componentWillUnmount
    * @return {object}
    */
    componentWillUnmount() {
        window.clearInterval(this.changeActiveNumber, 5000);
    }

    /**
    * Change Active Number
    *
    * @function changeActiveNumber
    * @return {object}
    */
    changeActiveNumber() {
        let next = this.state.activeNumber === 3 ? 1 : this.state.activeNumber + 1;
        this.setState({
            activeNumber: next
        })
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
                position: "relative",
                top: "0vh",
                left: "0vw",
                display: "flex",
                flexFlow: "column wrap",
                justifyContent: "flex-start",
                alignItems: "center",
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
                <NewHomeLanding activeModule={this.state.activeModule} activeNumber={this.state.activeNumber} site={site} />
                <NewHomeAbout activeModule={this.state.activeModule} activeNumber={this.state.activeNumber} site={site} />
                <NewHomeMenu activeModule={this.state.activeModule} activeNumber={this.state.activeNumber} site={site} />
                <NewHomeLocation activeModule={this.state.activeModule} activeNumber={this.state.activeNumber} site={site} />
                <NewHomeFooter activeModule={this.state.activeModule} activeNumber={this.state.activeNumber} site={site} />
            </div>
        )
    }    
}
// Export
module.exports = Radium(NewHome);