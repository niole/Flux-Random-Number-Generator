var GeneratorActions = require('./actions/GeneratorActions');

module.exports = {

// Load mock product data from localStorage into
// ProductStore via Action

  getGeneratorData: function() {
    var data = JSON.parse(localStorage.getItem('number'));
    GeneratorActions.receiveNumber(data);
  }

};
