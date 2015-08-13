"use strict";
var React = require('react');
var GeneratorData = require('./js/GeneratorData');
var GeneratorAPI = require('./js/GeneratorAPI')
var NumberGenerator = require('./js/components/NumberGenerator.jsx');

// Load Mock Product Data into localStorage
GeneratorData.init();

// Load Mock API Call
GeneratorAPI.getGeneratorData();

$(function() {
  React.render( <NumberGenerator/>, $('#container')[0]);
});
