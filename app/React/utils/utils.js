/**
* utils.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires adminHandler
* @requires appHandler
* @requires isSet
* @requires loader
* @requires siteHandler
*/
var adminHandler = require('./handlers/adminHandler');
var appHandler = require('./handlers/appHandler');
var displayHandler = require('./handlers/displayHandler');
var isSet = require('./lib/isSet');
var loader = require('./lib/loader');
var propsUtils = require('./lib/propsUtils');
var siteHandler = require('./handlers/siteHandler');

/**
* This module loads all of our utility functions so they're accessible from
* a common location.
*
* @module utils
*/
var utils = {
    adminHandler: adminHandler,
    appHandler: appHandler,
    displayHandler: displayHandler,
    isSet: isSet,
    loader: loader,
    propsUtils: propsUtils,
    siteHandler: siteHandler
};
module.exports = utils;