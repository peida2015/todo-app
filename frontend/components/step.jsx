var React = require('react'),
    DoneButton = require('./done_button'),
    StepStore = require('../stores/step_store');

var Step = React.createClass({
  handleDone: function (e) {
    e.preventDefault();
    StepStore.toggleDone(this.props.todoId, this.props.step.id);
  },

  render: function () {
    return (
      <li key={ this.props.step.id }>
        { this.props.step.body }
        <DoneButton done={ this.props.step.done }
                    handleDone={ this.handleDone }
                    style="display:inline" />
      </li>
    );
  }
});

module.exports = Step;
