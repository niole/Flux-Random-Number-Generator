module.exports = {
  // Load Mock Product Data Into localStorage
  init: function() {
    localStorage.clear();
    localStorage.setItem('number', JSON.stringify([0,0,0]));
  }
};
