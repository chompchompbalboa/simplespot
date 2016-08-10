/**
* AdminBundle.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires StyleRoot
* @requires React
* @requires Radium
* @requires appStore
* @requires appActions
* @requires modulesStore
* @requires modulesActions
* @requires siteStore
* @requires siteActions
* @requires utils
* @requires Site
*/
import {StyleRoot} from 'radium';
var React = require('react');
var Radium = require('radium');

var adminStore = require('../../stores/adminStore');
var adminActions = require('../../actions/adminActions');
var appStore = require('../../stores/appStore');
var appActions = require('../../actions/appActions');
var displayStore = require('../../stores/displayStore');
var displayActions = require('../../actions/displayActions');
var modulesStore = require('../../stores/modulesStore');
var modulesActions = require('../../actions/modulesActions');
var siteStore = require('../../stores/siteStore');
var siteActions = require('../../actions/siteActions');
var utils = require('../../utils/utils');

var Admin = require('./Admin.jsx');
var App = require('./App.jsx');
var Site = require('../Site/Site.jsx');

/**
* The bundler for the admin sections
*
* @module AdminBundle
*/
var AdminBundle = React.createClass({

    /**
    * @function getInitialState
    */
    getInitialState: function() {
        return {
            admin: null,
            app: null,
            display: {
                app: {
                    AdminCreate: {
                        active: "AdminCreateHome"
                    },
                    AdminHome: {
                        submitText: "Login/Register"
                    },
                    load: "initial",
                    path: window.location.pathname
                },
                site: {
                    load: "initial",
                    path: "/"
                }
            },
            modules: null,
            site: null
        };
    },

    /**
    * @function componentDidMount
    */
    componentDidMount: function() {
        window.history.replaceState({display: this.state.display}, "", window.location.pathname);
        window.addEventListener('popstate', (e) => utils.displayHandler.popStateChange(e));
        adminStore.addChangeListener(this._onChange); 
        adminActions.fetchContent();
        appStore.addChangeListener(this._onChange); 
        appActions.fetchContent();
        displayStore.addChangeListener(this._onChange); 
        displayActions.fetchContent();
        modulesStore.addChangeListener(this._onChange); 
        modulesActions.fetchContent();
        siteStore.addChangeListener(this._onChange); 
        siteActions.fetchContent();
    },

    /**
    * @function componentWillMount
    */
    componentWillUnmount: function() {
        window.removeEventListener('popstate', (e) => utils.displayHandler.popStateChange(e));
        adminStore.removeChangeListener(this._onChange);
        appStore.removeChangeListener(this._onChange);
        displayStore.removeChangeListener(this._onChange);
        modulesStore.removeChangeListener(this._onChange);
        siteStore.removeChangeListener(this._onChange);
    },

    /**
    * @function _onChange
    */
    _onChange: function() {
      this.setState({
            admin: adminStore.getContent(),
            app: appStore.getContent(),
            display: displayStore.getContent(),
            modules: modulesStore.getContent(),
            site: siteStore.getContent()
      });
    },

    /**
    * @function render a
    */
    render: function() {
        if(this.state.admin !== null && this.state.app !== null && this.state.display !== null && this.state.modules !== null && this.state.site !== null) {
            return (
                <StyleRoot>
                    <Admin admin={this.state.admin} app={this.state.app} display={this.state.display} modules={this.state.modules} site={this.state.site} utils={utils} />
                    <App app={this.state.app} display={this.state.display} modules={this.state.modules} site={this.state.site} utils={utils} />
                    <Site display={this.state.display} site={this.state.site} utils={utils} />
                </StyleRoot>
            ) 
        }
        else {
            return (
                <StyleRoot>
                    <section id="app">
                    </section>
                </StyleRoot>
            ) 
        } 
    }    
});
module.exports = Radium(AdminBundle);