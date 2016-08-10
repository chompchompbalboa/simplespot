//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------

var React = require('react');
var Radium = require('radium');

// Admin
// App
var AppNavigationUser = require('../../components/App/Modules/AppNavigationUser/AppNavigationUser.jsx');
// Site
// Modules
var BasicImage = require('../../components/Modules/BasicImage/BasicImage.jsx');
var BasicLinkInternal = require('../../components/Modules/BasicLinkInternal/BasicLinkInternal.jsx');
var BasicList = require('../../components/Modules/BasicList/BasicList.jsx');
var BasicListItem = require('../../components/Modules/BasicListItem/BasicListItem.jsx');
var BasicNav = require('../../components/Modules/BasicNav/BasicNav.jsx');
var BasicText = require('../../components/Modules/BasicText/BasicText.jsx');

//-----------------------------------------------------------------------------
// Module
//-----------------------------------------------------------------------------

var loader = {

    //-----------------------------------------------------------------------------
    // Load Children
    //-----------------------------------------------------------------------------

    loadChildren: function(all, attributes, utils) {
        return (this._modules(all, attributes, utils));
    },

    //-----------------------------------------------------------------------------
    // Load Page
    //-----------------------------------------------------------------------------

    loadPage: function(attributes, pages, path, utils) {
        return (this._modules(this._page(pages, path), attributes, utils));
    },

    //-------------------------------------------------------------------------
    // Modules
    //-------------------------------------------------------------------------

    _modules: function(all, attributes, utils) {
        var modules = [];
        for (let current in all) {
            let module = all[current];
            let key = "modules-" + current;
            modules.push(
                React.createElement(
                    eval(module.module),
                    {
                        key: key,
                        attributes: attributes,
                        module: module,
                        utils: utils
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
module.exports = loader;