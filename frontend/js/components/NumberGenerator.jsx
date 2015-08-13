"use strict";
var React = require('react');
var GeneratorStore = require('../stores/GeneratorStore');
var GeneratorActions = require('../actions/GeneratorActions');

var getGenerator = function() {
  var state =GeneratorStore.getGeneratorState();
  return { generator: state.generator,
           selected: state.selected
          };
};


var NumberGenerator = React.createClass({
  getInitialState: function() {
    return getGenerator();
  },
  componentDidMount: function() {
    GeneratorStore.addChangeListener(this.onChange);
  },
  // Remove change listers from stores
  componentWillUnmount: function() {
    GeneratorStore.removeChangeListener(this.onChange);
  },
  render: function() {
    var generator = [];
    var tIndex;
    for (var key in this.state.generator) {
      if (key === this.state.selected) {
        tIndex = "0";
      } else {
        tIndex = "-1";
      }

     generator.push(
            <li>

              <div onClick={this.updateNumber.bind(null,key)} className="ui cube shape">
                <div className="sides">
                  <div className="active side">
                    <div className="content">
                      <div className="center">
                        {this.state.generator[key]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div value="-" onClick={this.removeNumber.bind(null,key)} className="ui button" tabindex={{tIndex}}>
                -
              </div>
            </li>
            );
      }
    return (
      <div>
        <ul className="flux-num-gen">
          {generator}
        </ul>
        <button value="+" onClick={this.addNumber}>+</button>
      </div>
    )
  },
  addNumber: function(event) {
    event.preventDefault();
    GeneratorActions.addToGenerator();
  },
  removeNumber: function(key) {
    event.preventDefault();
    console.log(key);
    GeneratorActions.removeFromGenerator(key);
  },
  updateNumber: function(key) {
    event.preventDefault();
    console.log(key);
    GeneratorActions.selectUpdateNumber(key);
  },
  onChange: function() {
    var state = GeneratorStore.getGeneratorState();
    this.setState({ generator: state.generator, selected: state.selected });
  }
});

module.exports = NumberGenerator;
