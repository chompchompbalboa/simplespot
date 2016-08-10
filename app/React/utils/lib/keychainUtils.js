/**
* keychainUtils.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
*/

/**
* This module handles tasks that involve gathering information
* from the keychain
*
* @module keychainUtils
*/
var keychainUtils = {

    /**
    * Returns true if the test element is a parent of the active keychain
    * 
    * @function isParent
    * @param {array} child
    * @param {array} test
    */
    isParent: function(child, test) {
        let results = true;
        for (let value in test) {
            if (test[value] !== child[value]) {
                results = false;
            }
        }
        return results;
    }
};
module.exports = keychainUtils;