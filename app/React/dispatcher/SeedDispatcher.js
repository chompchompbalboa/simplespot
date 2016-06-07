var Dispatcher = require('flux').Dispatcher;
var SeedDispatcher = new Dispatcher();

SeedDispatcher.handleAction = function(action){
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
};

module.exports = SeedDispatcher;