//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------

var React = require('react');
var Radium = require('radium');

//-----------------------------------------------------------------------------
// Module
//-----------------------------------------------------------------------------

var adminLoader = {

    //-----------------------------------------------------------------------------
    // Load
    //-----------------------------------------------------------------------------

    load: function(pages, path) {
        return (this._modules(this._page(pages, path)));
    },

    //-------------------------------------------------------------------------
    // Modules
    //-------------------------------------------------------------------------

    _modules: function(page) {
        var modules = [];
        for (let current in page.modules) {
            let module = page.modules[current];
            let key = "modules-" + current;
            modules.push(
                React.createElement(
                    eval(module.module),
                    {
                        key: key,
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
        return page;
    }
};

//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
module.exports = adminLoader;