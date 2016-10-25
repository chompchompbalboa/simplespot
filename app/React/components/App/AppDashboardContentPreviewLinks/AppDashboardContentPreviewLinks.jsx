/**
* AppDashboardContentPreviewLinks.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* AppDashboardContentPreviewLinks
*
* @module AppDashboardContentPreviewLinks
*/
class AppDashboardContentPreviewLinks extends React.Component {

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
    * Settings for: _a
    *
    * @function _a
    * @return {object}
    */
    _a() {
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
    * Settings for: _container
    *
    * @function _container
    * @return {object}
    */
    _container() {
        return {
            style: {
                cursor: "pointer",
                margin: "0 3vw 0 0",
                padding: "2vh 1vw",
                fontFamily: "Lato, sans-serif",
                fontWeight: "300",
                fontSize: "1.5vh",
                letterSpacing: "0.125vw",
                backgroundColor: "rgb(36,41,67)",
                color: "white",
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
            style: {
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
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
        let {content, ...other} = this.props;
        let _a = this._a();
        let _container = this._container();
        let _div = this._div();
        let preview = content.app.inputs.AppDashboardContentPreview.preview;
        let website = content.app.inputs.AppDashboardContentPreview.website;
        return (
            <div style={_div.style}>
                <a target="_blank" href={website} style={_a.style}>
                    <div className="container" style={_container.style}>
                        WEBSITE
                    </div>
                </a>
                <a target="_blank" href={preview} style={_a.style}>
                    <div className="container" style={_container.style}>
                        PREVIEW
                    </div>
                </a>
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardContentPreviewLinks);