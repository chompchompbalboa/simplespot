//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
var React = require('react');
var Radium = require('radium');

var AppNavigation = require('../components/App/Modules/AppNavigation/AppNavigation.jsx');
var AppLinkInternal = require('../components/App/Modules/AppLinkInternal/AppLinkInternal.jsx');

var BasicText = require('../components/Modules/BasicText/BasicText.jsx');
//-----------------------------------------------------------------------------
// Module
//-----------------------------------------------------------------------------

var appLoader = {

    //-----------------------------------------------------------------------------
    // Load Children
    //-----------------------------------------------------------------------------

    loadChildren: function(all, utils) {
        return (this._modules(all, utils));
    },

    //-----------------------------------------------------------------------------
    // Load Page
    //-----------------------------------------------------------------------------

    loadPage: function(utils, pages, path) {
        return (this._modules(this._page(pages, path), utils));
    },

    //-------------------------------------------------------------------------
    // Modules
    //-------------------------------------------------------------------------

    _modules: function(all, utils) {
        var modules = [];
        for (let current in all) {
            let module = all[current];
            let key = "modules-" + current;
            modules.push(
                React.createElement(
                    eval(module.module),
                    {
                        key: key,
                        utils: utils,
                        module: module,
                    }
                )
            );
        }
        return modules;
    },

    //-------------------------------------------------------------------------
    // Page
    //-------------------------------------------------------------------------

    _page: function(pages, path) {
        var page;
        var flag = false;
        var i = 0;
        while (flag === false) {
            let current = String(i);
            if(pages[current].path === path) {
                page = pages[current];
                flag = true
            }
            i = i + 1;
        }
        return page.modules;
    }
};

//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
module.exports = appLoader;