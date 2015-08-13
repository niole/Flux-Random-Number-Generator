var AppDispatcher = require('../dispatcher/AppDispatcher');
var GeneratorConstants = require('../constants/GeneratorConstants');

// Define actions object
var GeneratorActions = {

  // Receive inital number
  receiveNumber: function(data) {
    AppDispatcher.handleAction({
      actionType: GeneratorConstants.RECEIVE_NUMBER,
      object: data
    })
  },

  // Set currently selected number place
  selectUpdateNumber: function(index) {
    AppDispatcher.handleAction({
      actionType: GeneratorConstants.SELECT_NUMBER,
      index: index
    })
  },

  // Add number to generator
  addToGenerator: function() {
    AppDispatcher.handleAction({
      actionType: GeneratorConstants.ADD_NUMBER
    })
  },

  // Remove number place from generator
  removeFromGenerator: function(index) {
    AppDispatcher.handleAction({
      actionType: GeneratorConstants.REMOVE_NUMBER,
      index: index
    })
  }

};

module.exports = GeneratorActions;
