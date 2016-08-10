/**
* propsUtils.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
*/

/**
* This module takes two arrays and compares each value within them by index.
* This is used to determine if an element or module is a parent of another. 
*
* @module propsUtils
*/
var propsUtils = {

    /**
    * This module strips the props of the tags we use to identify editable
    * information
    * 
    * @function stripEditableTags
    * @param {array} child
    * @param {array} test
    */
    stripEditableTags: function(props) {
        let payload = {};
        let exclusions = ['contents', 'editable', 'key', 'keychain', 'utils'];
        for (let i in props) {
            if(exclusions.indexOf(i) === -1) {
                payload[i] = this._stripEditableTagsProp(props[i]);
            }
        }
        //console.log(props);
        return props;
    },

    /**
    * Here's the business logic for stripping the tags within a prop. Recursive
    * if the argument is an object
    * 
    * @function stripEditableTags
    * @param prop
    */
    _stripEditableTagsProp: function(prop) {
        let tags = ['{*(', ')*}'];
        // Our tags contain regular expression metacharacters, we need to make
        // they're properly escaped
        let escapeRegExp = function(str) {
            return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
        };
        switch(typeof prop) {
            case 'object':
                for (let i in prop) {
                    prop[i] = this._stripEditableTagsProp(prop[i]);
                }
            break;
            case 'string':
                for (let j in tags) {
                    let tag = tags[j];
                    if(prop.includes(tag)) {
                        prop = prop.replace(new RegExp(escapeRegExp(tag), 'g'), "");
                    }    
                }
            break
        }
        return prop;
    }
};
module.exports = propsUtils;