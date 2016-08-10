//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
var React = require('react');
var Radium = require('radium');

var utils = require('../utils');
//-----------------------------------------------------------------------------
// Module
//-----------------------------------------------------------------------------

var loader = {

    //-----------------------------------------------------------------------------
    // Load Page
    //-----------------------------------------------------------------------------

    loadPage: function(attributes, pages, path) {
        return (this._modulesNew(this._page(pages, path), attributes));
    },

    _modulesNew: function(all, store) {
        var modules = [];
        for (let current in all) {
            let module = all[current];
            let element = module.element;
            let attributes = this.createAttributes(module.settings.self, store);
            attributes.key = module.key;
            let children = this.createChildren(module.settings, store);
            modules.push(
                React.createElement(
                    element,
                    attributes,
                    children
                )
            );
        }
        return modules;
    },

    createChildren: function(settings, store) {
        var children;
        let keys = Object.keys(settings);
        let settingsCount = Object.keys(settings).length;
        if (settingsCount === 1 && keys[0] === "self") {
            for (let j in settings['self']) {
                if (store['strings'].hasOwnProperty(settings['self'][j])) {
                    children = store['strings'][settings['self'][j]];
                }
            }
        }
        else {
            children = [];
            for (let i in settings) {
                if (i !== "self") {
                    children.push(this._modulesNew(settings[i], store));
                }
            }
        }
        return children;
    },

    createAttributes: function(module, store) {
        var attributes = {};
        for (let i in store) {
            switch(i) {
                case "onClick":
                    for (let j in module) {
                        if (store[i].hasOwnProperty(module[j])) {
                            attributes[i] = this.createEventHandler(store[i][module[j]]);
                        }
                    }
                break;
                default: 
                    for (let j in module) {
                    if (store[i].hasOwnProperty(module[j])) {
                        attributes[i] = store[i][module[j]];
                    }
                } 
            }
            
        }
        return attributes;
    },

    setAttributes: function(module, store) {
        var attributes;
        for (let j in module) {
            if (store[i].hasOwnProperty(module[j])) {
                attributes[i] = store[i][module[j]];
            }
        }
        return attributes;

    },

    createEventHandler: function(eventInfo) {
        var eventHandler;
        switch (eventInfo.eventRef) {
            case "LINK_INTERNAL":
            console.log(utils);
                let handler = utils[eventInfo.info.handler];
                eventHandler = ((e) => handler.internalLinkClick(e, eventInfo.info.href))
            break;
        }
        return eventHandler;
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