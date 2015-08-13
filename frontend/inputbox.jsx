"use strict";
var React = require('react');

var InputBox = React.createClass({
  render() {
     return (
      <div class="doubling stackable celled ui grid container">
        <div class="three column row">
          <div class="column">
            <div class="ui segment">Content</div>
          </div>
          <div class="column">
            <div class="ui segment">Content</div>
          </div>
          <div class="column">
            <div class="ui segment">Content</div>
          </div>
        </div>
        <div class="two column row">
          <div class="column">
            <div class="ui segment">Content</div>
          </div>
          <div class="column">
            <div class="ui segment">Content</div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = InputBox;
