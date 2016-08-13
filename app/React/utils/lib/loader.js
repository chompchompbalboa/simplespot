/**
* loader.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
*/
var React = require('react');
/**
* For now, our theme list is here. I will more than likely abstract this away
* eventually, but for ease of development's sake, I'm going to leave it here
* for now.
*
* @list ModuleList
*/
var Rocky = require('../../components/Themes/Rocky/Rocky.jsx');
/**
* The module loader. Used to build the individual pages.
*
* @module loader
*/
var loader = {

    /**
    * Load the current theme
    *
    * @function loadTheme
    * @param {string} keychain - Used to build the keys for each module
    * @param {object} modules
    * @param {object} utils
    */
    loadTheme: function(site, utils) {
        console.log(site);
        let theme = eval(site.theme);
        let props = {
            utils: utils
        };
        return (
            React.createElement(
                theme,
                props,
            )
        )
    },
};
module.exports = loader;