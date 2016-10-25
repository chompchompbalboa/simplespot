/**
* AppDashboardContentEditThemes.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const contentActions = require('../../../actions/contentActions');

/**
* AppDashboardContentEditThemes
*
* @module AppDashboardContentEditThemes
*/
class AppDashboardContentEditThemes extends React.Component {

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
        active: React.PropTypes.bool.isRequired,
        href: React.PropTypes.string.isRequired,
        image: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
    }

    /**
    * Handle Click
    *
    * @function handleClick
    * @return {object}
    */
    handleClick(e, name) {
        let changes = [
            {key: "app.editing.theme", value: name}
        ];
        contentActions.changeContent(changes);
    }

    /**
    * Settings for: _a
    *
    * @function _a
    * @return {object}
    */
    _a(active, href) {
        return {
            href: href,
            style: {
                color: "black",
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
    _div(active) {
        return {
            style: {
                margin: "3vh 3vw 0 0",
                cursor: "pointer",
                padding: "1vh 0.5vw",
                color: "black",
                backgroundColor: (active ? "white" : "transparent"),
                width: "12.5vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid black",
                borderRadius: "3px",
                boxShadow: "1px 1px 0.5px black",
                ":hover": {
                    backgroundColor: "white"
                }
            }
        }
    }

    /**
    * Settings for: _header
    *
    * @function _header
    * @return {object}
    */
    _header() {
        return {
            style: {
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    width: "90%",
                    height: "3vh",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }
            }
        }
    }

    /**
    * Settings for: _image
    *
    * @function _image
    * @return {object}
    */
    _image(image) {
        return {
            style: {
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: "url(" + image + ")",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    width: "90%",
                    height: "7vw"
                }
            }
        }
    }

    /**
    * Settings for: _link
    *
    * @function _link
    * @return {object}
    */
    _link() {
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
    * Settings for: _name
    *
    * @function _name
    * @return {object}
    */
    _name(name) {
        return {
            style: {
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    fontWeight: "700",
                    textTransform: "uppercase"
                }
            },
            text: name
        }
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        let {active, href, image, name, ...other} = this.props;
        let _a = this._a(active, href);
        let _div = this._div(active);
        let _header = this._header();
        let _image = this._image(image);
        let _link = this._link();
        let _name = this._name(name);
        return (
            <div className="div" style={_div.style}>
                <div className="header" style={_header.style}>
                    <div className="name" style={_name.style}>{_name.text}</div>
                    <a target="_blank" href={_a.href} style={_a.style}>
                        <div className="link" style={_link.style}>View</div>
                    </a>
                </div>
                <div className="_image" style={_image.style} onClick={(e) => this.handleClick(e, name)}></div>
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardContentEditThemes);