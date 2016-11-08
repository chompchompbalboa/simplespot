/**
* AppDashboardContentInvitations.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const contentActions = require('../../../actions/contentActions');

const AppDashboardContentForm = require('../AppDashboardContentForm/AppDashboardContentForm.jsx');
const AppDashboardContentHeader = require('../AppDashboardContentHeader/AppDashboardContentHeader.jsx');
const AppDashboardContentInvitationsLinks = require('../AppDashboardContentInvitationsLinks/AppDashboardContentInvitationsLinks.jsx');
const AppDashboardContentSeedEditor = require('../AppDashboardContentSeedEditor/AppDashboardContentSeedEditor.jsx');
/**
* AppDashboardContentInvitations
*
* @module AppDashboardContentInvitations
*/
class AppDashboardContentInvitations extends React.Component {

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
                width: "90%",
                display: "flex",
                flexDirection: "column",
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
        let _div = this._div();
        return (
            <div style={_div.style}>
                <AppDashboardContentHeader 
                    largeText="Send an invitation"
                    smallText=""
                />
                <AppDashboardContentInvitationsLinks
                    content={content}
                />
                <AppDashboardContentSeedEditor
                    content={content}
                />
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardContentInvitations);