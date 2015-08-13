var keyMirror = require('react/lib/keyMirror');

// Define action constants
module.exports = keyMirror({
  RECEIVE_NUMBER: null,       // Adds item to cart
  REMOVE_NUMBER: null,    // Remove item from cart
  SELECT_NUMBER: null,   // Selects a product option
  ADD_NUMBER: null    // Loads our mock data
});
