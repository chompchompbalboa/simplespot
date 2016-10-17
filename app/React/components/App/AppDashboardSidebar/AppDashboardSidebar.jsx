/**
* AppDashboardSidebar.jsx
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
* AppDashboardSidebar
*
* @module AppDashboardSidebar
*/
class AppDashboardSidebar extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleSelectChange = this.handleSelectChange.bind(this);
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
    * Settings for: handleLinkClick
    *
    * @function handleLinkClick
    * @return {object}
    */
    handleLinkClick(e, path) {
        e.preventDefault();
        let changes = [
            {key: "app.display.path", value: path}
        ];
        contentActions.changeContent(changes);
    }

    /**
    * Settings for: handleSelectChange
    *
    * @function handleSelectChange
    * @return {object}
    */
    handleSelectChange(e) {
        e.preventDefault();
        let changes = [
            {key: "app.display.path", value: this.select.value}
        ];
        contentActions.changeContent(changes);
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
                width: "100vw",
                height: "6vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    height: "4vh",
                },
                "@media (min-width: 64em)": {
                    width: "15vw",
                    height: "90vh",
                    justifyContent: "flex-start",
                }
            }
        }
    }

    /**
    * Settings for: _divider
    *
    * @function _divider
    * @return {object}
    */
    _divider() {
        return {
            style: {
                height: "1px",
                width: "12.5vw"
            }
        }
    }

    /**
    * Settings for: _dividerContainer
    *
    * @function _dividerContainer
    * @return {object}
    */
    _dividerContainer() {
        return {
            style: {
                width: "12.5vw",
                height: "3vh",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center"
            }
        }
    }

    /**
    * Settings for: _linkContainer
    *
    * @function _linkContainer
    * @return {object}
    */
    _linkContainer() {
        return {
            style: {
                "@media (min-width: 48em)": {
                    width: "12.5vw",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }
            }
        }
    }

    /**
    * Settings for: _linkLogo
    *
    * @function _linkLogo
    * @return {object}
    */
    _linkLogo() {
        return {
            style: {
                width: "2vw",
                height: "2vw",
                backgroundPosition: "center center",
                backgroundRepeat: "no repeat",
                backgroundSize: "cover",
                "@media (min-width: 48em) and (max-width: 64em)": {

                },
                "@media (min-width: 64em)": {
                }
            }
        }
    }

    /**
    * Settings for: _linkText
    *
    * @function _linkText
    * @return {object}
    */
    _linkText() {
        return {
            style: {
                color: "black",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    margin: "0 0 0 1vw",
                    fontSize: "1.75vh"
                },
                "@media (min-width: 64em)": {
                    margin: "0 0 0 1vw",
                    fontSize: "2vh"
                }
            }
        }
    }

    /**
    * Settings for: _logoBilling
    *
    * @function _logoBilling
    * @return {object}
    */
    _logoBilling() {
        return {
            style: {
                backgroundImage: "url(/assets/App/icons/billing.png)",
            }
        }
    }

    /**
    * Settings for: _logoEdit
    *
    * @function _logoEdit
    * @return {object}
    */
    _logoEdit() {
        return {
            style: {
                backgroundImage: "url(/assets/App/icons/edit.png)",
            }
        }
    }

    /**
    * Settings for: _logoPreview
    *
    * @function _logoPreview
    * @return {object}
    */
    _logoPreview() {
        return {
            style: {
                backgroundImage: "url(/assets/App/icons/desktop.png)",
            }
        }
    }

    /**
    * Settings for: _logoProfile
    *
    * @function _logoProfile
    * @return {object}
    */
    _logoProfile() {
        return {
            style: {
                backgroundImage: "url(/assets/App/icons/profile.png)",
            }
        }
    }

    /**
    * Settings for: _mobileContainer
    *
    * @function _mobileContainer
    * @return {object}
    */
    _mobileContainer() {
        return {
            style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "@media (min-width: 48em)": {
                    display: "none"
                }
            }
        }
    }

    /**
    * Settings for: _mobileLinkLogo
    *
    * @function _mobileLinkLogo
    * @return {object}
    */
    _mobileLinkLogo(path) {
        let backgroundImage = "";
        switch (path) {
            case "/dashboard":
            case "/dashboard/preview":
                backgroundImage = "/assets/App/icons/desktop.png";
            break;
            case "/dashboard/edit":
                backgroundImage = "/assets/App/icons/edit.png";
            break;
            case "/dashboard/profile":
                backgroundImage = "/assets/App/icons/profile.png";
            break;
            case "/dashboard/billing":
                backgroundImage = "/assets/App/icons/billing.png";
            break;
        }
        return {
            style: {
                width: "4vh",
                height: "4vh",
                backgroundPosition: "center center",
                backgroundRepeat: "no repeat",
                backgroundSize: "cover",
                backgroundImage: "url(" + backgroundImage + ")"
            }
        }
    }

    /**
    * Settings for: _nonMobileContainer
    *
    * @function _nonMobileContainer
    * @return {object}
    */
    _nonMobileContainer() {
        return {
            style: {
                display: "none",
                letterSpacing: "0.125vw",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                },
                "@media (min-width: 64em)": {
                    margin: "2vh 0 0 0",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start"
                }
            }
        }
    }

    /**
    * Settings for: _select
    *
    * @function _select
    * @return {object}
    */
    _select() {
        return {
            style: {
                border: "none",
                backgroundColor: "transparent",
                margin: "0 0 0 3vw",
                fontFamily: "Lato",
                fontSize: "4vw",
                fontWeight: "300",
                letterSpacing: "0.25vw",
            }
        }
    }

    /**
    * Settings for: _selected
    *
    * @function _selected
    * @return {object}
    */
    _selected(path) {
        return {
            preview: (path === "/dashboard" || "/dasboard/preview" ? true : false),
            edit: (path === "/dasboard/edit" ? true : false),
            profile: (path === "/dasboard/profile" ? true : false),
            billing: (path === "/dasboard/billing" ? true : false)
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
        let _div = this._div();
        let _dividerContainer = this._dividerContainer();
        let _divider = this._divider();
        let _linkContainer = this._linkContainer();
        let _linkLogo = this._linkLogo();
        let _linkText = this._linkText();
        let _logoBilling = this._logoBilling();
        let _logoEdit = this._logoEdit();
        let _logoPreview = this._logoPreview();
        let _logoProfile = this._logoProfile();
        let _mobileContainer = this._mobileContainer();
        let _mobileLinkLogo = this._mobileLinkLogo(content.app.display.path);
        let _nonMobileContainer = this._nonMobileContainer();
        let _select = this._select();
        let _selected = this._selected(content.app.display.path);
        return (
            <div style={_div.style}>
                <div className="mobileContainer" style={_mobileContainer.style}>
                    <div className="mobileLinkLogo" style={_mobileLinkLogo.style}></div>
                    <select ref={(c) => this.select = c} style={_select.style} onChange={(e) => this.handleSelectChange(e)}>
                        <option value="/dashboard/preview" selected={_selected.preview}>Preview</option>
                        <option value="/dashboard/edit" selected={_selected.edit}>Edit</option>
                        <option value="/dashboard/profile" selected={_selected.profile}>Profile</option>
                        <option value="/dashboard/billing" selected={_selected.billing}>Billing</option>
                    </select>
                </div>
                <div className="nonMobileContainer" style={_nonMobileContainer.style}>
                    <a href="/dasboard/preview" onClick={(e) =>this.handleLinkClick(e, "/dashboard/preview")}>
                        <div className="linkContainer" style={[_linkContainer.style]}>
                            <div className="linkLogo" style={[_linkLogo.style, _logoPreview.style]}></div>
                            <div className="linkText" style={_linkText.style}>Preview</div>
                        </div>
                    </a>
                    <div className="dividerContainer" style={_dividerContainer.style}><div className="divider" style={_divider.style}></div></div>
                    <a href="/dasboard/edit" onClick={(e) =>this.handleLinkClick(e, "/dashboard/edit")}>
                        <div className="linkContainer" style={[_linkContainer.style]}>
                            <div className="linkLogo" style={[_linkLogo.style, _logoEdit.style]}></div>
                            <div className="linkText" style={_linkText.style}>Edit</div>
                        </div>
                    </a>
                    <div className="dividerContainer" style={_dividerContainer.style}><div className="divider" style={_divider.style}></div></div>
                    <a href="/dasboard/profile" onClick={(e) =>this.handleLinkClick(e, "/dashboard/profile")}>
                        <div className="linkContainer" style={[_linkContainer.style]}>
                            <div className="linkLogo" style={[_linkLogo.style, _logoProfile.style]}></div>
                            <div className="linkText" style={_linkText.style}>Profile</div>
                        </div>
                    </a>
                    <div className="dividerContainer" style={_dividerContainer.style}><div className="divider" style={_divider.style}></div></div>
                    <a href="/dasboard/billing" onClick={(e) =>this.handleLinkClick(e, "/dashboard/billing")}>
                        <div className="linkContainer" style={[_linkContainer.style]}>
                            <div className="linkLogo" style={[_linkLogo.style, _logoBilling.style]}></div>
                            <div className="linkText" style={_linkText.style}>Billing</div>
                        </div>
                    </a>
                </div>
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardSidebar);