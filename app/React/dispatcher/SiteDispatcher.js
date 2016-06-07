var Dispatcher = require('flux').Dispatcher;
var SiteDispatcher = new Dispatcher();

SiteDispatcher.handleAction = function(action){
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
};

module.exports = SiteDispatcher;