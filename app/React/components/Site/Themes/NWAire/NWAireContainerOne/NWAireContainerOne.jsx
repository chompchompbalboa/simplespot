/**
* NWAireContainerOne.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* NWAireContainerOne
*
* @module NWAireContainerOne
*/
class NWAireContainerOne extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
        this.state = {
            containerActive: "one"
        }
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
    * Settings for: _background
    *
    * @function _background
    * @return {object}
    */
    _background() {
        let backgroundImage = "linear-gradient(to top, rgba(0,0,0,0.0), rgba(0,0,0,0.0)), url(/uploads/57b35f928bcb76f5d65e79fa/needle2.jpg)";
        return {
            style: {
                position: "absolute",
                width: "100vw",
                height: "100vh",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: backgroundImage,
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    width: "77.5"
                }
            }
        }
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
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
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
            width: "100vw",
            height: "100vh",
            style: {
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    width: "77.5vw"
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
        var {...other} = this.props;
        let _background = this._background(); 
        let _container = this._container(); 
        let _div = this._div(); 
        return (
            <div className="div" style={_div.style}>
                <div className="background" style={_background.style}></div>
            </div>
        )
    }    
}
// Export
module.exports = Radium(NWAireContainerOne);