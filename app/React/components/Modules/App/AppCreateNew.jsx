/**
* AppCreateNew.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

/**
* This module renders the the welcome message the app editor
*
* @module AppCreateNew
*/
var AppCreateNew = React.createClass({

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
        }
    },

    /**
    * Get the default props
    *
    * @function getInitialState
    * @return {object}
    */
    getInitialState: function() {
        return {
            themeList: {
                value: ""
            },
            urlInput: {
                value: ""
            }
        }
    },

    /**
    * Settings for: formValueChange
    *
    * @function formValueChange
    * @return {object}
    */
    formValueChange: function(e, source) {
        switch (source) {
            case "themeList": 
                this.setState({
                    themeList: {
                        value: e.target.value
                    },
                    urlInput: {
                        value: this.state.urlInput.value
                    }
                });
            break;
            case "urlInput":
                this.setState({
                    themeList: {
                        value: this.state.themeList.value
                    },
                    urlInput: {
                        value: e.target.value
                    }
                });
            break;
        }
    },

    /**
    * Settings for: _container
    *
    * @function _container
    * @return {object}
    */
    _container: function() {
        return {
            style: {
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }
        }
    },

    /**
    * Settings for: _themeList
    *
    * @function _themeList
    * @return {object}
    */
    _themeList: function(themeList) {
        return {
            placeholder: "Theme",
            style: {
                margin: "0.5vh 0 0.5vh 0",
                padding: "0.5vw",
                width: "100%",
                height: "3vh",
                color: "black",
                backgroundColor: "transparent",
                borderTop: "none",
                borderRight: "none",
                borderBottom: "1px solid black",
                borderLeft: "none",
                borderRadius: "none",
                fontFamily: "titilliumlight",
                fontSize: "2vh"
            },
            value: themeList.value
        }
    },

    /**
    * Settings for: _form
    *
    * @function _form
    * @return {object}
    */
    _form: function() {
        return {
            style: {
                width: "75%",
                height: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }
        }
    },

    /**
    * Settings for: _formContainer
    *
    * @function _formContainer
    * @return {object}
    */
    _formContainer: function() {
        return {
            style: {
                width: "50%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }
        }
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
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }
        }
    },

    /**
    * Settings for: _submit
    *
    * @function _submit
    * @return {object}
    */
    _submit: function() {
        return {
            style: {
                cursor: "pointer",
                margin: "0.5vh 0 0.5vh 0",
                width: "100%",
                height: "3vh",
                color: "black",
                backgroundColor: "transparent",
                border: "1px solid black",
                borderRadius: "none",
                fontFamily: "titilliumlight",
                fontSize: "2vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                ":hover": {
                    color: "white",
                    backgroundColor: "black"
                }
            }
        }
    },

    /**
    * Settings for: _urlInput
    *
    * @function _urlInput
    * @return {object}
    */
    _urlInput: function(urlInput) {
        return {
            placeholder: "URL",
            style: {
                margin: "0.5vh 0 0.5vh 0",
                padding: "0.5vw",
                width: "100%",
                height: "3vh",
                color: "black",
                backgroundColor: "transparent",
                borderTop: "none",
                borderRight: "none",
                borderBottom: "1px solid black",
                borderLeft: "none",
                fontFamily: "titilliumlight",
                fontSize: "2vh"
            },
            value: urlInput.value
        }
    },

    /**
    * Settings for: __themes
    *
    * @function __themes
    * @return {object}
    */
    __themes: function(themes) {
        let payload = [];
        for (let i in themes) {
            let theme = themes[i];
            payload.push(
                <option key={i} value={theme}>{theme}</option>
            );
        }
        return payload;
    },

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render: function() {
        var {app, utils, ...other} = this.props;
        let _container = this._container();
        let _themeList = this._themeList(this.state.themeList);
        let _form = this._form();
        let _formContainer = this._formContainer();
        let _section = this._section();
        let _submit = this._submit();
        let _urlInput = this._urlInput(this.state.urlInput);
        let __themes = this.__themes(app.themes);
        return (
            <div className="container" style={_container.style}>
                <div className="formContainer" style={_formContainer.style}>
                    <form style={_form.style} onSubmit={(e) => utils.appHandler.fetchNewSite(e, _themeList.value, _urlInput.value)} >
                        <input type="text" style={_urlInput.style} value={_urlInput.value} placeholder={_urlInput.placeholder} onChange={(e) => this.formValueChange(e, "urlInput")} />
                        <input type="text" style={_themeList.style} list="themes" value={_themeList.value} placeholder={_themeList.placeholder} onChange={(e) => this.formValueChange(e, "themeList")} />
                        <datalist id="themes">
                            {__themes}
                        </datalist>
                        <input type="submit" style={_submit.style} />
                    </form>
                </div>
            </div>
        )
    }    
});
module.exports = Radium(AppCreateNew);