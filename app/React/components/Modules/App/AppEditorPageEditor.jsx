/**
* AppEditorPageEditor.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

var EditPersonalWelcome = require('../Edit/Modules/EditPersonalWelcome.jsx');

/**
* This module renders the the welcome message the app editor
*
* @module AppEditorPageEditor
*/
var AppEditorPageEditor = React.createClass({

    /**
    * Validate props types
    *
    * @prop propTypes
    * @return {object}
    */
    propTypes: {
    },

    /**
    * Get the default props
    *
    * @function getDefaultProps
    * @return {object}
    */
    getDefaultProps: function() {
        return {
            section: {
                style: {}
            }
        }
    },

    /**
    * Settings for: _arrow
    *
    * @function _arrow
    * @return {object}
    */
    _arrow: function() {
        return {
            style: {
                both: {
                    width: "4vw",
                    height: "4vw",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundImage: "url(assets/App/Modules/AppEditorPageEditor/arrow.png)"
                },
                left: {
                    transform: "scaleX(-1)"
                },
                right: {
                }
            }
        }
    },

    /**
    * Settings for: _arrowContainer
    *
    * @function _arrowContainer
    * @return {object}
    */
    _arrowContainer: function() {
        return {
            style: {
                both: {
                    width: "7vw",
                    height: "35vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                },
                left: {
                },
                right: {
                }
            }
        }
    },

    /**
    * Settings for: _arrowDisplayChanges
    *
    * @function _arrowDisplayChanges
    * @return {object}
    */
    _arrowDisplayChanges: function(arrow, current, page) {
        current = Number(current);
        let moduleCount = Object.keys(page).length;
        let newValue;
        let displayChange = [
            {key: "app.AppEditor.AppEditorPageEditor.active", value: "placeholder"}
        ];
        switch (arrow) {
            case "left":
                if(current - 1 === 0) {
                    newValue = moduleCount + "";
                }
                else {
                    newValue = current - 1 + "";
                }
            break;
            case "right": 
                if(current + 1 > moduleCount) {
                    newValue = "1";
                }
                else {
                    newValue = current + 1 + "";
                }
            break;
        }
        displayChange[0]['value'] = newValue;
        return displayChange;
    },

    /**
    * Settings for: _propsEditor
    *
    * @function _propsEditor
    * @return {object}
    */
    _propsEditor: function() {
        return {
            style: {
                width: "100%",
                minHeight: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center"
            }
        }
    },

    /**
    * Settings for: _propsEditorContainer
    *
    * @function _propsEditorContainer
    * @return {object}
    */
    _propsEditorContainer: function() {
        return {
            style: {
                width: "86vw",
                height: "35vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflowY: "scroll"
            }
        }
    },

    /**
    * Settings for: __propsEditorModules
    *
    * @function __propsEditorModules
    * @return {object}
    */
    __propsEditorModules: function(current, display, modules, path, site, utils) {
        let payload = [];
        let module = modules[current];
        let prefix = path + "." + current + ".props.";
        let editor = eval("Edit" + module.module);
        payload.push(
            React.createElement(
                // TO DO - Whitelist
                editor,
                {
                    key: "editor-" + current,
                    display: display,
                    prefix: prefix,
                    site: site,
                    utils: utils
                },
            )
        );
        return payload;
    },

    /**
    * Settings for: _section
    *
    * @function _section
    * @return {object}
    */
    _section: function() {
        return {
            style: {
                width: "100vw",
                height: "35vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }
        }
    },

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render: function() {
        var {display, site, utils, ...other} = this.props;
        let path = display.site.path;
        let page = site.versions.active.pages[path];
        let currentEditor = display.app.AppEditor.AppEditorPageEditor.active;
        let _arrow = this._arrow();
        let _arrowContainer = this._arrowContainer();
        let _arrowDisplayChangesLeft = this._arrowDisplayChanges("left", currentEditor, page);
        let _arrowDisplayChangesRight = this._arrowDisplayChanges("right", currentEditor, page);
        let _section = this._section();
        let _propsEditor = this._propsEditor();
        let _propsEditorContainer = this._propsEditorContainer();
        let __propsEditorModule = this.__propsEditorModules(currentEditor, display, page, path, site, utils);

        return (
            <section className="section" style={[_section.style]}>
                <a href="/edit" onClick={(e) => utils.displayHandler.internalLinkClick(e, _arrowDisplayChangesLeft)}>
                    <div className="leftArrowContainer" style={[_arrowContainer.style.both, _arrowContainer.style.left]}>
                        <div className="arrow" style={[_arrow.style.both, _arrow.style.left]}></div>
                    </div>
                </a>
                <div className="propsEditorContainer" style={[_propsEditorContainer.style]}>
                    <div className="propsEditor" style={[_propsEditor.style]}>
                        {__propsEditorModule}
                    </div>
                </div>
                <a href="/edit" onClick={(e) => utils.displayHandler.internalLinkClick(e, _arrowDisplayChangesRight)}>
                    <div className="rightArrowContainer" style={[_arrowContainer.style.both, _arrowContainer.style.right]}>
                        <div className="arrow" style={[_arrow.style.both, _arrow.style.right]}></div>
                    </div>
                </a>
            </section>
        )
    }    
});
module.exports = Radium(AppEditorPageEditor);