var React = require('react'),
    StepStore = require('../stores/step_store'),
    StepForm = require('./step_form'),
    Step = require('./step');

var StepList = React.createClass({
  getInitialState: function () {
    return { list: StepStore.all(this.props.todoId) };
  },

  componentDidMount: function () {
    StepStore.addChangedHandler(this.stepChanged);
    StepStore.fetch(this.props.todoId);
  },

  componentWillUnmount: function () {
    StepStore.removeChangedHandler(this.stepChanged);
  },

  stepChanged: function () {
    this.setState({ list: StepStore.all(this.props.todoId) });
  },

  steps: function () {
    return this.state.list.map(function (step) {
      return (
        <Step key={ step.id }
              todoId={ this.props.todoId }
              step={ step } />
      );
    }.bind(this));
  },

  render: function () {
    return (
      <div>
        { this.steps() }

        <hr></hr>

        <StepForm todoId={ this.props.todoId } />
      </div>
    );
  }
});

module.exports = StepList;
