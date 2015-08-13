var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var GeneratorConstants = require('../constants/GeneratorConstants');
var _ = require('underscore');

// Define initial data points
var _number = {}, _length = 0, _index = "0";
function loadInitialNumber(number){
  _number = number;
  _length = Object.keys(_number).length-1;
}

function selectChangeNumber(index) {
  //assumes index is string
  var randInt;
  function updateNumber() {
    return Math.floor(Math.random()*9);
  }
  _index = index;
  randInt = updateNumber();
  while (randInt === _number[_index]) {
    randInt = updateNumber();
  }
  if (randInt !== _number[_index]) {
    _number[_index] = randInt;
  }
}

function addNumber() {
  _length += 1;
  _number[_length.toString()] = 0;
}

function removeNumber(index) {
  //assumes index is string
  delete _number[index];
}

var GeneratorStore = _.extend({}, EventEmitter.prototype, {

  // Return number
  getGeneratorState: function() {
    return {generator: _number, selected: _index};
  },

  // Emit Change event
  emitChange: function() {
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {
    case GeneratorConstants.RECEIVE_NUMBER:
      loadInitialNumber(action.object);
      break;

    case GeneratorConstants.SELECT_NUMBER:
      selectChangeNumber(action.index);
      break;

    case GeneratorConstants.ADD_NUMBER:
      addNumber();
      break;

    case GeneratorConstants.REMOVE_NUMBER:
      removeNumber(action.index);
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  GeneratorStore.emitChange();

  return true;

});

module.exports = GeneratorStore;
