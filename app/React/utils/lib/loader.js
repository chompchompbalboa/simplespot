/**
* loader.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires defaultProps
*/
var React = require('react');


/**
* For now, our module list is here. I will more than likely abstract this away
* eventually, but for ease of development's sake, I'm going to leave it here
* for now.
*
* @list ModuleList
*/
var AppBackground = require('../../components/Modules/App/AppBackground.jsx');
var AppCreate = require('../../components/Modules/App/AppCreate.jsx');
var AppDashboard = require('../../components/Modules/App/AppDashboard.jsx');
var AppEditor = require('../../components/Modules/App/AppEditor.jsx');
var AppHome = require('../../components/Modules/App/AppHome.jsx');

var OneCanvas = require('../../components/Modules/One/OneCanvas.jsx');
var OneHeader = require('../../components/Modules/One/OneHeader.jsx');
var OneName = require('../../components/Modules/One/OneName.jsx');

var PersonalFooter = require('../../components/Modules/Personal/PersonalFooter.jsx');
var PersonalHire = require('../../components/Modules/Personal/PersonalHire.jsx');
var PersonalPrinciples = require('../../components/Modules/Personal/PersonalPrinciples.jsx');
var PersonalServices = require('../../components/Modules/Personal/PersonalServices.jsx');
var PersonalWelcome = require('../../components/Modules/Personal/PersonalWelcome.jsx');

var SplashWelcome = require('../../components/Modules/Splash/SplashWelcome.jsx');
/**
* The module loader. Used to build the individual pages.
*
* @module loader
*/
var loader = {

    /**
    * This is where the magic happens. The base page modules feed this function
    * a list of modules that need to be loaded. They are then loaded and their
    * settings passed in.
    *
    * @function loadModules
    * @param {string} keychain - Used to build the keys for each module
    * @param {object} modules
    * @param {object} utils
    */
    loadModules: function(app, display, keychain, modules, site, utils) {
        let payload = [];
        for (let current in modules) {
            let module = modules[current];
            // TODO: Whitelist
            let element = eval(module['module']);
            let props = this._setProps(app, current, display, keychain, module['module'], module['props'], site, utils);
            //console.log(props);
            let children;
            payload.push(
                React.createElement(
                    element,
                    props,
                    children
                )
            );
        }
        return payload;
    },

    /**
    * Pass props into the current module
    *
    * @function _setProps
    * @param {string} current - Passed from loadModules, unique identifier
    * @param {string} keychain - Passed from parent, prefix to unique identifier
    * @param {object} props
    * @param {object} utils
    */
    _setProps: function(app, current, display, keychain, module, props, site, utils) {
        var payload = {};
        if(typeof props !== 'undefined') {
            for (let prop in props) {
                payload[prop] = props[prop];
            }
        }
        else {
            payload = this._setPropsFromDefault(module, utils);
        }
        let key = keychain + (Number.isNaN(Number(keychain.slice(-1))) ? "." : ".props.contents.") + current;
        payload.app = app;
        payload.display = display;
        payload.key = key;
        payload.keychain = key;
        payload.site = site;
        payload.utils = utils;
        return payload;
    },

    /**
    * Set props from default
    *
    * @function _setProps
    * @param {string} current - Passed from loadModules, unique identifier
    * @param {string} defaultProps - The default props for all modules
    * @param {string} keychain - Passed from parent, prefix to unique identifier
    * @param {object} props
    * @param {object} utils
    */
    _setPropsFromDefault: function(module, utils) {
        let payload = {};
        let defaultProps = utils.defaultProps;
        for (let i in defaultProps) {
            if(defaultProps[i].module === module) {
                for (let j in defaultProps[i].props) {
                    payload[j] = defaultProps[i].props[j]
                }
            }
        }
        return payload;
    }
};
module.exports = loader;