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

var contentStore = require('../../stores/contentStore');
var contentActions = require('../../actions/contentActions');
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
            content: null
        };
    },

    /**
    * @function componentDidMount
    */
    componentDidMount: function() {
        //window.history.replaceState({content: this.state.content}, "", window.location.pathname);
        //window.addEventListener('popstate', (e) => utils.displayHandler.popStateChange(e));
        contentStore.addChangeListener(this._onChange); 
        contentActions.fetchContent("CONTENT_SITE");
    },

    /**
    * @function componentWillMount
    */
    componentWillUnmount: function() {
        //window.removeEventListener('popstate', (e) => utils.displayHandler.popStateChange(e));
        displayStore.removeChangeListener(this._onChange);
    },

    /**
    * @function _onChange
    */
    _onChange: function() {
      this.setState({
            content: contentStore.getContent()
      });
    },

    /**
    * @function render
    */
    render: function() {
        if(this.state.content !== null) {
            return (
                <StyleRoot>
                    <Site content={this.state.content} utils={utils} />
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