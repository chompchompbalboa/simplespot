/**
* handler.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*/

/**
* This module implements all the shared functionality between the handlers 
*
* @module handler
*/
var handler = {

    /**
    * Handle a change in a controlled value
    * 
    * @function controlledValueChange
    * @param {SyntheticEvent} e - The event
    */
    controlledValueChange: function(actions, e, keychain) {
        let changes;
        switch (typeof keychain) {
            case "object":
                changes = keychain.map(function(item) {
                    return {key: item, value: e.target.value}
                });
            break;
            case "string":
                changes = [
                    {key: keychain, value: e.target.value}
                ];
            break;
        }
        actions.changeContent(changes);
    }
};
module.exports = handler;