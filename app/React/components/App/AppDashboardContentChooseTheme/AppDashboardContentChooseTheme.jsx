/**
* AppDashboardContentChooseTheme.jsx
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
/**
* AppDashboardContentChooseTheme
*
* @module AppDashboardContentChooseTheme
*/
class AppDashboardContentChooseTheme extends React.Component {

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
        submits: {
            "1": {
                text: "NEXT",
                onSubmit: {
                    action: {
                        type: "fetch",
                        request: "APP_SAVE-THEME"
                    }
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
        let {content, submits, ...other} = this.props;
        let _div = this._div();
        return (
            <div style={_div.style}>
                <AppDashboardContentHeader 
                    largeText="Pick your favorite theme"
                    smallText="Let's figure out what you want your site to look like. Flip through our themes and choose your favorite."
                />
                <AppDashboardContentForm 
                    content={content}
                    inputs={{}}
                    submits={submits}
                />
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardContentChooseTheme);