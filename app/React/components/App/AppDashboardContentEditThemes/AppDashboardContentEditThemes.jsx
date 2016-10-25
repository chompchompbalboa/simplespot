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

const AppDashboardContentEditThemesTheme = require('../AppDashboardContentEditThemesTheme/AppDashboardContentEditThemesTheme.jsx');

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
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    margin: "4vh 0 0 0",
                    width: "90%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start"
                }
            }
        }
    }

    /**
    * Settings for: _largeText
    *
    * @function _largeText
    * @return {object}
    */
    _largeText() {
        return {
            style: {
                fontFamily: "Lato, sans-serif",
                fontWeight: "700",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    fontSize: "1.35vw"
                }
            }
        }
    }

    /**
    * Settings for: _themesContainer
    *
    * @function _themesContainer
    * @return {object}
    */
    _themesContainer() {
        return {
            style: {
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    width: "100%",
                    display: "flex",
                    flexFlow: "row wrap",
                    justifyContent: "flex-start",
                    alignItems: "center"
                }
            }
        }
    }

    /**
    * Settings for: __themes
    *
    * @function __themes
    * @return {object}
    */
    __themes(active, themes) {
        let payload = [];
        for (let i in themes) {
            let theme = themes[i];
            payload.push(
                <AppDashboardContentEditThemesTheme
                    key={i}
                    active={theme.name === active ? true : false}
                    name={theme.name}
                    href={theme.href}
                    image={theme.image}
                />
            );
        }
        return payload;
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        let {content, themes, ...other} = this.props;
        let _div = this._div();
        let _largeText = this._largeText();
        let _themesContainer = this._themesContainer();
        let __themes = this.__themes(content.app.editing.theme, themes);
        return (
            <div style={_div.style}>
                <div className="largeText" style={_largeText.style}>Choose your theme:</div>
                <div className="themesContainer" style={_themesContainer.style}>
                    {__themes}
                </div>
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardContentEditThemes);