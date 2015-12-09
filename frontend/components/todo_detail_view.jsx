var React = require('react'),
    bootstrap = require("bootstrap"),
    TodoStore = require('../stores/todo_store'),
    StepList = require('./step_list');

var TodoDetailView = React.createClass({
  deleteButton: function () {
    return (
      <button className="btn btn-success"
              onClick={ this.handleDeleteClick }>
        Delete
      </button>
    );
  },

  stepList: function () {
    return (
      <StepList todoId={ this.props.id } />
    );
  },

  handleDeleteClick: function (e) {
    e.preventDefault();

    var id = this.props.id;

    TodoStore.destroy(id);
  },

  render: function () {
    return (
      <div>
        <div>{ this.props.body }</div>
        <div>{ this.deleteButton() }</div>
        { this.stepList() }
      </div>
    );
  }
});

module.exports = TodoDetailView;
