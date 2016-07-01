//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
import {StyleRoot} from 'radium';

var React = require('react');
var Radium = require('radium');

var appStore = require('../../stores/appStore');
var appActions = require('../../actions/appActions');
var modulesStore = require('../../stores/modulesStore');
var modulesActions = require('../../actions/modulesActions');
var seedStore = require('../../stores/seedStore');
var seedActions = require('../../actions/seedActions');
var siteStore = require('../../stores/siteStore');
var siteActions = require('../../actions/siteActions');

var App = require('../App/App.jsx');
var Site = require('../Site/Site.jsx');
//-----------------------------------------------------------------------------
// Module
//-----------------------------------------------------------------------------
var AppBundle = React.createClass({
    //-------------------------------------------------------------------------
    // Display Name
    //-------------------------------------------------------------------------

    //-------------------------------------------------------------------------
    // Prop Types
    //-------------------------------------------------------------------------

    //-------------------------------------------------------------------------
    // Mixins
    //-------------------------------------------------------------------------

    //-------------------------------------------------------------------------
    // Statics
    //-------------------------------------------------------------------------

    //-------------------------------------------------------------------------
    // Get Initial State
    //-------------------------------------------------------------------------

    getInitialState: function() {
        return {
            app: null,
            modules: null,
            seed: null,
            site: null
        };
    },

    //-------------------------------------------------------------------------
    // Get Default Props
    //-------------------------------------------------------------------------

    //-------------------------------------------------------------------------
    // Component Will Mount
    //-------------------------------------------------------------------------

    //-------------------------------------------------------------------------
    // Component Did Mount
    //-------------------------------------------------------------------------

    componentDidMount: function() {
        appStore.addChangeListener(this._onChange);
        modulesStore.addChangeListener(this._onChange);
        seedStore.addChangeListener(this._onChange);
        siteStore.addChangeListener(this._onChange);
        appActions.fetchApp();
        modulesActions.fetchModules();
        seedActions.fetchSeed();
        siteActions.fetchSite();
    },

    //-------------------------------------------------------------------------
    // Component Will Recieve Props
    //-------------------------------------------------------------------------

    //-------------------------------------------------------------------------
    // Should Component Update
    //-------------------------------------------------------------------------

    //-------------------------------------------------------------------------
    // Component Will Update
    //-------------------------------------------------------------------------

    //-------------------------------------------------------------------------
    // Component Did Update
    //-------------------------------------------------------------------------

    //-------------------------------------------------------------------------
    // Component Will Unmount
    //-------------------------------------------------------------------------

    componentWillUnmount: function() {
        appStore.removeChangeListener(this._onChange);
        modulesStore.removeChangeListener(this._onChange);
        seedStore.removeChangeListener(this._onChange);
        siteStore.removeChangeListener(this._onChange);
    },

    //-------------------------------------------------------------------------
    // On Change
    //-------------------------------------------------------------------------

    _onChange: function() {
      this.setState({
            app: appStore.getContent(),
            modules: modulesStore.getContent(),
            seed: seedStore.getContent(),
            site: siteStore.getContent()
      });
    },

    //-------------------------------------------------------------------------
    // Handle Change Content
    //-------------------------------------------------------------------------

    //-------------------------------------------------------------------------
    // Objects
    //-------------------------------------------------------------------------

    //-------------------------------------------------------------------------
    // Handles
    //-------------------------------------------------------------------------

    //-------------------------------------------------------------------------
    // Style
    //-------------------------------------------------------------------------
    
    //-------------------------------------------------------------------------
    // Render
    //-------------------------------------------------------------------------

    render: function() {

        if(this.state.app !== null && this.state.modules !== null && this.state.seed !== null && this.state.site !== null) {

            return (
                <StyleRoot>
                    <App app={this.state.app} modules={this.state.modules} seed={this.state.seed} site={this.state.site} />
                    <Site modules={this.state.modules} seed={this.state.seed} site={this.state.site} />
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
    
//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
module.exports = Radium(AppBundle);