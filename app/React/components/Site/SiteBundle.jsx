/**
* SiteBundle.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires StyleRoot
* @requires React
* @requires Radium
* @requires siteStore
* @requires siteActions
* @requires utils
* @requires Site
*/
import {StyleRoot} from 'radium';
var React = require('react');
var Radium = require('radium');

var displayStore = require('../../stores/displayStore');
var displayActions = require('../../actions/displayActions');
var siteStore = require('../../stores/siteStore');
var siteActions = require('../../actions/siteActions');
var utils = require('../../utils/utils');

var Site = require('./Site.jsx');

/**
* The bundler for built sites.
*
* @module SiteBundle
*/
var SiteBundle = React.createClass({

    /**
    * @function getInitialState
    */
    getInitialState: function() {
        return {
            display: {
                site: {
                    load: "initial",
                    path: window.location.pathname
                }
            },
            site: null
        };
    },

    /**
    * @function componentDidMount
    */
    componentDidMount: function() {
        window.history.replaceState({display: this.state.display}, "", window.location.pathname);
        window.addEventListener('popstate', (e) => utils.displayHandler.popStateChange(e));
        displayStore.addChangeListener(this._onChange); 
        displayActions.fetchContent();
        siteStore.addChangeListener(this._onChange); 
        siteActions.fetchContent();
    },

    /**
    * @function componentWillMount
    */
    componentWillUnmount: function() {
        window.removeEventListener('popstate', (e) => utils.displayHandler.popStateChange(e));
        displayStore.removeChangeListener(this._onChange);
        siteStore.removeChangeListener(this._onChange);
    },

    /**
    * @function _onChange
    */
    _onChange: function() {
      this.setState({
            display: displayStore.getContent(),
            site: siteStore.getContent()
      });
    },

    /**
    * @function render
    */
    render: function() {
        if(this.state.display !== null && this.state.site !== null) {
            return (
                <StyleRoot>
                    <Site display={this.state.display} site={this.state.site} utils={utils} />
                </StyleRoot>
            ) 
        }
        else {
            return (
                <StyleRoot>
                    <section id="site">
                    </section>
                </StyleRoot>
            ) 
        } 
    }    
});
module.exports = Radium(SiteBundle);